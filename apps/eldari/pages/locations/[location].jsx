import content from '../../data/locations.json';


export async function getStaticProps(staticProps) {

    const params = staticProps.params;

    const locations = content.locations;

    const findLocationById = locations.find((s) => {
      return (
        s.location.toLowerCase().toString() == params.location //dynamic id
      )
    });
    return { props: { location: findLocationById ? findLocationById : {}, }, };
  }
  
  export async function getStaticPaths() {  
    
    const locations = content.deities;
  
    const paths = locations.map( (s) => {
      return {
        params: 
        { 
          location: s.location.toLowerCase().toString()
        },
      };
    });
  
    return {
      paths,
      fallback: false,
    };
  }

  export default function LocationInfo({location}) {
      
     const { government, } = location;
    
    return (
      <>
        <div>{location} {government}</div>
      </>
    )
  }