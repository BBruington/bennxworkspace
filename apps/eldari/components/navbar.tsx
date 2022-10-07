import Image from "next/image";
import { useRouter } from 'next/router'
import Link from "next/link";

const NavBar = () => {

  const pageLinks = [
    {name: 'Locations'},
    {name: 'Deities'},
    {name: 'Factions'},
    {name: 'Sessions'},
    {name: 'NPCS'},
  ]

  const router = useRouter();
  
  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="shadow bg-white ">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
          <a className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer" onClick={handleOnClickHome}>
          <Image src='/icons/favicon_io/favicon-32x32.png' height='32px' width='32px' alt='github icon'/>
          </a>
          
          <ul className="flex items-center gap-5">
          {pageLinks.map((links) => ( 
            <li key={links.name}>
              <Link href={`/${links.name.toLowerCase()}`}>
                <a className="hover:text-cyan-500 transition-colors cursor-pointer">{links.name}</a>
              </Link>
            </li>
          ))}            
          </ul>
      </div>
    </div>
  )
}

export default NavBar;