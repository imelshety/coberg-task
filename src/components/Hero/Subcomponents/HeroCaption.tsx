const HeroCaption = () => {
  return (
    <div className="backdrop-blur-sm bg-white/60 w-10/12 lg:w-1/2 z-20 flex flex-col justify-center items-center gap-6 absolute -bottom-12 left-8 md:left-14 lg:top-1/3  lg:left-[52%] py-12 xl:top-1/4 xl:w-1/3 xl:h-1/2">
      <h3 className="text-md md:text-xl lg:text-2xl">
        Get personalised home interiors
      </h3>
      <h1 className="text-[#241330] font-bold text-md md:text-lg lg:text-3xl">
        in just 50 days
      </h1>
      <button className="bg-PrimaryColor-950 text-white font-semibold text-sm md:text-md lg:text-lg px-4 lg:px-12 py-4 transition-all duration-500 bg-gradient-to-br from-PrimaryColor-950 to-PrimaryColor-950 hover:from-PrimaryColor-700 hover:to-PrimaryColor-900">
        SPEAK WITH AN ONLINE CONSULTANT
      </button>
    </div>
  );
};

export default HeroCaption;
