import Link from "next/link";

export default function Nav({children}){
  return(
    <nav className="flex justify-between items-center py-10">
      <Link href={'/'}>logo</Link>
      <ul>
        <Link href={'/auth/login'}>
          <a className="py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8">Join Now</a>
        </Link>
      </ul>
    </nav>
  )
}