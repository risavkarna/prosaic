import React, { useEffect, useRef, useState } from 'react';
import { EditorView } from 'prosemirror-view';

interface SelectionSizeTooltipProps {
  view: EditorView;
}

const SelectionSizeTooltip: React.FC<SelectionSizeTooltipProps> = ({ view }) => {
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({ display: 'none' });
  const [tooltipContent, setTooltipContent] = useState<string>('');

  useEffect(() => {
    const update = (view: EditorView, lastState: any) => {
      const state = view.state;
      if (lastState && lastState.doc.eq(state.doc) && lastState.selection.eq(state.selection)) return;

      if (state.selection.empty) {
        setTooltipStyle({ display: 'none' });
        return;
      }

      const { from, to } = state.selection;
      const start = view.coordsAtPos(from);
      const end = view.coordsAtPos(to);
      const box = tooltipRef.current!.offsetParent!.getBoundingClientRect();
      const left = Math.max((start.left + end.left) / 2, start.left + 3);
      setTooltipStyle({
        display: '',
        left: `${left - box.left}px`,
        bottom: `${box.bottom - start.top}px`,
      });
      setTooltipContent((to - from).toString());
    };

    const destroy = () => {
      if (tooltipRef.current) {
        tooltipRef.current.remove();
      }
    };

    view.updateState = (state) => {
      update(view, state);
    };

    return () => {
      destroy();
    };
  }, [view]);

  return (
    <div ref={tooltipRef} className="tooltip" style={tooltipStyle}>
      {tooltipContent}
    </div>
  );
};

export default SelectionSizeTooltip;
