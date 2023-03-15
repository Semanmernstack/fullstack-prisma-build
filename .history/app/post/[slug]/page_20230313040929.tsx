"use client"

import axios from "axios"

export default function PageDetails () {
    const fetchDDetails = async (slug: string) => {
        const response = await axios.get(`/api/posts/${slug}`)
        return response.data
    }
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}