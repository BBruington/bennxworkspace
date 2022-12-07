

export default function NoteSideBar({notes, addNote, deleteNote}) {

  return (
    <>
      <div className="w-2/6 border-r-2 border-r-gray-200 border-b-2 h-90v">
        <div className="flex justify-between p-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl m-0">Notes</h1>

          <button onClick={addNote} className="text-teal-600 font-bold">Add</button>
        </div>
        <div className="app-sidebar-notes">
          {notes.map((note) => {
            <div className="p-4 cursor-pointer hover:bg-gray-200 focus:bg-teal-300">
              <div className="flex justify-between">
                <strong>{note.title}</strong>
                <button onClick={() => deleteNote(note.id)} className="text-orange-700 font-bold">Delete</button>
              </div>
              <p className="font-bold">{note.body && note.body.subStr(0, 100) + '...'}</p>

              <small className="font-light block">last modified {new Date(note.lastModified).toLocaleDateString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}</small>
            </div>
          })}
        </div>

      </div>
    </>
  )
}