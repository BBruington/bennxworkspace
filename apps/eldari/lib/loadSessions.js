export async function loadSessions() {
  
    const res = await fetch(`${VERCEL_URL}/api/getSessions`, { method: 'GET',});
    const data = await res.json()
    return data
 
}