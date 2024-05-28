
import { ReactNode } from "react";
import BlogTitle from "./Subcomponents/BlogTitle";
import BlogAction from "./Subcomponents/BlogAction";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
type BlogProps = {
  children: ReactNode;
};
type BlogComponent = React.FC<BlogProps> & {
  Title: React.FC;
  Action: React.FC;
  Slider: React.FC;
};
const Blog: BlogComponent = ({ children }) => {
  return (
    <section className="ps-20 flex flex-col gap-12 my-20 pb-20">
      {children}
    </section>
  );
};

Blog.Title = BlogTitle;
Blog.Action = BlogAction;
Blog.Slider = CarouselSlider;
export default Blog;
