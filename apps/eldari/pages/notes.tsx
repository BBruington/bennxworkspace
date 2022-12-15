import NoteSideBar from '../components/notes/noteSideBar';
import NoteMain from '../components/notes/noteMain';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { notesCollectionRef, getCurrentUser } from "../../../libs/firebase/firebase";
import { getDocs } from "firebase/firestore";
import useSWR from 'swr'


export default function Notes() {
  const [emailNotes, setEmailNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const [editMode,setEditMode] = useState(false);
  const fetcher = (url: string) => fetch(url).then(res => res.json())
  //const currentUser = await getCurrentUser();   
  // .then( async () => {
  //   const notesForEmailData = data.filter((note) => note.email.toLowerCase() === currentUser.email.toLowerCase());
  //   setEmailNotes(notesForEmailData);
  //   console.log("emailNotes", emailNotes)  
  //   })
  const { data, error, isLoading } = useSWR('/api/getUserNotesData', fetcher);
  //setEmailNotes(data)

  useEffect(() => {
    const getNotes = async () => {  
      // const data = await getDocs(notesCollectionRef)     
      // const totalNotesData = data.docs.map((doc) => ({...doc.data(), id: doc.id})) 
      // const currentUser = await getCurrentUser();   
      // const notesForEmailData = totalNotesData.filter((note) => note.email.toLowerCase() === currentUser.email.toLowerCase())
      // setEmailNotes(notesForEmailData)
      console.log("data", data)  
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
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <>
    
      <div className="flex justify-start">
          {/* <NoteSideBar 
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
          /> */}
      </div>
    </>
  )
}