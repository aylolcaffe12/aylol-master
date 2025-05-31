import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/category.selector";
import ProductCard from "../../components/product-card/product-card.component";
import SpinnerComponent from "../../components/spinner/spinner.component";

const CategoryListPage = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        <div className="container page-container">
          <h2 className="cat-name">{category}</h2>
          {/* <div className="shop-container">
            {categoryData.map((item) => {
              if (item.items) {
                // It's a subcategory
                return (
                  <Link
                    to={`${item.title}`}
                    key={item.title}
                    className="subcategory-link"
                  >
                    <div className="subcategory-card">
                      <h3>{item.title}</h3>
                    </div>
                  </Link>
                );
              } else {
                // It's a product
                return <ProductCard key={item.id} product={item} />;
              }
            })}
          </div> */}
        </div>
      )}
    </>
  );
};

export default CategoryListPage;
