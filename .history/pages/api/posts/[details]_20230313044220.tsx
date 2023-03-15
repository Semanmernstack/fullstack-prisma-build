import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from "../../../prisma/client"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
     
      try{
        console.log(req.query)
        const data = await prisma.post.findUnique({
            where: {
               id: req.query.details,
                
            },
            
        })
        console.log(data)
        res.status(200).json(data)
      }catch (err) { res.status(403).json({err: "error occur"})
        
      }
  }
}
