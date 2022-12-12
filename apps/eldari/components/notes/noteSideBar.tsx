

export default function NoteSideBar(props) {

  const handleNoteOnClick = (note) => {
    setActiveNote(note.id)
  }

  const handleEditMode = () => {
    setEditMode(!editMode)
  }

  const {notes, addNote, deleteNote, activeNote, setActiveNote, setEditMode, editMode} = props

  return (
    <>
      <div className="w-2/6 overflow-auto border-r-2 border-r-gray-200 border-b-2 h-90v">
        <div className="flex justify-between p-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl m-0">Notes</h1>
          <div>
            <button onClick={handleEditMode} className="text-green-700 hover:text-green-500 font-bold mr-5">Edit Note</button>
            <button onClick={addNote} className="text-teal-600 hover:text-teal-400 font-bold">Add Note</button>
          </div>
        </div>
        <div className="app-sidebar-notes">
          {notes.map((note) => (
            <div key={note.id} className="p-4 cursor-pointer hover:bg-gray-200" onClick={() => handleNoteOnClick(note)}>
              <div className="flex justify-between">
                <div>
                  <strong>{note.title}</strong> 
                  <p className="">{note.body && note.body.substr(0, 50) + '...'}</p>

                  <small className="font-light block">last modified: {new Date(note.lastModified).toLocaleDateString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}</small>
                </div>
                  <div className="mt-2">
                    <button onClick={() => deleteNote(note.id)} className="text-orange-700 hover:text-orange-500 font-bold">Delete</button>
                  </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}