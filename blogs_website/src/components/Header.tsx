
import Link from "next/link";


export default function Header(){
    return (
        <div className="header">
            
            <ul className="header-buttons"> 
            <span> @ Blogs </span> <h1>Graphic Design</h1>  
                <li><Link href="/">Home</Link></li>
                <li><Link href="/About">About</Link></li>
                <li><Link href="/Contact_us">Contact us</Link></li>
            
            </ul>
        </div>

    );       
}