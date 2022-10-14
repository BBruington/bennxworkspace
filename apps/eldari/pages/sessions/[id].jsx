import { Fragment, useState } from 'react'
import {
  CalendarIcon,
  HomeIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import sessions from '../../data/sessions.json'

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  const findSessionNumById = sessions.session.find((session) => {
    return (
      session.id.toString() === params.id //dynamic id
    )
  });

  return {
    props: {
      sessions: findSessionNumById ? findSessionNumById : {},
    
    },
  };
}

export async function getStaticPaths() {

  // i can prerender all of the sessions by mapping
  // them out and finding the id
  const paths = sessions.session.map( (session) => {
    return {
      params: {
        id: session.id.toString(),
      },
    };
  });

  return {
    // this is what manually prerendering pages looks like
    /*: [
      { params: { id: '0' } }, 
      { params: { id: '1' } }, 
    ],*/
    paths,
    fallback: true,
  };
}


const navigation = [
  { name: 'Combat', href: '#', icon: HomeIcon, current: true },
  { name: 'RolePlay', href: '#', icon: CalendarIcon, current: false },
  { name: 'NPCS', href: '#', icon: UserGroupIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function SessionInfo({sessions}) {

  const {tittle, intro} = sessions;

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
                <nav className="mt-5 flex-1" aria-label="Sidebar">
                  <div className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-200 text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
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
                <h2>{intro}</h2>
                <div className="h-full rounded-lg border-2 border-dashed border-gray-200"> 
                  <div>here is text {tittle}</div>
                </div>
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