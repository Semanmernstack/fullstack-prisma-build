import React, { useState } from 'react'

function AddPost() {
    const [title, setTitle] = useState('')

    const handleSubmit =(e: React.FormEvent) => {
        e.preventDefault()
        
        setTitle("")
    }
    
  return (
    <form onSubmit={handleSubmit} >
        <div className="border w-80 p-6 ">
        <textarea 
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Whats on your mind"
            value={title}
            className="border-none outline-none"
        >
                
        </textarea>
        </div>
        <div className="p-2 hover:bg-red-300 cursor-pointer text-center mt-4 bg-red-800 w-24 rounded-full">
            <button type="submit" >Post</button>
        </div>
        
    </form>
  )
}

export default AddPost