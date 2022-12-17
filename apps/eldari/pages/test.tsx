import { useEffect, useState } from "react";
import { notesCollectionRef} from "../../../libs/firebase/firebase";
import { getDocs,  } from "firebase/firestore";
import {ref, set, getDatabase} from "firebase/database"
export default function Test() {
  async function writeUserData() {
    const db = getDatabase()
    // const data = await getDocs(notesCollectionRef)   
    // const totalNotesData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    set(ref(db, 'user notes' + "someid"), {
      email: "bibruington@gmail.com",
      notes: [
      {
        body:"this is the note",
        id:"cool new id",
        lastModified:Date.now(),
        title:"this is a title"
      }
    ]
    });
    console.log("CLICK")
  }

  return (
    <div>
      <button onClick={writeUserData}>me button</button>
    </div>
  )
}