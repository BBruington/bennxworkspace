import NoteSideBar from '../components/notes/noteSideBar';
import NoteMain from '../components/notes/noteMain';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { notesCollectionRef } from "../../../libs/firebase/firebase";
import { getDocs } from "firebase/firestore";

export default function Notes() {
  const [notes, setNotes] = useState([])
  const [activeNote, setActiveNote] = useState(false)
  const [editMode,setEditMode] = useState(false)

  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(notesCollectionRef)
      const noteData = data.docs.map((doc) => ({...doc.data(), id: doc.id})) 
      setNotes(noteData[0].notes) 
      console.log("data", data)
      console.log("notes", notes)  
    }

    getNotes();
  },[]) 

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

    setNotes([newNote, ...notes])
  }

  const updateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === activeNote) {
        return updatedNote;
      }
      return note;
    })

    setNotes(updatedNotesArray)
  }

  const getActiveNote = () => {

    return notes.find((note) => note.id === activeNote)
  }

  return (
    <>
      <div className="flex justify-start">
          <NoteSideBar 
          notes={notes} 
          addNote={addNote} 
          deleteNote={deleteNote} 
          activeNote={activeNote}
          setActiveNote={setActiveNote}
          editMode={editMode}
          setEditMode={setEditMode}
          />
          <NoteMain 
          activeNote={getActiveNote()}
          updateNote={updateNote}
          editMode={editMode}
          
          />
      </div>
    </>
  )
}