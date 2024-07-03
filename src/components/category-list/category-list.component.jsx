import CategoryItem from "../category-item/category-item.component";
import "./categories.styles.scss";
const categories = [
  {
    id: 1,
    title: "Skin Care",
    imageUrl: "https://unsplash.com/photos/hXCo2kJpF2E/download?force=true",
    route: "shop/shampoos",
  },
  {
    id: 2,
    title: "Body Care",
    imageUrl: "https://unsplash.com/photos/vyhYvCiL3QQ/download?force=true",
    route: "shop/makeups",
  },
  {
    id: 3,
    title: "Hair Care",
    imageUrl:
      "https://unsplash.com/photos/7TlWZkpxCb0/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzE5ODQwMzgxfA&force=true",
    route: "shop/skincare",
  },
  {
    id: 4,
    title: "Make Up",
    imageUrl:
      "https://unsplash.com/photos/j7zEby7Z7eg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8cGVyZnVtZXN8ZW58MHx8fHwxNzE5ODIwODc1fDA&force=true",
    route: "shop/perfumes",
  },
  {
    id: 5,
    title: "Perfume & Musk",
    imageUrl:
      "https://unsplash.com/photos/p3O5f4u95Lo/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzE5ODM5MTQzfA&force=true",
    route: "shop/body-lotions",
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
