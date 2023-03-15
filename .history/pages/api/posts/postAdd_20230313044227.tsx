import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import {authOptions } from "../auth/[...nextauth]"
import prisma from "../../../prisma/client"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const title: string = req.body.title
    const session = await getServerSession(req, res, authOptions)
    
    const prismaUser = await prisma.user.findUnique({
        where: {email: session?.user?.email },
    })
     
      try{
        const result = await prisma.post.create({
            data: {
                title,
                userId: prismaUser.id,
                
            },
            
        })
        console.log(result)
        res.status(200).json(result)
      }catch (err) { res.status(403).json({err: "error occur"})
        
      }
  }
}
