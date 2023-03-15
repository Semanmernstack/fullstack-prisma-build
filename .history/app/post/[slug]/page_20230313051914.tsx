"use client"

import Feed from "@/app/components/Feed"
import { PostType } from "@/app/types/Posttype"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

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

    const {data} = useQuery<PostType[]>({
        queryKey: ["datail-post"],
        queryFn: () => fetchDDetails(url.params.slug)
    })
    console.log(data)
    
    return (
        <div>
            <Feed
             id={data.id}
             name={data.user.name}
             image={data.user.image}
             title={data.title}
             Comment={data.Comment}

            />
        </div>
    )
}