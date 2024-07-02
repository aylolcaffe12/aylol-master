import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas"; // Ensure this import is added
import FormInput from "../../components/form-input/form-input.component";
import {
  addItemToCart,
  removeOrDecreaseItem,
} from "../../store/minicart.reducer";
import {
  selectBagTotalPrice,
  selectCartItems,
} from "../../store/minicart.selector";
import "./cart.styles.scss";
import Button from "../../components/button/button.component";

const CartComponent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const bagTotalPrice = useSelector(selectBagTotalPrice);

  const handleAddToCart = (product) => {
    if (product.quantity < 10) {
      dispatch(addItemToCart(product));
    }
  };

  const handleRemoveOrDecrease = (product, directRemove = false) =>
    dispatch(removeOrDecreaseItem({ product, directRemove }));

  const [values, setValues] = useState({ name: "", location: "" });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const sendWhatsAppMessage = () => {
    const { name, location, phone } = values;

    let message = `Name: ${name}\nLocation: ${location}\n\nItems:\n`;
    message += "Product          Quantity          Unit Price\n";
    cartItems.forEach((item) => {
      message += `${item.name}          ${
        item.quantity
      }          $${item.price.toFixed(2)}\n`;
    });
    message += `\nTotal: $${bagTotalPrice.toFixed(2)}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "+972522911779".replace(/\D/g, ""); // Ensure phone number is in the correct format
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp link
    window.open(whatsappLink, "_blank");
  };

  return (
    <div
      className={`container cart-container ${
        !cartItems.length && "empty-container"
      }`}
    >
      {cartItems.length > 0 && (
        <>
          <h1>Cart</h1>
          <div className="total">
            <div>Total:</div> $ {bagTotalPrice.toFixed(2)}
          </div>
        </>
      )}
      {!cartItems.length ? (
        <div>
          <h2>Your Cart is empty</h2>
          <Link className="button-container" to={"/shop"}>
            Go Shopping
          </Link>
        </div>
      ) : (
        <>
          <div id="cart-invoice">
            <div className="info-container">
              <FormInput
                label="שם ושם משפחה"
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
                required
              />
              <FormInput
                label="מיקום"
                type="text"
                name="location"
                onChange={handleChange}
                value={values.location}
                required
              />
              <Button label="שליחה" onClick={sendWhatsAppMessage} />
            </div>
            <div className="cart-header semibold-barlow-cond">
              <div className="header-block">Product</div>
              <div className="header-block"></div>
              <div className="header-block text-center">Quantity</div>
              <div className="header-block text-right">Unit Price</div>
              <div className="header-block"></div>
            </div>
            {cartItems.map((item) => {
              return (
                <div key={item.id} className="cart-item-container">
                  <div className="image-container">
                    <img src={item.imageUrl} alt="" />
                  </div>
                  <div className="name medium-barlow-cond">{item.name}</div>
                  <div className="quantity">
                    <button
                      type="button"
                      onClick={() => handleRemoveOrDecrease(item)}
                    >
                      -
                    </button>
                    <span className="value">{item.quantity}</span>
                    <button type="button" onClick={() => handleAddToCart(item)}>
                      +
                    </button>
                  </div>
                  <div className="price text-right">
                    $ {item.price.toFixed(2)}
                  </div>
                  <div className="remove-button text-center">
                    <button
                      type="button"
                      onClick={() => handleRemoveOrDecrease(item, true)}
                    >
                      &#10005;
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default CartComponent;
