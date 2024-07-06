import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
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

  const generatePDF = async () => {
    const { name, location } = values;
    const doc = new jsPDF();

    // Add text
    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Location: ${location}`, 10, 20);
    doc.text("Items:", 10, 30);

    // Add table headers
    const tableBody = cartItems.map((item) => [
      item.name,
      item.quantity,
      `₪${item.price.toFixed(2)}`,
      { content: "", styles: { cellWidth: 30, cellPadding: 0 } },
    ]);

    doc.autoTable({
      head: [["Product", "Quantity", "Unit Price", "Image"]],
      body: tableBody,
      startY: 40,
      willDrawCell: (data) => {
        if (data.section === "body") {
          data.cell.styles.minCellHeight = 200;
        }
      },
      didDrawCell: (data) => {
        if (data.column.index === 3 && data.cell.section === "body") {
          const itemIndex = data.row.index;
          const img = new Image();
          img.src = cartItems[itemIndex].imageUrl; // Reference the correct item
          img.onload = () => {
            doc.addImage(
              img,
              "JPEG",
              data.cell.x + 2,
              data.cell.y + 2,
              196,
              196
            );
          };
        }
      },
    });

    // Add total price
    doc.text(
      `Total: ₪${bagTotalPrice.toFixed(2)}`,
      10,
      doc.autoTable.previous.finalY + 10
    );

    // Save the PDF
    const pdfOutput = doc.output("blob");

    // Create a download link
    const pdfURL = URL.createObjectURL(pdfOutput);
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "invoice.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // const sendWhatsAppMessage = async () => {
  //   const pdfURL = await generatePDF();
  //   const { name, location } = values;

  //   let message = `Name: ${name}\nLocation: ${location}\n\nPlease download your invoice: ${pdfURL}`;

  //   const encodedMessage = encodeURIComponent(message);
  //   const phoneNumber = "+972522911779".replace(/\D/g, ""); // Ensure phone number is in the correct format
  //   const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  //   // Open WhatsApp link
  //   window.open(whatsappLink, "_blank");
  // };

  const sendWhatsAppMessage = () => {
    const { name, location, phone } = values;

    let message = `Name: ${name}\nLocation: ${location}\n\nItems:\n`;
    message += "Product            Quantity    Unit Price\n";
    message += "------------------------------------------\n";

    cartItems.forEach((item) => {
      message += `${item.name.padEnd(18)}${item.quantity
        .toString()
        .padEnd(12)}₪${item.price.toFixed(2).padStart(10)}\n`;
    });

    message += `\nTotal: ₪${bagTotalPrice.toFixed(2)}`;

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
            {bagTotalPrice.toFixed(2)}₪
            <Button label="שליחה" onClick={sendWhatsAppMessage} />
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
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onClick={() => handleRemoveOrDecrease(item)}
                    >
                      -
                    </button>
                    <span className="value">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => handleAddToCart(item)}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="price text-right">
                    ₪ {item.price.toFixed(2)}
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
