import HeaderNav from "../../Header/Subcomponents/HeaderNav";

const FooterContact = () => {
  return (
    <div className="hidden lg:flex flex-col justify-content-center align-items-center gap-5 font-semibold pt-16">
        <span>Get In touch</span>
        <div className="flex flex-col justify-content-between align-items- gap-[12rem]">
            <span>landinteriors@gmail.com <br/> +91 98987 65656</span>
            <HeaderNav  />
        </div>
    </div>
  );
};

export default FooterContact;
