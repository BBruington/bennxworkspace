import Link from 'next/link';
import { loadSessions } from '../../lib/loadSessions';

/* eslint-disable-next-line */
//export interface IndexProps {}

export async function getServerSideProps() {
  const sessions = await loadSessions();
  return { props: {sessions} };
}



const Index = ({sessions}) => {


  return (
    <div>
      <h1 className='py-5  text-lg text-gray-900 font-medium flex justify-center'>Here you can check out past sessions</h1>
      <div>
        {sessions.map((s) => (
          <Link 
          href={`/sessions/${s.session}`} 
          key={s.session}
          className='cursor-pointer hover:bg-gray-150'
          >
            <div className="pt-1 mx-0 flex justify-center border-2 border-gray-200 cursor-pointer hover:bg-gray-100">
              <a>
                <d1 className='cursor-pointer justify-center'>
                  <dt className='text-lg flex justify-center hover:text-cyan-500 transition-colors font-medium text-gray-900'>Session {s.session}</dt>
                  <dt className='justify-center pt-3 text-base text-gray-500'>{s.title}</dt>
                </d1>
              </a>
            </div>
          </Link>
        ))} 
      </div>
    </div>
  );
}

export default Index;
