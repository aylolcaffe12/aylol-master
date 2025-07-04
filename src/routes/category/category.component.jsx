import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/category.selector";
import ProductCard from "../../components/product-card/product-card.component";
import SpinnerComponent from "../../components/spinner/spinner.component";
import SubcategoryCard from "../../components/sub-card/sub-card.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  console.log("products", products);
  return (
    <>
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        <div className="container page-container">
          <div className="shop-container">
            {products &&
              products.map((item) => {
                if (item.items) {
                  // it's a subcategory
                  return (
                    <SubcategoryCard
                      key={item.title}
                      subcategory={item}
                      category={category}
                    />
                  );
                } else {
                  // it's a product
                  return <ProductCard key={item.id} product={item} />;
                }
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Category;
