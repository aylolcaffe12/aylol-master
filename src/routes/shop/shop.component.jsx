import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCategories } from "../../store/category.reducer";
import Category from "../category/category.component";

import "./shop.styles.scss";
import ProductDetails from "../product-details";
import SubCategoryListPage from "../sub-category-items/sub.items.category.component";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let isApiSubscribed = true;

    if (isApiSubscribed) {
      dispatch(fetchCategories());
    }

    return () => {
      isApiSubscribed = false;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Routes>
      {/* <Route index element={<CategoryListPage />} /> */}
      <Route path=":category" element={<Category />} />
      <Route path=":category/:subCategory" element={< SubCategoryListPage/>} />
      {/* <Route path=":category/:subCategory/:productId" element={<ProductDetails />} /> */}
    </Routes>
  );
};

export default Shop;
