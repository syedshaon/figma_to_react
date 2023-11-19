import FeatureCard from "../../contents/FeatureCard";
import AppImg from "../../assets/home_images/app.png";
import Redesign from "../../assets/home_images/redesign.png";
import Landing from "../../assets/home_images/landing.png";
import Channel from "../../assets/home_images/channel.png";
import Land from "../../assets/home_images/land.png";
import Section_Intro from "../../contents/Section_Intro";

function FeatureProject() {
  return (
    <div className="bg-fgreen bg-gradient-to-b from-emerald-100 to-emerald-100">
      <div className="container    px-2 md:px-7  py-16 ">
        <Section_Intro title={"Featured Project"} sub={"We provide the Perfect Solution to your business growth"} />
        <div className="lg:flex  items-stretch justify-between gap-10">
          <div className="left mb-10 lg:mb-0 text-center lg:text-left">
            <FeatureCard imgURL={AppImg} cat={"App Design"} date={"June 20, 2022"} title={"Redesign channel website landng page"} />
          </div>
          <div className="right grid grid-cols-2 grid-rows-2 gap-5 text-center lg:text-left">
            <FeatureCard imgURL={Redesign} cat={"App Design"} date={"June 20, 2022"} title={"PixelCraft Studios"} />
            <FeatureCard imgURL={Landing} cat={"App Design"} date={"June 20, 2022"} title={"WebWizards Creations"} />
            <FeatureCard imgURL={Channel} cat={"App Design"} date={"June 20, 2022"} title={"DesignScape Innovations"} />
            <FeatureCard imgURL={Land} cat={"App Design"} date={"June 20, 2022"} title={"CodeCanvas Studios"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProject;
