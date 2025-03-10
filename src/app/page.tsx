import Hero from "@/app/HomeSections/Hero";
import Navbar from "@/app/HomeSections/Navbar";
import Product from "@/app/HomeSections/Product";
import Testimonials from "@/app/HomeSections/Testimonials";
import Contact from "@/app/HomeSections/Contact";
import Footer from "./HomeSections/Footer";
import NamiAbout from "./HomeSections/About";
export default function Home() {
  return (
    <div className="text-bold text-4xl">
      <Navbar />
      <Hero />
      <NamiAbout/>
      <Product />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
