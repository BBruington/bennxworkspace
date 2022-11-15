import {
  CalendarIcon,
  HomeIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

// import sessions from '../../data/sessions.json';

import {useState} from 'react';

import { loadSessions } from '../../lib/loadSessions';

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  const sess = await loadSessions();

  const findSessionNumById = sess.find((s) => {
    return (
      s.session.toString() == params.session //dynamic id
    )
  });
  return { props: { sess: findSessionNumById ? findSessionNumById : {}, }, };
}

export async function getStaticPaths() {  
  
  const sess = await loadSessions();

  const paths = sess.map( (s) => {
    return {
      params: 
      { 
        session: s.session.toString()  
       },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SessionInfo({sess}) {
  
  const [showGeneral, setShowGeneral] = useState(true);

  const enableGeneral = () => {
    setShowCombat(false);
    setShowRolePlay(false);
    setShowNPCS(false);
    setShowGeneral(true);
  }

  const [showCombat, setShowCombat] = useState(false);

  const enableCombat = () => {
    setShowRolePlay(false);
    setShowNPCS(false);
    setShowGeneral(false);
    setShowCombat(true);
  }
  
  const [showRolePlay, setShowRolePlay] = useState(false);
  
  const enableRolePlay = () => {
    setShowCombat(false);
    setShowNPCS(false);
    setShowGeneral(false);
    setShowRolePlay(true);
  }
  
  const [showNPCS, setShowNPCS] = useState(false);
  
  const enableNPCS = () => {
    setShowCombat(false);
    setShowRolePlay(false);
    setShowGeneral(false);
    setShowNPCS(true);
  }

  const navigation = [
    { name: 'General', onclick: enableGeneral, icon: HomeIcon, current: false },
    { name: 'Combat', onclick: enableCombat, icon: HomeIcon, current: false },
    { name: 'RolePlay', onclick: enableRolePlay, icon: CalendarIcon, current: false },
    { name: 'NPCS', onclick: enableNPCS, icon: UserGroupIcon, current: false },
  ]
  const {title = 'title', intro = 'intro', description = 'description', combat = 'combat', roleplay = 'roleplay', npcs = 'npcs'} = sess;

  return (
    <>
      <div className="flex h-full">      

        {/* Static sidebar for desktop */}
        <div className=" lg:flex lg:flex-shrink-0">
          <div className="flex w-64 flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100">
              <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                <div className="flex flex-shrink-0 items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <nav className="mt-5 flex-1 " aria-label="Sidebar">
                  <div className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        onClick={item.onclick}
                        className={classNames(
                          item.current
                            ? 'bg-gray-200 text-gray-900 cursor-pointer'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 ' ,
                          'group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500 cursor-pointer',
                            'mr-3 h-6 w-6'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>              
            </div>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">         
          <div className="relative z-0 flex flex-1 overflow-hidden">
            <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
              {/* Start main area*/}
              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                {showGeneral && (
                  <>
                    <h2>{title}</h2>
                    <div>{intro}</div>
                    <div className="h-full rounded-lg border-2 border-dashed border-gray-200 "> 
                      <div className='m-2'>{description}</div>
                    </div>
                  </>
                )}

                {showCombat && (
                  <>
                    <h2>{combat}</h2>
                    <div>{intro}</div>
                    <div className="h-full rounded-lg border-2 border-dashed border-gray-200"> 
                      <div>{description}</div>
                    </div>
                  </>
                )}

                {showRolePlay && (
                  <>
                    <h2>{roleplay}</h2>
                    <div>{intro}</div>
                    <div className="h-full rounded-lg border-2 border-dashed border-gray-200"> 
                      <div>{description}</div>
                    </div>
                  </>
                )}
                {showNPCS && (
                  <>
                    <h2>{npcs}</h2>
                    <div>{intro}</div>
                    <div className="h-full rounded-lg border-2 border-dashed border-gray-200"> 
                      <div>{description}</div>
                    </div>
                  </>
                )}
              </div>
              {/* End main area */}
            </main>
            <aside className="relative hidden w-96 flex-shrink-0 overflow-y-auto border-r border-gray-200 xl:order-first xl:flex xl:flex-col">
              {/* Start secondary column (hidden on smaller screens) */}
              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <div className="h-full rounded-lg border-2 border-dashed border-gray-200" />
              </div>
              {/* End secondary column */}
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}