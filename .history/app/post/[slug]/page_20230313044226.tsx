"use client"

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

    const {data} = useQuery({
        queryKey: ["datail-post"],
        queryFn: () => fetchDDetails(url.params.slug)
    })
    
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}