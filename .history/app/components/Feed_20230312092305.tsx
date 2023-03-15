import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



function Feed({ id, title, name, avatar, Comment }) {
    
  return (
    <div className="mt-2 bg-zinc-700 p-4 mx-4 rounded-2xl h-32 text-white">
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
           
            <p className="text-lg">{title}</p>
            
        </div>
        <div className='mb-2 flex flex-col gap-2'>
            <Link href={`/post/${id}`}>
                <p>comment</p>
                <p>{Comment?.length}</p>
            </Link>    

        </div>
        
    </div>
  )
}

export default Feed