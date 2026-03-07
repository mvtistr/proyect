import "@styles/global.css";
import "@styles/header.css";

import { Link } from "react-router-dom";
import { useContext } from "react";

// import { Icons } from "@shared/icons";
import { FaUser } from "react-icons/fa";
import { BsBackpack4Fill, BsList } from "react-icons/bs";

import { CartContext } from "@context/CartContext";

import Logo from "@img/Logo-removebg.png";

function Header() {
  const { cartCount } = useContext(CartContext);

  return (
    <header className="header">
      <nav className="nav-bar">

        <img src={Logo} alt="Logo" className="logo" />

        <Link to="/">
          <h1 className="header-title title-font">Mega Burguer</h1>
        </Link>

        <div className="icons-header">

          <Link to="/profile" className="tooltip">
            <FaUser size={30} className="icons" />
            <span className="tooltip-text">Perfil</span>
          </Link>

          <Link to="/cart" className="tooltip cart-icon">
            <BsBackpack4Fill size={300} className="icons" />

            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount}
              </span>
            )}

            <span className="tooltip-text">Pedido</span>
          </Link>

          <Link to="/menu" className="tooltip">
            <BsList size={30} className="icons" />
            <span className="tooltip-text">Menú</span>
          </Link>

        </div>
      </nav>
    </header>
  );
}

export default Header;