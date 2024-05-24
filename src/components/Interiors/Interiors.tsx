import { ReactNode } from "react";
import InteriorsTitle from "./Subcomponents/InteriorsTitle";
import InteriorsIcons from "./Subcomponents/InteriorsIcons";

type InteriorsProps = {
  children: ReactNode;
};
type InteriorsComponent = React.FC<InteriorsProps> & {
  Title: React.FC;
  Icons: React.FC;
};
const Interiors: InteriorsComponent = ({ children }) => {
  return (
    <section className="flex flex-col justify-center items-center gap-12 my-20">
      {children}
    </section>
  );
};

Interiors.Title = InteriorsTitle;
Interiors.Icons = InteriorsIcons;
export default Interiors;
