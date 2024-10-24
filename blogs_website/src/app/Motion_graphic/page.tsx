import Image from "next/image"
import Link from "next/link"
export default function Motion_graphic(){
    return(
        <div className="aboutDiv"><p className="mt-12">
            By studying motion graphics, you will focus on animating visual media. This includes everything from typography to imagery, and everything in between. As a relatively new field in graphic design, motion graphics and animation present exciting opportunities to balance technical and creative skills.
            <section>
            <button className="button"><Link href="/">Back to Home</Link></button>
            </section>
            </p>
            <section>
                <Image src="/public/motion.jpg"width={1800} height={1800} layout=""alt="motion"/>
               
            </section>
            </div>
    )
}