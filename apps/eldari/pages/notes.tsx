import NoteSideBar from '../components/notes/noteSideBar';
import NoteMain from '../components/notes/noteMain';
import uuid from 'react-uuid';
import { useState } from 'react';

export default function Notes() {
  const [notes, setNotes] = useState([])

  const addNote = () => {

    const newNote = {
      id: uuid,
      title:
      body:
      lastModified:
    }
  }

  return (
    <>
      <div className="flex justify-start">
        <NoteSideBar notes={notes} addNote={addNote}/>
        <NoteMain />
      </div>
    </>
  )
}