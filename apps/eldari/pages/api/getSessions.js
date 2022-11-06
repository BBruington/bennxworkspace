import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient(); 


export default async function findSessions(req, res) {
  if(req.method === 'GET') {
    return await main(req, res)
  } else {
    return res.status(405).json({message: 'Method not allowed', success: false})
  }
}

  async function main(req, res) {
    
  try{ 
    const testSes = await prisma.sessionTest.findMany();
    if(testSes.length !== 0) {
      res.json(testSes);
    }else {
      res.json({ message: `sessions could not be found` });
    }
  } catch(error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error finding sessions', success: false })
  }
}



main()
.catch(e => {
  console.error(e.message)
})
.finally(async () => {
  await prisma.$disconnect()
})