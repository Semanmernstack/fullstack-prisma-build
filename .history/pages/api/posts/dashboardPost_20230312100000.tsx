import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import {authOptions } from "../auth/[...nextauth]"
import prisma from "../../../prisma/client"





export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const title: string = req.body.title
    const session = await getServerSession(req, res, authOptions)
    
    
    
      try{
        const data = await prisma.user.findUnique({
           where: {
            email: session?.user?.email,
           },
           include: {
            Post: {
                orderBy: {
                    createdAt: "desc",
                },
                include: {
                   Comment: true,
                },
            },
           },
            
        })
        
        res.status(200).json(data)
      }catch (err) { res.status(403).json({err: "error occur"})
        
     }
    }
}