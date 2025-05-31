import CategoryItem from "../category-item/category-item.component";
import "./categories.styles.scss";
import SpecialBreakFast from "./mainPic/SpecialBreakFast.jpg";
import tabon from "./mainPic/tabon.jpg";
import drinks from "./mainPic/drinks.jpg";
import sweets from "./mainPic/sweets.jpg";

const categories = [
  {
    id: 1,
    titleId: "وجبة الفطور ",
    imageUrl: SpecialBreakFast,
    route: "shop/breakfast",
  },
  {
    id: 2,
    titleId: "اكل",
    imageUrl: SpecialBreakFast,
    route: "shop/food",
  },
  {
    id: 3,
    titleId: "سلطات",
    imageUrl: SpecialBreakFast,
    route: "shop/salads",
  },

  // {
  //   id: 2,
  //   titleId: "طابون",
  //   imageUrl: tabon,
  //   route: "shop/tabon",
  // },
  // {
  //   id: 3,
  //   titleId: "haircare",
  //   imageUrl: drinks,
  //   route: "shop/haircare",
  // },
  // {
  //   id: 4,
  //   titleId: "makeup",
  //   imageUrl: sweets,
  //   route: "shop/makeups",
  // },

  // {
  //   id: 5,
  //   titleId: "lololololo",
  //   imageUrl: sweets,
  //   route: "shop/lololololo",
  // },
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
