import React, { useEffect, useRef } from 'react';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';
import { ySyncPlugin, yCursorPlugin, yUndoPlugin } from 'y-prosemirror';
import { schema } from 'prosemirror-schema-basic';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { exampleSetup } from 'prosemirror-example-setup';
import './optics.css';


export const CollaborativeEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Create a Yjs document
    const ydoc = new Y.Doc();

    // Connect to other peers via WebRTC
    const provider = new WebrtcProvider('my-inspiring-room', ydoc);

    // Create a shared type
    const yXmlFragment = ydoc.getXmlFragment('prosemirror');

    // Create the initial editor state
    const state = EditorState.create({
      schema,
      plugins: [
        ySyncPlugin(yXmlFragment),
        yCursorPlugin(provider.awareness),
        yUndoPlugin(),
        ...exampleSetup({ schema })
      ]
    });

    const view = new EditorView(editorRef?.current, {
      state
    });

    // Clean up on component unmount
    return () => {
      view.destroy();
      provider.destroy();
      ydoc.destroy();
    };
  }, []);

  return <div ref={editorRef} className='flex'/>;
};
