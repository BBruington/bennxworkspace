import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function main() {
  const todo = await prisma.TodoItem.create({ data: {text: 'do dishes', done: false }})
  console.log(todo);
}