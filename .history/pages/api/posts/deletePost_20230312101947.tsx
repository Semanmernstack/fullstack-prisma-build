import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import {authOptions } from "../auth/[...nextauth]"
import prisma from "../../../prisma/client"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    
    const session = await getServerSession(req, res, authOptions)
    
      try{
        const postId = req.body
        const boom = await prisma.post.delete({
           where: {
            id: postId,
           },
               
        })
        
        res.status(200).json(boom)
      }catch (err) { res.status(403).json({err: "error occur"})
        
     }
    }
}