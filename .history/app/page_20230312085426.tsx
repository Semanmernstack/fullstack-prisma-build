"use client"

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import axios from "axios"
import Feed from './components/Feed'

const allPosts = async () => {
  const response = await axios.get("/api/posts/getPosts")
}





export default function Home() {
  const {data, error, isLoading} = useQuery({
    queryFn: allPosts,
    queryKey: ["posts"],

  })
  if (error) return
  if (isLoading) return "loading..."
  console.log(data)
  return (
    <div>
      {data?.map((d) => (
        <Feed
          
          key={d.id}
          id={d.id}
          name={d.user.name}
          title={d.title}
          avatar={d.user.image} 
          
        />
      ))}
    </div>
  )
}
