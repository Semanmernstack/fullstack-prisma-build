"use client"


import AddComment from "@/app/components/AddComment"
import Feed from "@/app/components/Feed"

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
        queryKey: ["datail-post"],
        queryFn: () => fetchDDetails(url.params.slug)
    })
    console.log(data)
    
    
    return (
        <div className="p-4">
            <Feed
             id={data?.id}
             name={data.user?.name}
             image={data.user.image}
             title={data.title}
             Comment={data?.Comment}

            />
            <AddComment id={data?.id}/>

            {data?.Comment?.map((comment: any) => {
                <div key={comment.id}>
                    <div className="flex items-center bg-slate-700 gap-2">
                        <Image
                            width={24}
                            height={24}
                            src={comment.user?.image}
                            alt="avatar"
                        />
                        <h3>{comment?.user?.name}</h3>
                        <h3>{comment?.createdAt}</h3>
                    </div>
                    <div className="p-3">{comment.message}</div>
                </div>
            })}
            <h3>hi</h3>
        </div>
    )
}