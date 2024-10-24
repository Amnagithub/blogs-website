import Image from "next/image"
import Link from "next/link"
export default function Packaging(){
    return(
        <div className="aboutDiv"><p>
            Product packaging is everywhere, from the food we eat to the devices we buy. A career in packaging design lets you employ the creativity and branding strategies of ad design, along with the technical aspects of manufacturing, 3D mockups, and printing.
            <section>
            <button className="button"><Link href="/">Back to Home</Link></button>
            </section>
            </p>
            <section>
                <Image src="/public/package.jpg"width={1800} height={1800} layout=""alt="package"/>
               
            </section>
            </div>
    )
}