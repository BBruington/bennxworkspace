import Link from "next/link";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../../../libs/firebase/firebase";

export default function Nav({children}){

  const [user, loading] = useAuthState(auth);

  return(
    <nav className="flex justify-between items-center py-10">
      <Link href={'/'}>logo</Link>
      <ul>
        {!user && (          
          <Link href={'/auth/login'}>
            <a className="py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8">Join Now</a>
          </Link>
        )}
        {user && (
          <div>
            <Link href={'/dashboard'}>
              <img src={user.photoURL} alt="user image" />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  )
}