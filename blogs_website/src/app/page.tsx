import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <div >
<div className="parentContainer">
<p className="pagedes"><span>Graphic Design</span> is a diverse, creative field that uses visuals to communicate ideas and solve problems. Since it tackles a wide variety of challenges, graphic design can be loosely divided into eight different, but often overlapping fields.You will be exposed to each of these fields as you build the skills to become a successful and impactful designer.</p>
      <div className="childContainer scale-up-hor-lef">
        <div className="imageContainer"><Image src="/public/web.jpg"width={350} height={250} layout="" alt="Graphic Design" /></div>
        <h1 className="title">Web Design</h1>
        <p className="description"> 
        In our modern world, web design ...
        </p>
        <button className="readMore"><Link href="/Web_des">Read More</Link></button>
      </div>

      <div className="childContainer bounce-in-left">
        <div className="imageContainer"><Image src="/public/ui.jpg"width={500} height={500} layout="responsive"alt="UI interactive"/></div>
        <h1 className="title">UI and Interactive Design</h1>
        <p className="description">
        Like web design, UI (user interface)...
          </p>
          <button className="readMore"><Link href="/UI_interactive">Read More</Link></button>
          </div>

          <div className="childContainer bounce-in-right">
            <div className="imageContainer"><Image src="/public/motion.jpg"width={100} height={100} layout="responsive"alt="motion"/></div>
            <h1 className="title">Motion Graphics and Animation</h1>
            <p className="description"> 
            By studying motion graphics,...
              </p>
              <button className="readMore"><Link href="/Motion_graphic">Read More</Link></button>
              </div>

              <div className="childContainer bounce-in-left">
                <div className="imageContainer"><Image src="/public/package.jpg"width={100} height={300} layout="responsive"alt="packaging"/></div>
                <h1 className="title">Packaging Design</h1>
                <p className="description">
                Product packaging is everywhere,...
                  </p>
                  <button className="readMore"><Link href="/Packaging">Read More</Link></button>
                  </div>

                  <div className="childContainer bounce-in-right">
                    <div className="imageContainer"><Image src="/public/game.jpg"width={100} height={300} layout="responsive"alt="game"/></div>
                    <h1 className="title">Game Design</h1>
                    <p className="description">
                    Like UI and motion graphics,...
                      </p>
                      <button className="readMore"><Link href="/Game">Read More</Link></button>
                      </div>

                      <div className="childContainer bounce-in-left">
                        <div className="imageContainer"><Image src="/public/publica.jpg"width={100} height={300} layout="responsive"alt="game"/></div>
                        <h1 className="title">Publication and Typographic</h1>
                        <p className="description">
                        In this field, designers focus on....
                          </p>
                          <button className="readMore"><Link href="/Publication">Read More</Link></button>
                          </div>
              </div>
</div>
    
  );
}