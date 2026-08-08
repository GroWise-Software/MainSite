import Navbar from "@/components/templates/nexto/sections/Navbar";
import Hero from "@/components/templates/nexto/sections/Hero";
import LogosStrip from "@/components/templates/nexto/sections/LogosStrip";
import Services from "@/components/templates/nexto/sections/Services";
import Showcase from "@/components/templates/nexto/sections/Showcase";
import Numbers from "@/components/templates/nexto/sections/Numbers";
import Process from "@/components/templates/nexto/sections/Process";
import CTA from "@/components/templates/nexto/sections/CTA";
import Footer from "@/components/templates/nexto/sections/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function NextoPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollReveal><LogosStrip /></ScrollReveal>
      <ScrollReveal><Services /></ScrollReveal>
      <ScrollReveal><Showcase /></ScrollReveal>
      <ScrollReveal><Numbers /></ScrollReveal>
      <ScrollReveal><Process /></ScrollReveal>
      <ScrollReveal><CTA /></ScrollReveal>
      <Footer />
    </>
  );
}
