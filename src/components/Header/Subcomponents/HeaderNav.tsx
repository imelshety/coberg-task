
const HeaderNav: React.FC = () => {
  return (
    <ul className="lg:w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 lg:py-10">
      <li className="text-black-950 font-medium hover:text-PrimaryColor-500 transition-all cursor-pointer">
        <a> About</a>
      </li>
      <li className="text-black-950 font-medium hover:text-PrimaryColor-500 transition-all cursor-pointer">
        <a> Projects</a>
      </li>
      <li className="text-black-950 font-medium hover:text-PrimaryColor-500 transition-all cursor-pointer">
        <a> Studio </a>
      </li>
      <li className="text-black-950 font-medium hover:text-PrimaryColor-500 transition-all cursor-pointer">
        <a> Blog </a>
      </li>
      <li className="text-black-950 font-medium hover:text-PrimaryColor-500 transition-all cursor-pointer">
        <a> Contact </a>
      </li>
    </ul>
  );
};

export default HeaderNav;
