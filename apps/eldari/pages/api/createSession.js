import { prisma } from "../../lib/PrismaDb"
export default async function handler(req, res) {
  if(req.method === 'POST') {
    return await main(req, res)
  } else {
    return res.ststus(405).json({message: 'Method not allowed', success: false})
  }
}

  async function main(req, res) {
    
    const body = req.body
  try{ 
    const testSes = await prisma.sessionTest.create({ data:
      { 
        session: body.session,
        description: body.description, 
        intro: body.intro, 
        title: body.title,       
        combat: body.combat,
        npcs: body.npcs,
        roleplay: body.roleplay      
      }
    })
    console.log(testSes)
     res.status(200).json({ success: true })
  } catch(error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error creating session', success: false })
  }
}



main()
.catch(e => {
  console.error('error', e.message)
})
.finally(async () => {
  await prisma.$disconnect()
})