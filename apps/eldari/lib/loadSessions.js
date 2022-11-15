export async function loadSessions() {
  const res = await fetch('/api/getSessions', { method: 'GET'});
  const data = await res.json()

  return data
}