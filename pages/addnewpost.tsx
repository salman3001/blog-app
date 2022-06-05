import React, { ComponentClass } from "react"
import ReactDOM from "react-dom"
import "draft-js/dist/Draft.css"
import { EditorState } from "draft-js"
import dynamic from "next/dynamic"
const Editor = dynamic<{}>(
  () => import("draft-js").then((mod) => mod.Editor),
  { ssr: false }
)

function MyEditor() {
  const [editorState, setEditorState] = React.useState<EditorState>(() =>
    EditorState.createEmpty()
  )

  console.log(EditorState)

  return (
    <Editor
      placeholder="write something"
      editorState={editorState}
      onChange={setEditorState}
    />
  )
}

export default MyEditor
