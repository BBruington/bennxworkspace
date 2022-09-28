import Image from "next/image";

const NavBar = () => {

  return (
    <div className="shadow bg-white">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
          <a className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">
          <Image src='/icons/favicon_io/favicon-32x32.png' height='32px' width='32px' alt='github icon'/>
          </a>
          
          <ul className="flex items-center gap-5">
            <li><a className="hover:text-cyan-500 transition-colors" href="">Link 1</a></li>
            <li><a className="hover:text-cyan-500 transition-colors" href="">Link 2</a></li>
            <li><a className="hover:text-cyan-500 transition-colors" href="">Link 3</a></li>
            <li><a className="hover:text-cyan-500 transition-colors" href="">Link 4</a></li>
            <li><a className="hover:text-cyan-500 transition-colors" href="">Link 5</a></li>
          </ul>
      </div>
    </div>
  )
}

export default NavBar;