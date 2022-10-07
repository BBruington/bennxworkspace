import sessions from '../../data/sessions.json'

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  const findSessionNumById = sessions.items.find((session) => {
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
  const paths = sessions.items.map( (session) => {
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

export default function sessionNum({sessions}) {

  

  return (
    <div>
      welcome to session {sessions.id}!
    </div>
  )
}