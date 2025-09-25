import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { MenuPreview } from "../components/MenuPreview";
import { DividerHeroMenu } from "../components/DividerHeroMenu";
import { About } from "../components/About";
import { Features } from "../components/Features";
import { Testimonials } from "../components/Testimonials";
import { RainySection } from "../components/RainySection";
import { ThankYou } from "../components/ThankYou";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DividerHeroMenu />
        <MenuPreview />
        <About />
        <Features />
  <Testimonials />
  <RainySection />
  <ThankYou />
      </main>
      <Footer />
    </>
  );
}
