import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, updateProfile } from 'firebase/auth';
import { auth } from '../../../../../libs/firebase/firebase';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Login(){

  const [user, loading] = useAuthState(auth);

  const router = useRouter();

  //Sign in with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      router.push("/dashboard");
    } catch (e) {
      console.error(e)
    }
  }

  //Sign in with Facebook
  // const fbProvider = new FacebookAuthProvider();
  // const FacebookProvider = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, fbProvider);
  //   } catch (e) { console.error(e) }
  // }


  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }else { console.log('login')}
  },[user])

  return (
    <div className='shadow-xl mt-32 p-10 text-gray-700 rounded-lg'>
      <h2 className='text-3xl font-medium'>Join Today</h2>
      <div className='py-4'>
        <h3 className='py-4'>Sign in with one of the providers</h3>
      </div>
      <div className='flex flex-col gap-4'>
        <button onClick={GoogleLogin} className='text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2'>
          <FcGoogle className='text-2xl' />Sign in with Google
        </button>
        {/* <button className='text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2'>
          <AiFillFacebook className='text-2xl text-blue-400' /> Sign in with Facebook
        </button> */}
      </div>
    </div>
  )
}