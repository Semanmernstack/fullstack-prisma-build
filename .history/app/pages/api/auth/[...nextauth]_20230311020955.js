import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../prisma/client"
import GoogleProvider from "next-auth/providers/google"
import NextAuth from "next-auth"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXT_SCRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ], 
}

export default NextAuth(authOptions)