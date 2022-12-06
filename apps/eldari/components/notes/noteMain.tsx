

export default function NoteMain() {

  return (
    <>
      <div className="w-4/6 h-90v border-b-2 app-main">
        <div className="app-main-note-edit h-50v m-4">
          
          <input className="flex block mb-4 p-2 w-full h-8" type="text" placeholder="title" id="title" autoFocus />

          <textarea className="flex block mb-4 p-2 w-full h-40v" id="body" placeholder="write your note here"/>

        </div>

        <div className="app-main-note-preview">

          <h1 className="preview-title p-4 m-0">TITLE</h1>

          <div className="markdown-preview p-4">note preview</div>

        </div>
      </div>
    </>
  )
}