import CategoryItem from "../category-item/category-item.component";
import "./categories.styles.scss";
import SpecialBreakFast from "./mainPic/SpecialBreakFast.jpg";
import nqaresh from "./mainPic/nqaresh.jpg";
import wjbet3daa from "./mainPic/wjbet3daa.jpeg";
import slatat from "./mainPic/slatat.jpeg";
import t7lay from "./mainPic/t7lay.jpeg";
import mshrobat from "./mainPic/mshrobat.jpeg";
import aragel from "./mainPic/aragel.jpg";

t7lay

const categories = [
  {
    id: 1,
    titleId: "وجبة الفطور ",
    imageUrl: SpecialBreakFast,
    route: "shop/breakfast",
  },
  {
    id: 2,
    titleId: "نقاريش",
    imageUrl: nqaresh,
    route: "shop/nqaresh",
  },
  {
    id: 3,
    titleId: "وجبة الغداء",
    imageUrl: wjbet3daa,
    route: "shop/lunch",
  },
  {
    id: 4,
    titleId: "سلطات",
    imageUrl: slatat,
    route: "shop/salads",
  },
  {
    id: 5,
    titleId: "تحلاي",
    imageUrl: t7lay,
    route: "shop/t7lay",
  },
  {
    id: 6,
    titleId: "مشروبات",
    imageUrl: mshrobat,
    route: "shop/mshrobat",
  },
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
