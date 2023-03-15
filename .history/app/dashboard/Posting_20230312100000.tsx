"use client"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

import Edit from './Edit'

const fetchPosting = async () => {
  const response = await axios.get("/api/posts/dashboardPost")

  return response.data
}

export default function Posting() {
  

  const { data, isLoading } = useQuery({
    queryFn: fetchPosting,
    queryKey: ["auth-post"],
  })
  if (isLoading) return <h1>Wait...</h1>
  console.log(data)



  return (
    
    <div>
      
      {data?.Post?.map((b) => (
        <Edit
        key={b.id}
        id={b.id}
        title={b.title}
        name={data.name}
        Comment={b.Comment}
        image={data.image}
        />
       
      ))}
      
    </div>
  )
}

