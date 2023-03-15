"use client"
import React, { useState } from 'react'

function AddComment() {
    const [title, setTitle] = useState("")
  return (
    <div>
        <form >
            <h1>Add comment</h1>
            <div>
                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="title" />
            </div>
            <button className="text-sm bg-teal-800 rounded-3xl " type="submit">Add Comment</button>
        </form>
    </div>
  )
}

export default AddComment