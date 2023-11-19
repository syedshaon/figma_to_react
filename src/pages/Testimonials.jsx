import Footer from "./Footer";
import Subscribe from "./Subscribe";
import OtherHeader from "../contents/OtherHeader";
import Section_Intro from "../contents/Section_Intro";
import Testimonial_single from "./Testimonials/Testimonial_single";
import Alice from "../assets/testimonials/alice.webp";
import Brad from "../assets/testimonials/brad.webp";
import John from "../assets/testimonials/john.webp";
import Lilly from "../assets/testimonials/lilly.webp";
import Mark from "../assets/testimonials/Mark.webp";
import Rita from "../assets/testimonials/Rita.webp";

function Testimonials() {
  return (
    <div>
      <OtherHeader parent={"Home"} title={"Testimonial List"} />
      <div className=" container py-7 px-2 md:px-7 ">
        <Section_Intro title={"Testimonial List"} sub={"Some of our motivations"} />

        <div className="Projects mt-10 grid grid-cols-1 grid-rows-1 lg:grid-cols-3 lg:grid-rows-2  gap-5 ">
          <Testimonial_single img={Alice} review={"Our experience with Stellar Designs has been nothing short of fantastic! Alice Thompson here from Tech Innovators Ltd, and I can't express enough how impressed we are with their creativity, attention to detail, and timely delivery. They transformed our website into a sleek, user-friendly masterpiece. Kudos to the entire Stellar Designs team!"} name={" Alice Thompson"} contact={"Tech Innovators Ltd"} />
          <Testimonial_single img={Brad} review={"I highly recommend Stellar Designs for any web design project. As the CEO of Digital Solutions Inc, I've collaborated with many agencies, but Stellar stood out for their professionalism and innovative designs. They truly understand the balance between aesthetics and functionality. Our website has never looked better!"} name={"Mark Reynolds"} contact={"Digital Solutions Inc"} />
          <Testimonial_single img={Lilly} review={"Working with Stellar Designs was a game-changer for our e-commerce platform. Emily Martinez from E-Commerce Emporium here. The team not only delivered a visually stunning website but also optimized it for seamless user experience. Our online sales have skyrocketed since the redesign. Stellar Designs exceeded our expectations!"} name={"Emily Martinez"} contact={"E-Commerce Emporium"} />
          <Testimonial_single img={John} review={"Stellar Designs played a crucial role in our startup's success. Jonathan Lee, founder of Startup Success Co., here. Their innovative approach and attention to our brand identity set them apart. The collaboration was smooth, and they brought our vision to life. Trustworthy, professional, and highly recommended!"} name={" Jonathan Lee"} contact={"Startup Success Co."} />
          <Testimonial_single img={Rita} review={"Stellar Designs has an incredible knack for turning ideas into reality. Sarah Reynolds, Creative Ventures Agency, here. The team's creativity and commitment to quality are commendable. Our website now reflects our brand personality perfectly. Thank you, Stellar Designs, for your exceptional work!"} name={"Sarah Reynolds"} contact={"Creative Ventures Agency"} />
          <Testimonial_single img={Mark} review={"Our experience with Stellar Designs was outstanding. David Miller from HealthTech Solutions Ltd, here. They not only created a visually appealing website but also ensured it met our industry's specific needs. The attention to detail and commitment to deadlines make them a top choice. Stellar Designs is our go-to for web design!"} name={"David Miller"} contact={"HealthTech Solutions Ltd"} />
        </div>
      </div>

      <Subscribe />
      <Footer />
    </div>
  );
}

export default Testimonials;
