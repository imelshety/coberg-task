
interface CardItem {
  src: string;
  title: string;
  description: string;
}

interface CarouselCardProps {
  item: CardItem;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col justify-center items-start gap-4 cursor-pointer mx-2">
      <img src={item.src} alt={item.title} className="rounded-xl" />
      <h4 className="font-semibold text-sm md:text-md lg:text-xl text-PrimaryColor-950">{item.title}</h4>
      <p className="text-sm lg:w-2/3">{item.description}</p>
    </div>
  );
};

export default CarouselCard;
