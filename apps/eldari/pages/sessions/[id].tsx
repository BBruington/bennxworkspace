

export const sessionsNum = [
  { id: 1, },
  { id: 2, },
]
export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  const findSessionNumById = sessionsNum.find((session) => {
    return (
      session.id.toString() === params.id //dynamic id
    )
  });

  return {
    props: {
      sessionsNum: findSessionNumById ? findSessionNumById : {},
    },
  };
}

export async function getStaticPaths() {
//    const coffeeStores = await fetchCoffeeStores();

  // i can prerender all of the coffeestores by mapping
  // them out and finding the id
  const paths = sessionsNum.map( (session) => {
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

export default function sessionNum() {

  

  return (
    <div>

    </div>
  )
}