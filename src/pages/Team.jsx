import Footer from "./Footer";
import Subscribe from "./Subscribe";
import OtherHeader from "../contents/OtherHeader";
import Member from "./Team/Member";
import Devon from "../assets/team_images/devon.png";
import Danny from "../assets/team_images/danny.png";
import Alex from "../assets/team_images/alex.png";
import Section_Intro from "../contents/Section_Intro";

function Team() {
  return (
    <div>
      <OtherHeader parent={"Home"} title={"Team"} />
      <div className="teams container py-7 px-2 md:px-7 ">
        <Section_Intro title={"Our Team Member"} sub={"Check our awesome team members"} />
        <div className="members gap-4 mt-7 flex flex-col items-center md:flex-row  md:justify-between">
          <Member name={"Devon Lane"} imgUrl={Devon} />
          <Member name={"Danny Bailey"} imgUrl={Danny} />
          <Member name={"Alex Lov"} imgUrl={Alex} />
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Team;
