import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ig_icon from "../../assets/ig-instagram-icon.svg";
import CartIcon from "./../../components/cart/cart-icon.component.jsx";
import Minicart from "../../components/cart/minicart.component.jsx";
import { logOutUser } from "../../utils/firebase/firebase.utils";
import Logo from "../../assets/crown.png";
import "./navigation.styles.scss";
import FooterComponent from "../../components/footer/footer.component.jsx";

const Navigation = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <>
      <div className="navigation">
        <div className="navigation-content">
          <Link className="logo-container" to={"/"}>
            <img src={Logo} alt="" className="" />
          </Link>

          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <a
              href="https://www.instagram.com/mis.floora"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ig_icon}
                style={{ width: "28px", height: "28px", cursor: "pointer" }}
                alt="icon"
              />
            </a>
            <CartIcon />
            <Minicart />
          </div>

          {/* <div className="nav-links-container">
            <Link className="nav-link" to={"/shop"}>
              Shop All
            </Link>
            {currentUser === "logged-out" && (
              <Link className="nav-link" to={"/login"}>
                Login
              </Link>
            )}
            {currentUser !== null && currentUser !== "logged-out" && (
              <span onClick={logOutUser} className="nav-link">
                Logout
              </span>
            )}
            <CartIcon />
          </div> */}
        </div>
      </div>
      <Outlet />
      {/* <FooterComponent /> */}
    </>
  );
};

export default Navigation;
