import styles from './index.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
//import sessions from '../../data/sessions.json'
import { loadSessions } from '../../lib/loadSessions';

/* eslint-disable-next-line */
//export interface IndexProps {}

export async function getServerSideProps() {
  const sessions = await loadSessions();
  return { props: {sessions} };
}



const Index = ({sessions}) => {
  //const [sessions, setSessions] = useState({})

  // useEffect(() => {
  //   const handleLoadSessions = async () => {
  //     const obj = await loadSessions();
  //     setSessions(obj);
  //   }
  //   handleLoadSessions();
  // },[])

  const router = useRouter();

  return (
    <div className=''>
      <h1 className='py-8 text-lg text-gray-900 font-medium flex flex-wrap justify-center'>Here you can check out past sessions</h1>
      <div className={styles['container']}>
        {sessions.map((s) => (
          <div key={s.session} className="relative border-2 border-gray-200 ">
            <dt className=''>
              <h2 className='mt-2 ml-8 text-base text-gray-500'>{s.title}</h2>
              <Link href={`/sessions/${s.session}`}>
                <a className='cursor-pointer hover:text-cyan-500 ml-9 text-lg text-center font-medium leading-6 text-gray-900'>Session {s.session}</a>
              </Link>
            </dt>
          </div>
        ))} 
      </div>
    </div>
  );
}

export default Index;
