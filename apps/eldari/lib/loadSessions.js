export async function loadSessions() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:4200/api/getSessions', { method: 'GET'});
  const data = await res.json()

  return data
}