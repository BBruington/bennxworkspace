import NoteSideBar from '../components/notes/noteSideBar';
import NoteMain from '../components/notes/noteMain';
import { useState } from 'react';

export default function Notes() {
  const [notes, setNotes] = useState([])

  return (
    <>
      <div className="flex justify-start">
        <NoteSideBar notes={notes}/>
        <NoteMain />
      </div>
    </>
  )
}