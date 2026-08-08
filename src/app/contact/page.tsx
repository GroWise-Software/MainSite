import Navbar from "@/components/templates/nexto/sections/Navbar";
import Footer from "@/components/templates/nexto/sections/Footer";
import ContactForm from "@/components/templates/nexto/sections/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="pt-[40px] pb-[80px]">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
