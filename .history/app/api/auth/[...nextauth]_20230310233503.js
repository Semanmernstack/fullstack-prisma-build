import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../prisma/client"
import GoogleProvider from "next-auth/providers/google"
import NextAuth from "next-auth"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: 'api/auth/signin',
  } 
}

export default NextAuth(authOptions)