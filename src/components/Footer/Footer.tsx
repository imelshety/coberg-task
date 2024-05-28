import { ReactNode } from "react";
import FooterInfo from "./Subcomponents/FooterInfo";
import FooterCategory from "./Subcomponents/FooterCategory";
import FooterContact from "./Subcomponents/FooterContact";
import FooterPhone from "./Subcomponents/FooterPhone";
type FooterProps = {
  children: ReactNode;
};
type FooterComponent = React.FC<FooterProps> & {
  Info: React.FC;
  Category: React.FC;
  Contact: React.FC;
  Phone : React.FC;
};
const Footer: FooterComponent = ({ children }) => {
  return (
    <section className="bg-secondaryColor-50 text-[#4F4F4F] ps-20 lg:flex lg:justify-content-around lg:align-content-center  lg:gap-[10rem] my-20 py-20 overflow-x-hidden">
      {children}
    </section>
  );
};

Footer.Info = FooterInfo;
Footer.Category = FooterCategory;
Footer.Contact = FooterContact;
Footer.Phone = FooterPhone;
export default Footer;
