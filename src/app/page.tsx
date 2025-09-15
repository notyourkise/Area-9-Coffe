import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { MenuPreview } from "../components/MenuPreview";
import { Testimonials } from "../components/Testimonials";
import { CtaBanner } from "../components/CtaBanner";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <MenuPreview />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
