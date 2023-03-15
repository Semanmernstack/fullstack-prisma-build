"use client"
import { signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"


export default function Logged() {
  
  return (
    <li className="flex gap-4">
        <button onClick={() => signOut()}>signOut</button>
        <Link href={"/dashboard"}>
            
            
        </Link>
        
    </li>
  )
}
