import {npcs} from '../../data/NPCS.json'
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
            className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {npcs.map((person) => (
              <li key={person.id}>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8 xs:flex-col">
                  {
                    person.imageUrl ?
                  <div className="aspect-w-3 aspect-h-2 h-0 sm:aspect-w-3 sm:aspect-h-4">
                    <img className="rounded-lg object-cover shadow-lg w-30 h-25" src={person.imageUrl} alt="" />
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
