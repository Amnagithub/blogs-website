import Image from "next/image"
import Link from "next/link"
export default function UI_interactive(){
    return(
        <div className="aboutDiv"><p>
            Like web design, UI (user interface) and interactive design have become increasingly valuable skills. This field focuses on bridging the gap between complex computing and the user experience through visually pleasing forms and layouts.
            <section>
            <button className="button"><Link href="/">Back to Home</Link></button>
            </section>
            
            </p>
            <section>
                <Image src="/public/ui.jpg"width={1800} height={1800} layout=""alt="ui"/>
            </section>
            </div>
    )
}