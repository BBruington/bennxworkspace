import content from '../../data/NPCS.json';


export async function getStaticProps(staticProps) {

    const params = staticProps.params;

    const npcs = content.npcs;

    const findDeityNumById = npcs.find((s) => {
      return (
        s.name.toLowerCase().toString() == params.name //dynamic id
      )
    });
    return { props: { npc: findDeityNumById ? findDeityNumById : {}, }, };
  }
  
  export async function getStaticPaths() {  
    
    const npcs = content.npcs;
  
    const paths = npcs.map( (s) => {
      return {
        params: 
        { 
          name: s.name.toLowerCase().toString()
        },
      };
    });
  
    return {
      paths,
      fallback: false,
    };
  }

  export default function DeityInfo({npc}) {
      
     const {name, occupation, intro} = npc;
    
    return (
      <>
        <div>{name} {occupation}</div>
        <h2>{intro}</h2>
      </>
    )
  }