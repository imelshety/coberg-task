
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from "./Subcomponents/CarouselCard";

interface CardItem {
  src: string;
  title: string;
  description: string;
}

const cardItems: CardItem[] = [
  {
    src: "/assets/carousel1.svg",
    title: "Modular Kitchen",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
  },
  {
    src: "/assets/carousel2.svg",
    title: "Exterior Project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
  },
  {
    src: "/assets/carousel3.svg",
    title: "Grey Beauty",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
  },
  {
    src: "/assets/carousel4.svg",
    title: "Plantation interior",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
  },
  {
    src: "/assets/carousel1.svg",
    title: "Role of furnitures",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
  },
  {
    src: "/assets/carousel2.svg",
    title: "Home office",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
  }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1440 },
    items: 5
  },
  laptop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 767 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2
  }
};

const CarouselSlider: React.FC = () => {
  return (
    <Carousel responsive={responsive} containerClass="lg:px-5" className="w-full"
    
    >
      {cardItems.map((item, index) => (
        <CarouselCard key={index} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselSlider;
