import Link from "next/link"

export default function Navbar() {
    return (
    
        <div>
            <Link href="/"  className="text-red-600 text-3xl" >Home</Link>&nbsp;&nbsp; | &nbsp;&nbsp;
            <Link href="/about" className="text-red-600 text-3xl ">About</Link>&nbsp;&nbsp; | &nbsp;&nbsp;
            <Link href="/contact" className="text-red-600 text-3xl">Contact</Link>&nbsp;&nbsp; | &nbsp;&nbsp;
            <Link href="/feedback" className="text-red-600 text-3xl">Feedback</Link>&nbsp;&nbsp; | &nbsp;&nbsp;
            <Link href="/country" className="text-red-600 text-3xl">Country</Link>&nbsp;&nbsp; 
   </div>
    )
}