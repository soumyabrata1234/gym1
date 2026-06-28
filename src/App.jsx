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
        1
        <Hero />
        <br />
        2
        <About />
        <br />
        3
        <Programs />
        <br />
        4
        <Membership />
        <br />
        5
        <Trainers />
        <br />
        6
        <Gallery />
        <br />
        7
        <Testimonials />
        <br />
        8
        <FAQ />
        <br />
        9
        <Contact />
        <br />
      </main>
      <br />
      <Footer />
      <br />

      <FloatingButtons />

    </div>
  );
}
