import Link from "next/link"
// import { IoLogoGithub } from "react-icons/io";
// import { IoLogoLinkedin } from "react-icons/io5";

export default function Contact_us(){
    return (
        <div>
        <section className="contact ">
        <form>
            <h2>Contact Form</h2>
            <div className="input-box">
                <label >Full Name</label>
                <input type="text" className="field" placeholder="Enter Your Name" required />
            </div>
            <div className="input-box">
                <label >Email Adress</label>
                <input type="email" className="field" placeholder="Enter Your Email" required />
            </div>
            <div className="input-box">
                <label >Your Message</label>
                <textarea name="" id="" className="field-mess"placeholder="Enter Your Message" required />
            </div>
            <button type="submit">Send Message</button>
            </form>
            <section className="flex justify-center mt-19">
       <button className="button"><Link href="/">Back to Home</Link></button>
       </section>
      
       </section>
       </div>
    )
}