import { WysiwygEditor } from '@remirror/react-editors/wysiwyg';
import type { RemirrorJSON } from 'remirror';
import { OnChangeJSON } from '@remirror/react';

export interface MyEditorProps {
  onChange: (json: RemirrorJSON) => void;
  initialContent?: RemirrorJSON;
}

export const RemEditor: React.FC<MyEditorProps> = ({ onChange }) => {
  return (
    <div style={{ padding: 16 }}>
      <WysiwygEditor placeholder='Enter text...'>
        <OnChangeJSON onChange={onChange} />
      </WysiwygEditor>
    </div>
  );
};
