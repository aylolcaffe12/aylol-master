import { memo } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart, toggleMinicart } from "../../store/minicart.reducer";
import addtocartimage from "../../assets/icons8-add-to-cart-48.png";
import Button from "../button/button.component";
import "./product-card.styles.scss";
import { useNavigate } from "react-router-dom";

const SubcategoryCard = memo(({ subcategory, category }) => {
  const { title, items, name } = subcategory;
  const navigate = useNavigate();

  const firstProductImage = items[0]?.imageUrl; // take the first product image if available

  return (
    <div
      className="product-card-container"
      onClick={() => navigate(`${title}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="img-container">
        {firstProductImage ? (
          <img src={firstProductImage} alt={title} loading="lazy" />
        ) : (
          <div className="no-image">No Image</div> // fallback if no products
        )}
      </div>
      <div className="product-footer">
        <h3 className="name">{name}</h3>
      </div>
    </div>
  );
});

export default SubcategoryCard;
