import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/category.selector";
import ProductCard from "../../components/product-card/product-card.component";
import SpinnerComponent from "../../components/spinner/spinner.component";

const SubCategoryListPage = () => {
  const { category, subCategory } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const categoryData = categoriesMap[category] || [];

  // Find the matching subcategory
  const subCategoryData = categoryData.find(
    (item) => item.title === subCategory
  );

  // If found, use its items array, otherwise empty array
  const products = subCategoryData?.items || [];

  return (
    <>
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        <div className="container page-container">
          <div className="shop-container">
            {products &&
              products.map((item) => {
                return <ProductCard key={item.id} product={item} />;
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default SubCategoryListPage;
