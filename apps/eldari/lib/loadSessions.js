export async function loadSessions() {
  const res = await fetch('http://eldari/api/getSessions', { method: 'GET',headers: {'Content-Type': 'application/json',}});
  const data = await res.json()

  return data
}