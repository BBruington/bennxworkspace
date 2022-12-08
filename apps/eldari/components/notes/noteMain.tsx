

export default function NoteMain(props) {

  const {activeNote} = props

  return (
    <>
      <div className="w-4/6 h-90v border-b-2 app-main">
        <div className="app-main-note-edit h-40v m-4">
          
          <input className="flex block mb-4 p-2 w-full h-8" type="text" placeholder="title" id="title" autoFocus />

          <textarea className="flex block mb-4 p-2 w-full h-30v" id="body" placeholder="write your note here"/>

        </div>

        <div className="app-main-note-preview m-4 bg-gray-100 h-40v">

          <h1 className="preview-title p-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl m-0">TITLE</h1>

          <div className="markdown-preview p-4 font-bold">Note preview</div>

        </div>
      </div>
    </>
  )
}