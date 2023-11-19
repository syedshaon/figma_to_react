import Footer from "./Footer";
import Subscribe from "./Subscribe";
import OtherHeader from "../contents/OtherHeader";
import Section_Intro from "../contents/Section_Intro";
import Service_single from "./Services/Service_single";

import Service1a from "../assets/services/1a.webp";
import Service1b from "../assets/services/1b.webp";
import Service1c from "../assets/services/1c.webp";
import Service1d from "../assets/services/1d.webp";

import Service2a from "../assets/services/2a.webp";
import Service2b from "../assets/services/2b.webp";
import Service2c from "../assets/services/2c.webp";
import Service2d from "../assets/services/2d.webp";

import Service3a from "../assets/services/3a.webp";
import Service3b from "../assets/services/3b.webp";
import Service3c from "../assets/services/3c.webp";
import Service3d from "../assets/services/3d.webp";

import Service4a from "../assets/services/4a.webp";
import Service4b from "../assets/services/4b.webp";
import Service4c from "../assets/services/4c.webp";
import Service4d from "../assets/services/4d.webp";

function Service() {
  return (
    <div>
      <OtherHeader parent={"Home"} title={"Our Services"} />
      <div className=" container py-7 px-2 md:px-7 ">
        <Section_Intro title={"Our All Services"} sub={"We Provide BestWeb design services"} />
        <div className="services mt-10 grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2  gap-5 ">
          <Service_single title={"Build & Launch without problems"} desc={"Increase your team’s productivity and save time with a bot that answers and fields customer inquiries"} img1={Service1a} img2={Service1b} img3={Service1c} img4={Service1d} />
          <Service_single title={"Responsive Web Design"} desc={"Our responsive web design ensures an optimal user experience, whether on desktops, tablets, or smartphones."} img1={Service2a} img2={Service2b} img3={Service2c} img4={Service2d} />
          <Service_single title={"Custom Website Development"} desc={"Our experienced developers craft custom websites using the latest technologies and best practices, providing a solid foundation for your online presence."} img1={Service3a} img2={Service3b} img3={Service3c} img4={Service3d} />
          <Service_single title={"E-Commerce Solutions"} desc={"We design and develop secure and user-friendly online stores, integrating payment gateways, inventory management, and personalized shopping experiences to enhance your customers' journey."} img1={Service4a} img2={Service4b} img3={Service4c} img4={Service4d} />
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Service;
