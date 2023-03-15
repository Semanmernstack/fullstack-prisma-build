import Link from "next/link";

export default function () {
    return (
        <div  className="flex items-center justify-between bg-rose-600 p-3 "   >
            
            <Link href={"/"}>
                <h2>hello</h2>
            </Link>
        </div>
    )
}