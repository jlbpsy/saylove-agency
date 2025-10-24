import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Approach from "@/components/Approach";
import Engagements from "@/components/Engagements";
import Formules from "@/components/Formules";
import Testimonials from "@/components/Testimonials";
import DrWord from "@/components/DrWord";
import Contact from "@/components/Contact";
import Privacy from "@/components/Privacy";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Approach />
      <Engagements />
      <Formules />
      <Testimonials />
      <DrWord />
      <Contact />
      <Privacy />
      <Footer />
    </div>
  );
};

export default Index;
