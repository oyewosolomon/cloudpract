
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Courses from "./components/Courses";

export default function Home() {
  return (
   <>
   <Nav/>
    <Hero/>
    <Features/>
    <Courses/>
    <Testimonials/>
    <Footer/>
   </>
  );
}
