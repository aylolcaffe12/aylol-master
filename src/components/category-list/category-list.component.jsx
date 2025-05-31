import CategoryItem from "../category-item/category-item.component";
import "./categories.styles.scss";
import SpecialBreakFast from "./mainPic/SpecialBreakFast.jpg";
import nqaresh from "./mainPic/nqaresh.jpg";
import wjbet3daa from "./mainPic/wjbet3daa.jpeg";


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
