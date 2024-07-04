import React, { useMemo, useState, useEffect } from "react";
import "./product.styles.scss";
import { useParams } from "react-router-dom";
import { selectCategoriesMap } from "../../store/category.selector";
import { useSelector } from "react-redux";
import exampleText from "../../assets/images/bodycare/pa/1.txt";
import Markdown from "react-markdown";

const ProductDetails = () => {
  const params = useParams();
  const { productId, category } = params;
  const categoriesMap = useSelector(selectCategoriesMap);

  const product = useMemo(
    () =>
      categoriesMap
        ? categoriesMap[category].find((elem) => elem.id == productId)
        : null,
    [categoriesMap, productId, category]
  );

  const { name, imageUrl, price, id } = product;

  const [text, setText] = useState("");

  useEffect(() => {
    // Fetch the .txt file content
    fetch(exampleText)
      .then((response) => response.text())
      .then((data) => setText(data))
      .catch((error) => console.error("Error fetching the text file:", error));
  }, []);

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
          {productId}
          <p className="price">$ {price?.toFixed(2)}</p>
        </div>
      </div>
      <Markdown>{text}</Markdown>
    </div>
  );
};

export default ProductDetails;
