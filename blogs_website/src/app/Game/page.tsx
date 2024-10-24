import Image from "next/image"
import Link from "next/link"
export default function Game () {
    return (
        <div className="aboutDiv"><p>
            Like UI and motion graphics, game design works at the forefront of technology and creativity. Studying game design gives you the opportunity to work one-on-one with experts as you navigate complex tech and exciting creative endeavors.
            <section>
            <button className="button"><Link href="/">Back to Home</Link></button>
            </section>
            </p>
            <section>
                <Image src="/public/game.jpg"width={1800} height={1800} layout=""alt="game"/>
                
            
            </section>
            
            </div>
    )}
