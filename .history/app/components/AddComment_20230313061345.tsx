"use client"
import React, { useState } from 'react'

function AddComment() {
    const [title, setTitle] = useState("")
  return (
    <div className='p-4 '>
        <form >
            <h1>Add comment</h1>
            <div>
                <input className="border-none text-white w-full p-2  outline-none bg-gray-600" onChange={(e) => setTitle(e.target.value)}  value={title} type="text" name="title" />
            </div>
            <button className="text-sm p-2 mt-3 bg-teal-800 rounded-3xl " type="submit">Add Comment</button>
        </form>
    </div>
  )
}

export default AddComment