import { useEffect, useState } from "react";
import { notesCollectionRef} from "../../../libs/firebase/firebase";

export default function Test() {
  async function writeUserData() {
    console.log("write")
  }

  return (
    <div>
      <button onClick={writeUserData}>me button</button>
    </div>
  )
}