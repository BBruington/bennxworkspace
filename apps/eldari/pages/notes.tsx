import NoteSideBar from '../components/notes/noteSideBar';
import NoteMain from '../components/notes/noteMain';
import uuid from 'react-uuid';
import { useState } from 'react';

export default function Notes() {
  const [notes, setNotes] = useState([])

  const deleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  }

  const addNote = () => {

    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes(newNote, ...notes)
  }

  return (
    <>
      <div className="flex justify-start">
          <NoteSideBar notes={notes} addNote={addNote} deleteNote={deleteNote}/>
        <NoteMain />
      </div>
    </>
  )
}