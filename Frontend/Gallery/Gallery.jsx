import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { fetchProducts } from "@services/productService";
import "@styles/menu.css";
import { Link } from "react-router-dom";

function Menu() {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleProducts = 4;

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);
  const next = () => {
    if (startIndex + visibleProducts < products.length) {
      setStartIndex(startIndex + visibleProducts);
    }
  };
  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - visibleProducts);
    }
  };
  const visible = products.slice(startIndex, startIndex + visibleProducts);
  return (
    <div className="gallery-container">
      <h2 className="title-font gallery-title">
        Nuestro Menú
      </h2>
      <div className="gallery-wrapper">
        <button className="gallery-arrow" onClick={prev}>
          <BsArrowLeftCircleFill size={35} />
        </button>
        <div className="gallery-grid">
          {visible.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="product-card"
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />
              <h3>{product.name}</h3>
              <p className="product-price">
                ${product.price}
              </p>
            </Link>
          ))}
        </div>
        <button className="gallery-arrow" onClick={next}>
          <BsArrowRightCircleFill size={35} />
        </button>
      </div>
    </div>
  );
}

export default Menu;