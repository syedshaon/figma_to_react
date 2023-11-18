import Navbar from "./Navbar";
import Hero from "./Home/Hero";
import Partners from "./Home/Partners";
import Work from "./Home/Work";
import StatArea from "./Home/StatArea";
import FeatureProject from "./Home/FeatureProject";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <header className="bg-fgreen bg-gradient-to-b from-emerald-100 to-emerald-100 pb-5 md:pb-10">
        <Navbar />
        <Hero />
        <Partners />
      </header>
      <Work />
      <StatArea />
      <FeatureProject />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Home;
