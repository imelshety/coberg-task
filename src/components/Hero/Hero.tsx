import { ReactNode } from "react";
import HeroImage from "./Subcomponents/HeroImage";

import HeroCaption from "./Subcomponents/HeroCaption";
type HeroProps = {
  children: ReactNode;
};
type HeroComponent = React.FC<HeroProps> & {
  Img: React.FC;
  Caption: React.FC;
};
const Hero: HeroComponent = ({ children }) => {
  return (
    <div className="mt-16 lg:mt-[15rem] py-16 lg:py-10 w-full lg:flex justify-between relative overflow-x-hidden">
      {children}
    </div>
  );
};

Hero.Img = HeroImage;
Hero.Caption = HeroCaption;

export default Hero;
