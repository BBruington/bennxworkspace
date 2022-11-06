import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient(); //try to only have only 1 PrismaClient

export default async function main() {
  try{ 
    const testSes = await prisma.sessionTest.create({ data:
      { 
        description: "Session 1 begins in a prison wagon. The party wakes up inside the cage within the back of the wagon with each other and their new warden; a apathetic kobold named Scrapper as company. He explains their situation of becoming prisoners tasked with taking on jobs from their new lord: Silver Eye Lumin Eos. And to gauge the party's worth, Scrapper has them freed to take on an assault from strange ant-like creatures equiped with acid and mandibles. By the end of the fight, the party narrowly wins but at the cost of one of them: Grifith going unconscious and becoming possesed by a fiendish black blade. Scrapper manages to subdue the possesed player and entombs him in a cocoon of divine ice using a magical item; a small shard of ice that must be injested.", 
        intro: "The party has been captured by the Kingdom of Loniria and must prove their worth to survive", 
        title: "Something's Bugging Me",       
        combat: "combat details",
        npcs: "npcs are here: Silver Fang Scrapper",
        roleplay: "roleplay details"      
      }})
     console.log(testSes)
  } catch(error) {
    console.error('Request error', error)
  }
}



// main(req, res)
// .catch(e => {
//   console.error(e.message)
// })
// .finally(async () => {
//   await prisma.$disconnect()
// })