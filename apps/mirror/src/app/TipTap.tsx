// src/Tiptap.tsx
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

// define your extension array
const extensions = [StarterKit]

const content = `<p>Click here and type! \n \n \n</p>`;

const TipTap = () => {
  const editor = useEditor({
    extensions,
    content,
  })

  return (
    <>
      <EditorContent className='mx-12 border-stone-900 border-2 ' editor={editor} />
      <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
    </>
  )
}

export default TipTap
