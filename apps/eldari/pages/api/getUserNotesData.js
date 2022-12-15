import { notesCollectionRef, getCurrentUser } from "../../../../libs/firebase/firebase";
import { getDocs } from "firebase/firestore";
const getUserNotesData = async (req, res) => {  
  try{ 
    if(req.method === 'GET') {
      const currentUser = await getCurrentUser();   
      const data = await getDocs(notesCollectionRef)   
      const totalNotesData = data.docs.map((doc) => ({...doc.data(), id: doc.id})) 
      const notesForEmailData = totalNotesData.filter((note) => note.email.toLowerCase() === currentUser.email.toLowerCase())
      if(notesForEmailData.length !== 0) {
        res.json(notesForEmailData);
      }else {
        res.json({ message: `sessions could not be found` });
      }} else {
      return res.status(405).json({message: "Method not allowed", success: false})
    }
  } catch(error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error finding sessions', success: false })
  }
}

export default getUserNotesData;