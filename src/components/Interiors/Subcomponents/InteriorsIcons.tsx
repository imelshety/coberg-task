import { FaRegCalendar } from "react-icons/fa";
import { RiHomeSmileLine } from "react-icons/ri";
import { PiCertificateBold } from "react-icons/pi";

function InteriorsIcons() {
  return (
    <div className="w-full flex  justify-evenly items-center ps-2 md:ps-0 gap-8 md:gap-16">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-md md:text-xl relative">
          <span className="absolute top-3 left-4 md:top-8 md:left-6 text-PrimaryColor-900">
            50
          </span>
          <FaRegCalendar className="md:text-4xl w-12 h-10 md:w-[68px] md:h-[73px] text-PrimaryColor-900" />
        </div>
        <span className="text-center md:text-sm font-semibold">
          days or we
          <br /> pay you rent
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <RiHomeSmileLine className="md:text-4xl w-12 h-10 md:w-[68px] md:h-[73px] text-PrimaryColor-900" />
        <span className="text-center md:text-sm font-semibold">
          1500+happy
          <br /> customers
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <PiCertificateBold className="md:text-4xl w-12 h-10 md:w-[68px] md:h-[73px] text-PrimaryColor-900" />
        <span className="text-center md:text-sm font-semibold">
          300+ design
          <br /> experties
        </span>
      </div>
    </div>
  );
}

export default InteriorsIcons;
