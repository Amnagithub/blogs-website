import Image from "next/image"
import Link from "next/link"
export default function Publication(){
    return(
        <div className="aboutDiv"><p className="mt-11">
            In this field, designers focus on the development, organization, and management of visual media that is often mass-produced. This includes books, magazines and more. By developing skills in printing, editorial layout design coordination and typesetting communication, publication and typographic designers create cohesive visual media.
            <section>
            <button className="button"><Link href="/">Back to Home</Link></button>
            </section>

            </p>
            <section>
                <Image src="/public/publica.jpg"width={1800} height={1800} layout=""alt="publica"/>          
               
            </section>
            
            
            
            </div>
    )
}