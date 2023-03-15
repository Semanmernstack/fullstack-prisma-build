"use client"
import { signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
type User = {
    image: string
}

export default function Logged({image}: User) {
  
  return (
    <li className="flex gap-4">
        <button onClick={() => signOut()}>signOut</button>
        <Link href={"/dashboard"}>
            <Image
                className="w-14 rounded-full"
                width={64}
                height={64}
                src={image}
                alt="hhhh"
                priority

            />
        </Link>
        
    </li>
  )
}
