import WorkCard from "../../contents/WorkCard";
import Activity from "../../assets/icons/Activity.svg";
import Heart from "../../assets/icons/Heart.svg";
import WorkImg from "../../assets/icons/Work.svg";
import Section_Intro from "../../contents/Section_Intro";

function Work() {
  return (
    <div className="container    px-2 md:px-7  py-16">
      <Section_Intro title={"Work List"} sub={"We provide the Perfect Solution to your business growth"} />

      <div className="flex flex-col md:flex-row  items-center  justify-between gap-3 lg:gap-10">
        <WorkCard img={Activity} title={"Grow Your Business"} desc={"We help identify the best ways to improve your business"} url={"#"} />
        <WorkCard img={Heart} title={"Improve brand loyalty"} desc={"We help identify the best ways to improve your business"} url={"#"} />
        <WorkCard img={WorkImg} title={"Improve Business Model"} desc={"We help identify the best ways to improve your business"} url={"#"} />
      </div>
    </div>
  );
}

export default Work;
