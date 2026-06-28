import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Membership from "./components/Membership";
import Trainers from "./components/Trainers";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Programs />
        <Membership />
        <Trainers />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
      
    </div>
  );
}
