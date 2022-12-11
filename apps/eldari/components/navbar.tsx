import Image from "next/image";
import { useRouter } from 'next/router';
import Link from "next/link";
import {useState} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signOutUser } from "../../../libs/firebase/firebase";



const NavBar = () => {

  const router = useRouter();
  const [users, setUsers] = useState({});
  //const usersCollectionRef = collection(db, "users")
  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log(user)
    setUsers(user);
    const uid = user.uid;
 
  } else {
    // User is signed out

  }
});

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef)
  //     setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  //   }

  //   getUsers();
  // },[user]) 

  const pageLinks = [
    {name: 'Locations'},
    {name: 'Deities'},
    {name: 'Sessions'},
    {name: 'NPCS'},
    {name: 'Notes'}
  ]

  
  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="shadow bg-white ">
      <div className="h-17 my-3 pb-3 mx-auto px-5 flex items-center justify-between">
          <a className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer" onClick={handleOnClickHome}>
            <Image src='/icons/favicon_io/favicon-32x32.png' height={32} width={32} alt='github icon'/>
          </a>
          
          <ul className="flex items-center gap-5">
          {pageLinks.map((links) => ( 
            <li key={links.name}>
              <Link href={`/${links.name.toLowerCase()}`} className="hover:text-cyan-500 transition-colors cursor-pointer">
                {links.name}
              </Link>
            </li>
          ))}
          { !users ?
            <li>
            <Link href={`/login`} className="hover:text-cyan-500 transition-colors cursor-pointer">
              Login
            </Link>
          </li>
          :
          <li onClick={signOutUser} className="hover:text-cyan-500 transition-colors cursor-pointer">
              Log out
          </li>
          }
          {
            users && (
            <li className="hover:text-cyan-500 transition-colors cursor-pointer">
              {users.email}
            </li>
            )
          }
          </ul>
      </div>
    </div>
  )
}

export default NavBar;