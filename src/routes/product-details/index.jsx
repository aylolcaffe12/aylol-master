import React, { useMemo, useState, useEffect } from "react";
import "./product.styles.scss";
import { useParams } from "react-router-dom";
import { selectCategoriesMap } from "../../store/category.selector";
import { useDispatch, useSelector } from "react-redux";
import Markdown from "react-markdown";
import Button from "../../components/button/button.component";
import { addItemToCart, toggleMinicart } from "../../store/minicart.reducer";

const ProductDetails = () => {
  const params = useParams();
  const { productId, category } = params;
  const categoriesMap = useSelector(selectCategoriesMap);
  const dispatch = useDispatch();
  const product = useMemo(
    () =>
      categoriesMap
        ? categoriesMap[category].find((elem) => elem.id == productId)
        : null,
    [categoriesMap, productId, category]
  );

  const { name, imageUrl, price, des } = product;

  const [text, setText] = useState("");

  useEffect(() => {
    const fetchText = async () => {
      try {
        const response = await fetch(`/data/${productId}.txt`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.text();
        setText(data);
      } catch (error) {
        console.error("Error fetching the text file:", error);
      }
    };

    if (productId) {
      fetchText();
    }
  }, [productId]);

  const addProductToCart = () => {
    dispatch(addItemToCart(product));
    dispatch(toggleMinicart(true));
  };

  return (
    <div className="container product-container">
      <div className="product-card-container">
        <div className="img-container">
          <img
            src={imageUrl}
            alt={name}
            loading="lazy"
            onClick={() => navigate(`${product.id}`)}
          />
        </div>
        <div className="product-footer">
          <h3 className="name">{name}</h3>
          <p className="price">₪ {price?.toFixed(2)}</p>
        </div>
      </div>
      <Markdown style={{ width: "100px", overflow: "hidden" }} breaks>
        {text}
      </Markdown>
      <div className="sticky-footer">
        <Button label="اضف الى السلة" onClick={addProductToCart} />
      </div>
    </div>
  );
};

export default ProductDetails;
