import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import Posting from "./Posting"


export default async function Dashboard() {
    const session = await getServerSession(authOptions)
    
    return(
        
        <div className="p-4">
            <h1 className="text-xl font-serif">Your dashboard:  {session?.user?.name}</h1>
            <div>
            <Posting

            />
            </div>
            

        </div>
    )
}