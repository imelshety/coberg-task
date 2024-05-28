import SocialIcons from "../../SocialIcons/SocialIcons";

const FooterInfo = () => {
  return (
    <div className="hidden lg:flex flex-col justify-content-start align-items-center gap-8 ps-[1rem]">
      <a href="#">
        <img src="/assets/logo.svg" alt="Logo-brand" />
      </a>
      <span className="text-sm leading-8 ">
        We introduce our selves as LAND Interior and
        <br /> Architectural Design Consultancy - one of the
        <br /> best interior designers in Chennai.
        <br /> Chennai Luxury Interior and Architectural Design Consultancy has
        challenged
        <br /> the conventional way of interior designing and
        <br /> given new dimensions to the art of interior designing.
      </span>
      <SocialIcons/>
    </div>
  );
};

export default FooterInfo;
