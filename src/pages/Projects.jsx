import Footer from "./Footer";
import Subscribe from "./Subscribe";
import OtherHeader from "../contents/OtherHeader";
import Section_Intro from "../contents/Section_Intro";

import Project_single from "./Projects/Project_single";
import p1 from "../assets/project_images/p1.png";
import p2 from "../assets/project_images/p2.png";
import p3 from "../assets/project_images/p3.png";
import p4 from "../assets/project_images/p4.png";
import p5 from "../assets/project_images/p5.png";
import p6 from "../assets/project_images/p6.png";

function Projects() {
  return (
    <div>
      <OtherHeader parent={"Home"} title={"All Projects"} />
      <div className=" container py-7 px-2 md:px-7 ">
        <Section_Intro title={"All Project"} sub={"Better Agency/SEO Solution At Your Fingertips"} />
        <div className="Projects mt-10 grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-3  gap-5 ">
          <Project_single title={"PixelCraft Studios"} img={p1} />
          <Project_single title={"WebWizards Creations"} img={p2} />
          <Project_single title={"DesignScape Innovations"} img={p3} />
          <Project_single title={"CodeCanvas Studios"} img={p4} />
          <Project_single title={"CraftedWeb Solutions"} img={p5} />
          <Project_single title={"DynamicEdge Designs"} img={p6} />
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Projects;
