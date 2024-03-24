"use client";
import NavBar from "../Components/Navbar";
import Blog from "./Blog";
import Portfolio from "./Portfolio";
export default function Register() {
  return (
    <div>
    <NavBar />
      <section id="services" className="h-screen text-center flex">
      <h1 className="m-auto font-waterfall text-7xl text-black font-bold">Services</h1>
      </section>
      <section id="technology" className="h-screen text-center flex">
        <h1 className="m-auto font-waterfall text-7xl text-black font-bold">Technologies</h1>
      </section>
      <section id="portfolio" className="h-screen  text-center flex">
        <Portfolio />
      </section>
      <section id="testimonials" className="h-screen text-center flex">
        <h1 className="m-auto font-waterfall text-7xl text-black font-bold">Testimonials</h1>
      </section>
      <section id="blog">
      <Blog />
      </section>
      <section id="about" className="h-screen text-center flex">
        <h1 className="m-auto font-waterfall text-7xl text-black font-bold">About</h1>
      </section>
      <section id="contact" className="h-screen text-center flex">
        <h1 className="m-auto font-waterfall text-7xl text-black font-bold">Contact</h1>
      </section>
      
    </div>
  )
}
