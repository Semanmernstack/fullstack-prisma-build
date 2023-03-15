"use client"
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
type Dataid = {
    id: string
}
type Comment = {
    postId?: string
    title: string
}

function AddComment({id}: Dataid) {
    const [title, setTitle] = useState("")
    const { mutate } = useMutation(
        async (data: Comment) => axios.post("/api/posts/addComment", {data}),
        {
            onSuccess(data) {
              setTitle("")  
            },
            onError(error) {
                
            },
        }
    )

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        mutate({title, postId:id})


    }

  return (
    <div className='p-4 '>
        <form onSubmit={handleSubmit}>
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