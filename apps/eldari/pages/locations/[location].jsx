import content from '../../data/locations.json';


export async function getStaticProps(staticProps) {

    const params = staticProps.params;

    const locations = content.locations;

    const findLocationById = locations.find((s) => {
      return (
        s.location.toLowerCase().toString() == params.location //dynamic id
      )
    });
    return { props: { place: findLocationById ? findLocationById : {}, }, };
  }
  
  export async function getStaticPaths() {  
    
    const locations = content.locations;
  
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

  export default function LocationInfo({place}) {
      
     const { government, location } = place;
    
    return (
      <>
        <div>{government} {location}</div>
      </>
    )
  }