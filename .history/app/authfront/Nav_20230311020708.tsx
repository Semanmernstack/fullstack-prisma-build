import Link from "next/link";
import Logged from "./Logged";
import Login from "./Login";




export default async function Nav() {
    
    
    return (
        <div  className="flex items-center justify-between bg-rose-600 p-3 "   >
            
            <Link href={"/"}>
                <h2>hello</h2>
            </Link>
            <div className="flex items-center   gap-3">
                
                 <Login/>
                
                
                 <Logged   />
                
            </div>
        </div>
    )
}