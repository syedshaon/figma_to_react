import Google from "../../assets/home_images/google.png";
import Trello from "../../assets/home_images/Trello.png";
import monday from "../../assets/home_images/monday.png";
import notion from "../../assets/home_images/Notion.png";
import slack from "../../assets/home_images/Slack.png";

function Partners() {
  return (
    <div className="bg-white h-16 md:h-24 flex items-center    selection:">
      <div className="flex h-4  md:h-7    justify-between items-center container  px-2 md:px-7 ">
        <img className="h-full " src={Google} alt="Google" />
        <img className="h-full" src={Trello} alt="Trello" />
        <img className="h-full" src={monday} alt="monday" />
        <img className="h-full" src={notion} alt="notion" />
        <img className="h-full" src={slack} alt="slack" />
      </div>
    </div>
  );
}

export default Partners;
