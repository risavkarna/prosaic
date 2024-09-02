import { useCurrentEditor } from "@tiptap/react"

export const EditorJSONPreview = () => {
    const { editor } = useCurrentEditor()
  
    return <pre>{JSON.stringify(editor?.getJSON(), null, 2)}</pre>
}