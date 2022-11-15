import Image from 'next/image';
import content from '../../data/NPCS.json';
/* eslint-disable-next-line */
export interface IndexProps {}


export default function Index(props: IndexProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Current NPCS</h2>

          <ul
            role="list"
            className="flex flex-col gap-y-8 space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {content.npcs.map((person) => (
              <li key={person.id}>
                <div className="space-y-4 grid grid-cols-3 gap-6 space-y-0 lg:gap-8 xs:flex-col">
                  {
                    person.imageUrl ?
                  <div className="aspect-w-3 aspect-h-2">
                    <Image className="rounded-lg object-cover shadow-lg" layout="responsive" width={75} height={75} src={person.imageUrl} alt="" />
                  </div>
                  :
                   <></> 
                  }
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.occupation}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{person.intro}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
