import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PostType } from '../types/posTypes'



function Feed({ id, title, name, avatar, Comment }: PostType) {
    
  return (
    <div className="mt-2 flex flex-col bg-zinc-700 p-4 mx-4 rounded-2xl h-32 text-white">
        <div className="flex items-center gap-3">
            <Image
                className='rounded-full'
                width={32}
                height={32}
                src={avatar}
                alt="profile"
            />
            <h2 className="font-semibold font-serif text-white mt-3">{name}</h2>
        </div>
        <div>
           
            <p className="text-sm">{title}</p>
            
        </div>
        <div className="mb-2 text-xm flex flex-col gap-2">
            <Link href={`/post/${id}`}>
                <p className='sm'>comment</p>
                <p className='sm'>{Comment?.length}</p>
            </Link>    

        </div>
        
    </div>
  )
}

export default Feed