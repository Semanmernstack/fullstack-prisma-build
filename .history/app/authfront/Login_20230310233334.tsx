"use client"
import React from 'react'
import {signIn} from "next-auth/react"


function Login() {
  pages: {
    signIn: 'api/auth/signin'
  }
  return (
    <div>
      <button onClick={() => signIn()}>Click to Login</button>
      

    </div>
  )
}

export default Login