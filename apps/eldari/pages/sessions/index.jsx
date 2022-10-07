import styles from './index.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import sessions from '../../data/sessions.json'

/* eslint-disable-next-line */
//export interface IndexProps {}



export function Index(/*props: IndexProps*/) {

  const router = useRouter();

  return (
    <div className={styles['container']}>
      <h1>Welcome to Index!</h1>
      {sessions.items.map((session) => (
        <div key={session.id} className="relative border-2 border-gray-200">
          <dt>
            <Link href={`/sessions/${session.id}`}>
              <a className='cursor-pointer ml-9 text-lg text-center font-medium leading-6 text-gray-900'>{session.id}</a>
            </Link>
          </dt>
          <dd className="mt-2 ml-8 text-base text-gray-500">{session.description}</dd>
        </div>
      ))} 
    </div>
  );
}

export default Index;
