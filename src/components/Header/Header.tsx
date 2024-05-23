
import { ReactNode, useState } from "react";
import HeaderLogo from "./Subcomponents/HeaderLogo";
import HeaderTitle from "./Subcomponents/HeaderTitle";
import HeaderNav from "./Subcomponents/HeaderNav";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";

type HeaderProps = {
  children: ReactNode;
};
type HeaderComponent = React.FC<HeaderProps> & {
  Logo: React.FC;
  Title: React.FC;
  Nav: React.FC;
};
const Header: HeaderComponent = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <header
        className={`hidden lg:block fixed left-0 right-0 top-0 z-50 ps-8 bg-secondaryColor-50 mb-8 ${
          active ? "hidden" : ""
        }`}
      >
        {children}
      </header>
      <header
        className={`fixed lg:hidden bg-secondaryColor-50  top-0 left-0 right-0 flex justify-between p-3 z-50`}
      >
        <HeaderLogo />
        {active ? (
          <button
            className="text-black-950 text-4xl"
            onClick={() => setActive(false)}
          >
            <AiFillCloseCircle />
          </button>
        ) : (
          <button
            className="text-black-950 text-4xl"
            onClick={() => setActive(true)}
          >
            <HiBars3 />
          </button>
        )}
      </header>
      <div
        className={`lg:hidden w-screen h-screen py-10 fixed z-[998] left-0 right-0 backdrop-blur-sm bg-white/80 duration-300 ${
          active ? "top-[120px]" : "-top-[100vh]"
        }`}
      >
        <HeaderNav />
      </div>
    </>
  );
};

Header.Logo = HeaderLogo;
Header.Title = HeaderTitle;
Header.Nav = HeaderNav;

export default Header;
