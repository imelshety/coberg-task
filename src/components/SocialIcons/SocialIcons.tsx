
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaYoutubeSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className=" flex gap-3">
      <a href="#" className="bg-[#E5E5E561] rounded py-2 lg:p-2">
        <FaFacebookSquare className="text-xl lg:text-3xl" />
      </a>
      <a href="#" className="bg-[#E5E5E561] rounded py-2 lg:p-2">
        <FaLinkedin className="text-xl lg:text-3xl" />
      </a>
      <a href="#" className="bg-[#E5E5E561] rounded py-2 lg:p-2">
        <FaTwitterSquare className="text-xl lg:text-3xl" />
      </a>
      <a href="#" className="bg-[#E5E5E561] rounded py-2 lg:p-2">
        <FaYoutubeSquare className="text-xl lg:text-3xl" />
      </a>
      <a href="#" className="bg-[#E5E5E561] rounded py-2 lg:p-2">
        <FaInstagramSquare className="text-xl lg:text-3xl" />
      </a>
    </div>
  );
};

export default SocialIcons;
