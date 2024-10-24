import Link from "next/link"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Footer(){
    return (
        <div>
            <footer className="w-100% font-medium p-2.5 justify-center possition-below mb-0">
                <div className="flex justify-center space-x-4 transition-transform duration-300 ease-in-out transform hover text-underline-possition:below text-orange-100">
                    <FaGithub size={20} />
                    <Link href="https://github.com/Amnagithub" target="blank">GitHub</Link>
                    <FaLinkedin size={20} />
                    <Link href="https://www.linkedin.com/in/amna-kh-0507532b4/"target="blank">Linkedin</Link>
                    
                </div>
                <p className="text-center text-orange-100 font-medium mb-4 mt-1">2024 Amna Saif. All Rights Reserved. </p>
         </footer>
        </div>
    )}