import content from '../../data/deities.json';


export async function getStaticProps(staticProps) {

    const params = staticProps.params;

    const gods = content.deities;

    const findDeityNumById = gods.find((s) => {
      return (
        s.deity.toLowerCase().toString() == params.deity //dynamic id
      )
    });
    console.log(findDeityNumById, gods)
    return { props: { god: findDeityNumById ? findDeityNumById : {}, }, };
  }
  
  export async function getStaticPaths() {  
    
    const gods = content.deities;
  
    const paths = gods.map( (s) => {
      return {
        params: 
        { 
          deity: s.deity.toLowerCase().toString()
        },
      };
    });
  
    return {
      paths,
      fallback: false,
    };
  }

  export default function DeityInfo({god}) {
      
     const {deity, alignment, title} = god;
    
    return (
      <>
        <div>{deity} {title}</div>
        <h2>{alignment}</h2>
      </>
    )
  }