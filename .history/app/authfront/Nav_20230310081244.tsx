import Link from "next/link";
import Logged from "./Logged";
import Login from "./Login";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

export default async function () {
    const session = await getServerSession(authOptions)
    return (
        <div  className="flex items-center justify-between bg-rose-600 p-3 "   >
            
            <Link href={"/"}>
                <h2>hello</h2>
            </Link>
            <div className="flex items-center   gap-3">
                
                {!session?.user && <Login/>}
                
                
                {session?.user && <Logged image={session?.user?.image || " "}   />}
                
            </div>
        </div>
    )
}