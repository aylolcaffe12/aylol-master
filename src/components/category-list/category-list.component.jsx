import CategoryItem from "../category-item/category-item.component";
import "./categories.styles.scss";
import SpecialBreakFast from "./mainPic/SpecialBreakFast.jpg";
import nqaresh from "./mainPic/nqaresh.jpg";
import wjbet3daa from "./mainPic/wjbet3daa.jpeg";
import slatat from "./mainPic/slatat.jpeg";
import t7lay from "./mainPic/t7lay.jpeg";
import mshrobat from "./mainPic/mshrobat.jpeg";
import aragel from "./mainPic/aragel.jpg";
import ftorbrnji from "./mainPic/ftorbrnji.jpg";
import chipschider from "./mainPic/chipschider.jpeg";
import sdrjaj1 from "./mainPic/sdrjaj1.jpeg";
import slta3rbye from "./mainPic/slta3rbye.jpeg";
import mojito from "./mainPic/mojito.jpeg";


const categories = [
  // ftor
  {
    id: 1,
    titleId: "وجبة الفطور ",
    imageUrl: ftorbrnji,
    route: "shop/breakfast",
  },
  // moqblat
  {
    id: 2,
    titleId: "مقبلات",
    imageUrl: chipschider,
    route: "shop/nqaresh",
  },
  // food
  {
    id: 3,
    titleId: "وجبات ",
    imageUrl: sdrjaj1,
    route: "shop/lunch",
  },
  // salads
  {
    id: 4,
    titleId: "سلطات",
    imageUrl: slta3rbye,
    route: "shop/salads",
  },
  // t7lay
  {
    id: 5,
    titleId: "تحلاي",
    imageUrl: t7lay,
    route: "shop/t7lay",
  },
  // mshrobat 
  {
    id: 6,
    titleId: "مشروبات",
    imageUrl: mojito,
    route: "shop/mshrobat",
  },
  // aragel 
  {
    id: 7,
    titleId: "اراجيل",
    imageUrl: aragel,
    route: "shop/aragel",
  },

];

const CategoryList = () => {
  return (
    <div className="container">
      <div className="categories-container">
        {categories.map((category) => {
          return <CategoryItem key={category.id} category={category} />;
        })}
      </div>
    </div>
  );
};

export default CategoryList;
