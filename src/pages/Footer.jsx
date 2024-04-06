import fb from "../assets/icons/fb.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black py-10 min-h-[441px] flex items-center">
      <div className="container items-start px-2 md:px-7 grid  grid-cols-1  lg:grid-cols-3   ">
        <div className="info text-center lg:text-left">
          <p className="  text-[39.20px] font-bold   ">
            <span className="text-white mr-1 ">Design</span>
            <span className="text-orange-600 ">Agency</span>
          </p>
          <p className="max-w-[328px] mx-auto lg:mx-0 mt-5 text-white   font-normal ">Some footer text about the Agency. Just a little description to help people understand you better</p>
          <div className="social  flex w-full justify-center lg:justify-start gap-3 my-5">
            <a href="#">
              <img src={fb} aria-label="facebook link" alt="facebook" />
            </a>
            <a href="#">
              <img src={twitter} aria-label="twitter link" alt="twitter" />
            </a>
            <a href="#">
              <img src={linkedin} aria-label="linkedin link" alt="linkedin" />
            </a>
            <a href="#">
              <img src={instagram} aria-label="instagram link" alt="instagram" />
            </a>
          </div>
          <p className="mt-10 text-white   font-medium ">Copyright Design Agency 2022</p>
        </div>
        <div className="nav text-center lg:text-left mt-10">
          <p className="text-white mb-5 text-xl font-semibold ">Quick Links</p>
          <ul>
            <li className="text-white  py-1 px-4  font-medium ">
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "notActive")} end>
                Home
              </NavLink>
            </li>
            <li className="text-white  py-1 px-4  font-medium ">
              <NavLink to="/team" className={({ isActive }) => (isActive ? "active" : "notActive")}>
                Team
              </NavLink>
            </li>
            <li className="text-white  py-1 px-4  font-medium ">
              <NavLink to="/service" className={({ isActive }) => (isActive ? "active" : "notActive")}>
                Service
              </NavLink>
            </li>
            <li className="text-white  py-1 px-4  font-medium ">
              <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "notActive")}>
                Projects
              </NavLink>
            </li>
            <li className="text-white  py-1 px-4  font-medium ">
              <NavLink to="/testimonials" className={({ isActive }) => (isActive ? "active" : "notActive")}>
                Testimonials
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="address text-center lg:text-left mt-10">
          <p className="text-white text-xl font-semibold  mb-5">Address</p>
          <p className="text-white    ">
            Design Agency Head Office.
            <br />
            Airport Road
            <br />
            United Arab Emirate
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
