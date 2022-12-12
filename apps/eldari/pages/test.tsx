import { useEffect, useState } from "react";
import { notesCollectionRef } from "../../../libs/firebase/firebase";
import { getDocs } from "firebase/firestore";

export default function Test() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(notesCollectionRef)
      setNotes(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      console.log("data", data)
      console.log("notes", notes)
    }

    getNotes();
  },[]) 

  return (
    <div>
      {notes[0] ? (
        <div>hi {notes[0].notes[0].title} {notes[0].notes[0].body}</div>)
        :
        (<div>not working</div>
      )}
    </div>
  )
}