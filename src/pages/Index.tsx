import Hero from "@/components/Hero";
import About from "@/components/About";
import Festival from "@/components/Festival";
import Sports from "@/components/Sports";
import Spiritual from "@/components/Spiritual";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Festival />
      <Sports />
      <Spiritual />
      <Footer />
    </div>
  );
};

export default Index;
