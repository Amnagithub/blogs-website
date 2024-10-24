import Image from "next/image"
import Link from "next/link"

export default function Web_des () {
    return (
        <div className="aboutDiv">
            <p>
            In our modern world, web design is quickly becoming one of the most valuable skills for creative professionals. This field of graphic design blends technology and the traditional principles of composition and form to create digital media.
            <section>
            <button className="button"><Link href="/">Back to Home</Link></button>
            </section>    
            </p>
            <section>
                <Image src="/public/web.jpg"width={1500} height={1500} layout=""alt="web"/>
              
                </section>
                
            </div>
            
    )}

