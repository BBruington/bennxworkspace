import { prisma } from "../../lib/PrismaDb"

const getSessions = async (req, res) => {  
  try{ 
    if(req.method === 'GET') {
      const testSes = await prisma.sessionTest.findMany();
      if(testSes.length !== 0) {
        res.json(testSes);
      }else {
        res.json({ message: `sessions could not be found` });
      }} else {
      return res.status(405).json({message: "Method not allowed", success: false})
    }
  } catch(error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error finding sessions', success: false })
  }
}

export default getSessions;