import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient(); 

export async function loadSessions() {
      const res = await fetch(`/api/getSessions`, { method: 'GET',});
      if(res === undefined) return null;
      const data = await res.json()
      
      return data
}