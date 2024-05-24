const cardItems = [
  {
    src: "/assets/card1.svg",
    title: "Modular Kitchen",
  },
  {
    src: "/assets/card2.svg",
    title: "Bedroom",
  },
  {
    src: "/assets/card3.svg",
    title: "Living room",
  },
  {
    src: "/assets/card4.svg",
    title: "Home office",
  },
];

const Card = () => {
  return (
    <>
      {cardItems.map((cardItem, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center gap-4 cursor-pointer"
        >
          <img
            src={cardItem.src}
            alt={cardItem.title}
            className="rounded-xl transform transition-transform duration-300 lg:hover:scale-110"
          />
          <p className="font-semibold text-PrimaryColor-950">
            {cardItem.title}
          </p>
        </div>
      ))}
    </>
  );
};

export default Card;
