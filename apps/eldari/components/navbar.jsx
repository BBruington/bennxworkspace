import Image from "next/image";
import { useRouter } from 'next/router';
import Link from "next/link";
import {useState, useEffect} from "react";
import { signOutUser, getCurrentUser, } from "../../../libs/firebase/firebase";



const NavBar = () => {

  const router = useRouter();
  const [users, setUsers] = useState({});  
  useEffect(()=>{
    const handleGetUser = async () => {
      const currentUser = await getCurrentUser();
      if(currentUser !== null) {
        setUsers(currentUser)
      } else {setUsers({})}
    }
    handleGetUser()
  },[router])

const handleUserInfo = () => {
  console.log(users)
}

  const pageLinks = [
    {name: 'Locations'},
    {name: 'Deities'},
    {name: 'Sessions'},
    {name: 'NPCS'},
    {name: 'Notes'}
  ]

  const handleLogOut = async () => {
    await signOutUser();
    setUsers({})
  }
  
  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="shadow bg-white ">
      <button className="ml-4  hover:text-teal-400" onClick={handleUserInfo}>user info</button>
      <div className="h-17 my-3 pb-3 mx-auto px-5 flex items-center justify-between">
          <a className="text-2xl  transition-colors cursor-pointer" onClick={handleOnClickHome}>
            <Image src='/icons/favicon_io/favicon-32x32.png' height={32} width={32} alt='github icon'/>
          </a>
          
          <ul className="flex items-center gap-5">
          {pageLinks.map((links) => ( 
            <li key={links.name}>
              <Link href={`/${links.name.toLowerCase()}`} className="ml-2 hover:text-teal-400 transition-colors cursor-pointer">
                {links.name}
              </Link>
            </li>
          ))}
          { users.email? (
            <li onClick={handleLogOut} className="ml-2 hover:text-teal-400 transition-colors cursor-pointer">
                Log out
            </li>
          )
          :
          (<li>
            <Link href={`/login`} className="ml-2 hover:text-teal-400 transition-colors cursor-pointer">
              Login
            </Link>
          </li>)
          }
          {
            users.email && (
            <li className="ml-2 hover:text-teal-400 transition-colors cursor-pointer">
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