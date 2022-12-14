import NoteSideBar from '../components/notes/noteSideBar';
import NoteMain from '../components/notes/noteMain';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { notesCollectionRef, getCurrentUser } from "../../../libs/firebase/firebase";
import { getDocs } from "firebase/firestore";

export default function Notes() {
  const [emailNotes, setEmailNotes] = useState([])
  const [activeNote, setActiveNote] = useState(false)
  const [editMode,setEditMode] = useState(false)


  useEffect(() => {
    const getNotes = async () => {
      const currentUser = await getCurrentUser();   
      const data = await getDocs(notesCollectionRef)   
      const totalNotesData = data.docs.map((doc) => ({...doc.data(), id: doc.id})) 
      const notesForEmailData = totalNotesData.filter((note) => note.email.toLowerCase() === currentUser.email.toLowerCase())
      setEmailNotes(notesForEmailData)
      console.log("currentuser", currentUser)
      console.log("data", data)  
      console.log("noteData", totalNotesData)
      console.log("notesForEmail", notesForEmailData)  
      console.log("emailNotes", emailNotes)   
    }

    getNotes();
  },[]) 

  // const deleteNote = (idToDelete) => {
  //   setEmailNotes(emailNotes[0]?.filter((note) => note.id !== idToDelete));
  // }

  const addNote = () => {

    const newNote = {
      title: "Untitled Note",
      body: "",
      id: uuid(),
      lastModified: {
        seconds: Date.now()/1000,
        milliseconds: Date.now()
    }
    };
    const addedNote = emailNotes;
    addedNote[0].notes.push(newNote)

    setEmailNotes(addedNote)
    console.log("emailNotes", JSON.stringify(emailNotes))
  }

  const updateNote = (updatedNote) => {
    const updatedNotesArray = emailNotes.map((note) => {
      if(note.id === activeNote) {
        return updatedNote;
      }
      return note;
    })

    setEmailNotes(updatedNotesArray)
  }

  const getActiveNote = () => {
    const activeNoteListener = emailNotes[0].notes.find((note) => note.id === activeNote);
    return activeNoteListener
  }

  return (
    <>
      <div className="flex justify-start">
          <NoteSideBar 
          emailNotes={emailNotes} 
          addNote={addNote} 
          //deleteNote={deleteNote} 
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