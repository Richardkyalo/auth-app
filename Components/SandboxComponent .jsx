"use client";
import NavBar from "../Components/Navbar";
import Services from "./Services"
import Blog from "./Blog";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
export default function Register() {
  return (
    <div>
      <NavBar />
      <section id="services" style={{ backgroundImage: `url("/images/homepage.jpg")`, backgroundSize: 'cover' }}>
        <Services />
      </section>
      <section id="technology" className="h-screen text-center flex">
        <h1 className="m-auto font-waterfall text-7xl text-black font-bold">Technologies</h1>
      </section>
      <section id="portfolio" className="text-center flex">
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
      <Footer />
    </div>
  )
}
