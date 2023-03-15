import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



function Feed({ id, title, name, avatar, Comment }) {
    
  return (
    <div className="mt-8 bg-zinc-700 p-4 mx-4 text-white">
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
        
    </div>
  )
}

export default Feed