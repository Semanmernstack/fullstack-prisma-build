import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../../prisma/client"
import GoogleProvider from "next-auth/providers/google"
import NextAuth from "next-auth"

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
  })