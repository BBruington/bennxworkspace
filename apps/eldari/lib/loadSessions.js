export async function loadSessions() {
      const res = await fetch(`${process.env.API_URL}/api/getSessions`, { method: 'GET',});
      if(res === undefined) return null;
      const data = await res.json()
      
      return data
}