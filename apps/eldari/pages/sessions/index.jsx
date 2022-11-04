import styles from './index.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import sessions from '../../data/sessions.json'

/* eslint-disable-next-line */
//export interface IndexProps {}



export function Index(/*props: IndexProps*/) {

  const router = useRouter();

  return (
    <div className=''>
      <h1 className='py-8 text-lg text-gray-900 font-medium flex flex-wrap justify-center'>Here you can check out past sessions</h1>
      <div className={styles['container']}>
        {sessions.session.map((session) => (
          <div key={session.id} className="relative border-2 border-gray-200 ">
            <dt className=''>
              <h2 className='mt-2 ml-8 text-base text-gray-500'>{session.title}</h2>
              <Link href={`/sessions/${session.id}`}>
                <a className='cursor-pointer hover:text-cyan-500 ml-9 text-lg text-center font-medium leading-6 text-gray-900'>Session {session.id}</a>
              </Link>
            </dt>
          </div>
        ))} 
      </div>
    </div>
  );
}

export default Index;
