import CategoryItem from "../category-item/category-item.component";
import "./categories.styles.scss";
import skincare from "./mainPic/skincare.jpg";
import bodycare from "./mainPic/bodycare.jpg";
import haircare from "./mainPic/haircare.jpg";
import makeup from "./mainPic/makeup.jpg";
import perfume from "./mainPic/perfume.jpg";
import lenses from "./mainPic/lenses.jpg";
import gifts from "./mainPic/gifts.jpg";


const categories = [
  {
    id: 1,
    titleId: "skincare",
    imageUrl: skincare,
    route: "shop/skincare",
  },
  {
    id: 2,
    titleId: "bodycare",
    imageUrl: bodycare,
    route: "shop/body-lotions",
  },
  {
    id: 3,
    titleId: "haircare",
    imageUrl: haircare,
    route: "shop/haircare",
  },
  {
    id: 4,
    titleId: "makeup",
    imageUrl: makeup,
    route: "shop/makeups",
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
