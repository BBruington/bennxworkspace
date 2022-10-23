import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient(); //try to only have only 1 PrismaClient

export default async function main() {
  // await prisma.user.deleteMany()  clears db
  await prisma.user.create({
    data: {
      name: "Kyle",
      email: "kyle@test.com",
      age: 27,
      userPreference: {
        create: { //can create within the user model userPreference model
          emailUpdates: true,
        },
      },
    },
    include: {
      userPreference: true,
    },
  })
}


main()
.catch(e => {
  console.error(e.message)
})
.finally(async () => {
  await prisma.$disconnect()
})