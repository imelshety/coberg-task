import { ReactNode } from "react";
import CategoriesTitle from "./Subcomponents/CategoriesTitle";
import CategoriesCards from "./Subcomponents/CategoriesCards/CategoriesCards";
import CategoriesCaption from "./Subcomponents/CategoriesCaption";
type CategoriesProps = {
  children: ReactNode;
};
type CategoriesComponent = React.FC<CategoriesProps> & {
  Title: React.FC;
  Card: React.FC;
  Caption: React.FC;
};
const Categories: CategoriesComponent = ({ children }) => {
  return (
    <section className="flex flex-col justify-center items-center gap-12 my-20 pb-8">
      {children}
    </section>
  );
};

Categories.Title = CategoriesTitle;
Categories.Card = CategoriesCards;
Categories.Caption = CategoriesCaption;
export default Categories;
