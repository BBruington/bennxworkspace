import Image from "next/image";
import { useRouter } from 'next/router'

const NavBar = () => {

  const router = useRouter();

  const handleOnClickLocations = (e) => {
    e.preventDefault();
    router.push('/locations');
  };
  const handleOnClickDeities = (e) => {
    e.preventDefault();
    router.push('/deities');
  };
  const handleOnClickFactions = (e) => {
    e.preventDefault();
    router.push('/factions');
  };
  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="shadow bg-white">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
          <a className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer" onClick={handleOnClickHome}>
          <Image src='/icons/favicon_io/favicon-32x32.png' height='32px' width='32px' alt='github icon'/>
          </a>
          
          <ul className="flex items-center gap-5">
            <li><a className="hover:text-cyan-500 transition-colors cursor-pointer" onClick={handleOnClickLocations}>Locations</a></li>
            <li><a className="hover:text-cyan-500 transition-colors cursor-pointer" onClick={handleOnClickDeities}>Deities</a></li>
            <li><a className="hover:text-cyan-500 transition-colors cursor-pointer" onClick={handleOnClickFactions}>Factions</a></li>
            <li><a className="hover:text-cyan-500 transition-colors cursor-pointer" href="">Link 4</a></li>
            <li><a className="hover:text-cyan-500 transition-colors cursor-pointer" href="">Link 5</a></li>
          </ul>
      </div>
    </div>
  )
}

export default NavBar;