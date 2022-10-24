import styles from './index.module.css';
import Link from 'next/link';
import LocationsSideBar from 'apps/eldari/components/locationssidebar';

  

/* eslint-disable-next-line */
export interface IndexProps {}
  const features = [
    {
      name: "Tel'Edare",
      description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    { name: 'Loniria', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
    { name: 'The City-States of Emiruu', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
    {
      name: 'Herkenwald',
      description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    { name: 'Delmuth', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
    { name: 'Trax', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
    { name: 'The Great Eclipse', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
    { name: 'The Glimmering Abyss', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
    ]

export function Index(props: IndexProps) {

  return (
    <>
    <br></br>
      <div className="mx-auto w-full max-w-7xl flex-grow lg:flex xl:px-8">
          {/* Left sidebar & main wrapper */}
          <div className="min-w-0 flex-1 bg-white xl:flex">
            <div className="border-b border-gray-200 bg-white xl:w-64 xl:flex-shrink-0 xl:border-b-0 xl:border-r xl:border-gray-200">
              <div className="h-full py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0">
                {/* Start left column area */}
                <div className="relative h-full" style={{ minHeight: '12rem' }}>
                  <LocationsSideBar />
                </div>
                {/* End left column area */}
              </div>
            </div>

            <div className="bg-white lg:min-w-0 lg:flex-1">
              <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
                {/* Start main area*/}
                <div className="relative h-full" style={{ minHeight: '36rem' }}>
                  <dl className="space-y-11 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative border-2 border-gray-200">
                        <dt>
                          <Link href={`/locations/${feature.name}`}>
                            <a className='cursor-pointer ml-9 text-lg text-center font-medium leading-6 text-gray-900'>{feature.name}</a>
                          </Link>
                        </dt>
                        <dd className="mt-2 ml-8 text-base text-gray-500">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>                
                </div>
                {/* End main area */}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 pr-4 sm:pr-6 lg:flex-shrink-0 lg:border-l lg:border-gray-200 lg:pr-8 xl:pr-0">
          <div className="h-full py-6 pl-6 lg:w-80">
            
          </div>          
        </div>
      
    </>
  );
}

export default Index;
