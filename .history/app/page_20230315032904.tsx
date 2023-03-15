"use client"

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import axios from "axios"
import Feed from './components/Feed'
import AddPost from './components/AddPost'
import { PostType } from './types/posTypes'

const allPosts = async () => {
  const response = await axios.get("/api/posts/getPosts")
  return response.data
}





export default function Home() {
  const {data, error, isLoading} = useQuery<PostType[]>({
    queryFn: allPosts,
    queryKey: ["posts"],

  })
  if (error) return
  if (isLoading) return "loading..."
  
  return (
    <div>
      <AddPost/>
      {data?.map((d) => (
        <Feed
          Comment={d.Comment}
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
