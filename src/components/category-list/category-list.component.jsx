import CategoryItem from "../category-item/category-item.component";
import "./categories.styles.scss";
import skincare from "./mainPic/skincare.jpg";
import bodycare from "./mainPic/bodycare.jpg";
import haircare from "./mainPic/haircare.jpg";
import makeup from "./mainPic/makeup.jpg";
import perfume from "./mainPic/perfume.jpg";


const categories = [
  {
    id: 1,
    title: "Skin Care",
    imageUrl: skincare,
    route: "shop/skincare",
  },
  {
    id: 2,
    title: "Body Care",
    imageUrl: bodycare,
    route: "shop/body-lotions",
  },
  {
    id: 3,
    title: "Hair Care",
    imageUrl: haircare,
    route: "shop/haircare",
  },
  {
    id: 4,
    title: "Make Up",
    imageUrl: makeup,
        route: "shop/makeups",
  },
  {
    id: 5,
    title: "Perfume & Musk",
    imageUrl: perfume ,
        route: "shop/perfumes",
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
