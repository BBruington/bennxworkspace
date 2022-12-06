import NoteSideBar from '../components/notes/noteSideBar';
import NoteMain from '../components/notes/noteMain';

export default function Notes() {

  return (
    <>
      <div className="flex justify-start">
        <NoteSideBar />
        <NoteMain />
      </div>
    </>
  )
}