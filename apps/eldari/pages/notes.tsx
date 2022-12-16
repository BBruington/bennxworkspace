import NoteSideBar from '../components/notes/noteSideBar';
import NoteMain from '../components/notes/noteMain';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { getCurrentUser } from "../../../libs/firebase/firebase";
import useSWR from 'swr';


const fetcher = (url: string) => fetch(url).then(res => res.json())
export default function Notes() {
  const [emailNotes, setEmailNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const [addNoteToggle, setAddNoteToggle] = useState(false);
  const [editMode,setEditMode] = useState(false);
  const { data, error, isLoading } = useSWR('/api/getUserNotesData', fetcher);

  useEffect(() => {
    const getNotes = async () => {  
      if(data) {
        const currentUser = await getCurrentUser();   
        const notesForEmailData = data.filter((note) => note.email.toLowerCase() === currentUser.email.toLowerCase())
        setEmailNotes(notesForEmailData)
      }
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
    addedNote[0].notes.unshift(newNote)

    setEmailNotes(addedNote)
    setAddNoteToggle(!addNoteToggle)
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
    if(emailNotes[0]){
      const activeNoteListener = emailNotes[0].notes.find((note) => note.id === activeNote);
      return activeNoteListener
    }
  }
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
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