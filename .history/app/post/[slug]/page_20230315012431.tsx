
"use client"


import AddComment from "@/app/components/AddComment"
import Feed from "@/app/components/Feed"
import { PostType } from "@/app/types/posTypes"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Image from "next/image"


type URL = {
    params: {
        slug: string
    }
}

const fetchDDetails = async (slug: string) => {
    const response = await axios.get(`/api/posts/${slug}`)
    return response.data
}


export default function PageDetails (url: URL) {

    const {data} = useQuery({
        queryKey: ["detail-post"],
        queryFn: () => fetchDDetails(url.params.slug)
    })
    console.log(data)
    
    
    return (
        <div className="p-4">
            <Feed
             id={data?.id}
             name={data?.user?.name}
             image={data?.user?.image}
             title={data?.title}
             Comment={data?.Comment}

            />
            <AddComment id={data?.id}/>

            {data?.Comment?.map((comment: any) => (  
                <div className="bg-zinc-700 text-white" key={comment.id}>
                    <div className="flex h-16 p-6 text-sm items-center justify-between  gap-2">
                        <div className="flex gap-2">
                        <Image
                            className="rounded-full"
                            width={24}
                            height={24}
                            src={comment.user?.image}
                            alt="avatar"
                        />
                        
                        <h3>{comment?.user?.name}</h3>
                        </div>
                        <div>
                            <h3>{comment?.createdAt}</h3>
                        </div>

                        
                    </div>
                    <div className="p-3 mb-7 bg-zinc-900 rounded-full ">{comment.message}</div>
                </div>
            ))}
            
        </div>
    )
}