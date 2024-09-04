import tw from 'tailwind-styled-components';
import { RemEditor } from './components/wysiwyg';
import { useCallback, useState } from 'react';
import { RemirrorJSON } from 'remirror';

const StyledWall = tw.div`
  border-2
`;

const STORAGE_KEY = 'remirror-editor-content';


export function Wall() {


  const [initialContent] = useState<RemirrorJSON | undefined>(() => {
    // Retrieve the JSON from localStorage (or undefined if not found)
    const content = window.localStorage.getItem(STORAGE_KEY);
    return content ? JSON.parse(content) : undefined;
  });

  const handleEditorChange = useCallback((json: RemirrorJSON) => {
    // Store the JSON in localStorage
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(json));
  }, []);

  return (
    <StyledWall>
      <div style={{ padding: 16 }}>
        <RemEditor onChange={handleEditorChange} initialContent={initialContent}/>
      </div>
    </StyledWall>
  );
}

export default Wall;
