"use client"
import axios from 'axios'
import Image from 'next/image'
import React from 'react'


 function Edit({ id, title, name, Comment, image }) {
  

  }
  return (
    <div className=" p-3 bg-zinc-500">
      <div className='bg-purple-900 p-4 rounded-xl'>
        <div className="flex items-center gap-4 mb-3">
        <Image
            width={32}
            height={32}
            alt="avata"
            src={image}
            className="rounded-full"
            
        />
        <h1>{name}</h1>
        </div>
        <div className="bg-slate-50 p-2 rounded-2xl mb-5">
            <h1>{title}</h1>

        </div>
        <div className="flex justify-between p-3 bg-zinc-800">
            <h1>{Comment.length} comment</h1>
            <button onClick={deletePost} className="text-red-500 cursor-pointer">Delete</button>
        </div>
      </div>  

    </div>
  )
}

export default Edit