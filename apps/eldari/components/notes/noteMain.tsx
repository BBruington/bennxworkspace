import ReactMarkdown from "react-markdown"

export default function NoteMain(props) {

  const {activeNote, updateNote, editMode} = props

  const editField = (key, value) => {
    updateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    })
  }

  return (
    <>
      <div className="w-4/6 h-90v border-b-2">
        { 
        editMode && activeNote && (
        <>
        <div className="h-40v m-4">
          
          <input className="flex block mb-4 p-2 w-full h-8" type="text" placeholder="Title" id="title" value={activeNote.title} onChange={(e)=>editField("title", e.target.value)} autoFocus />

          <textarea className="flex block mb-4 p-2 w-full h-30v" id="body" value={activeNote.body} onChange={(e)=>editField("body", e.target.value)} placeholder="Write your note here"/>

        </div>

        <div className="overflow-auto m-4 bg-gray-100 h-40v">

          <h1 className="p-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl m-0">{activeNote.title}</h1>

          <ReactMarkdown className=" p-4">{activeNote.body}</ReactMarkdown>

        </div> 
        </>
        )}
        {
          !activeNote && (
        <>
        <div className="h-40v m-4">
          
          <input className="flex block mb-4 p-2 w-full h-8" type="text" placeholder="Title" id="title" autoFocus />

          <textarea className="flex block mb-4 p-2 w-full h-30v" id="body" placeholder="Write your note here"/>

        </div>
        <div className="m-4 bg-gray-100 h-40v">

          <h1 className="p-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl m-0">Title Example</h1>

          <ReactMarkdown className="p-4">Example Text</ReactMarkdown>

        </div> 
        </>
        )}
        {
        !editMode && activeNote && (
        
        <div className="m-4 bg-gray-100 h-80v">

          <h1 className="p-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl m-0">{activeNote.title}</h1>

          <ReactMarkdown className="p-4">{activeNote.body}</ReactMarkdown>

        </div> 
      )
        }
      </div>
    </>
  )
}