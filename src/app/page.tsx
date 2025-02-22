import Contact from "@/components/home-page-components/Contact";
import Hero from "@/components/home-page-components/Hero";
import Portfolio from "@/components/home-page-components/Portfolio";
import Services from "@/components/home-page-components/Services";
import Skills from "@/components/home-page-components/Skills";
import Testimonial from "@/components/home-page-components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
    </>
  );
}
