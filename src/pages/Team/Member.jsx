import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Member({ name, imgUrl, fb = "https://www.facebook.com/", tw = "https://twitter.com/", ins = "https://www.instagram.com/" }) {
  return (
    <div className=" max-w-[392px] max-h-[490px]  bg-white rounded-[20px] shadow-md border border-neutral-200">
      <div className="img-container relative">
        <img src={imgUrl} alt={name} />

        <div className="absolute bottom-4  left-[28%] text-gray-500 font-normal text-base w-[145px] h-[50px] flex justify-around items-center bg-white rounded-[25px] shadow-md">
          <a target="_blank" className="cursor-pointer" href={fb}>
            <FaFacebookF />
          </a>
          <a href={tw} className="cursor-pointer border-gray-200 border border-t-0 border-b-0 px-3  border-l-2 border-r-2">
            <FaTwitter />
          </a>
          <a className="cursor-pointer" href={ins}>
            <FaInstagram />
          </a>
        </div>
      </div>
      <p className="my-6 text-center text-gray-900 text-3xl font-semibold font-['Poppins'] leading-relaxed">{name}</p>
    </div>
  );
}

export default Member;
