import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./prodects.css";
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import p3 from "./assets/p3.png";
import p4 from "./assets/p4.png";
import p5 from "./assets/p5.png";
import p6 from "./assets/p6.png";
import p7 from "./assets/p7.png";
import p8 from "./assets/p8.png";
import p9 from "./assets/p9.png";
import p10 from "./assets/p10.png";
import p11 from "./assets/p11.png";
import p12 from "./assets/p12.png";
import p13 from "./assets/p13.png";
import p14 from "./assets/p14.png";

const products = [
  { id: 1, name: "Flower Bucket", price: 18.0, oldPrice: 20.0, discount: "-10%", image: p1 },
  { id: 2, name: "Rose Vase", price: 25.0, oldPrice: 30.0, discount: "-15%", image: p2 },
  { id: 3, name: "Tulip Set", price: 15.0, oldPrice: 16.0, discount: "-5%", image: p3 },
  { id: 4, name: "Sunflower Pot", price: 22.0, oldPrice: 28.0, discount: "-20%", image: p4 },
  { id: 5, name: "Lily Basket", price: 30.0, oldPrice: 35.0, discount: "-12%", image: p5 },
  { id: 6, name: "Orchid Vase", price: 40.0, oldPrice: 50.0, discount: "-20%", image: p6 },
  { id: 7, name: "Daisy Mix", price: 12.0, oldPrice: 15.0, discount: "-8%", image: p7 },
  { id: 8, name: "Carnation Box", price: 18.0, oldPrice: 22.0, discount: "-10%", image: p8 },
  { id: 9, name: "Peony Bunch", price: 28.0, oldPrice: 32.0, discount: "-12%", image: p9 },
  { id: 10, name: "Hydrangea Vase", price: 35.0, oldPrice: 40.0, discount: "-12%", image: p10 },
  { id: 11, name: "Gardenia Pot", price: 20.0, oldPrice: 25.0, discount: "-20%", image: p11 },
  { id: 12, name: "Jasmine Bouquet", price: 27.0, oldPrice: 30.0, discount: "-10%", image: p12 },
  { id: 13, name: "Marigold Basket", price: 15.0, oldPrice: 18.0, discount: "-16%", image: p13 },
  { id: 14, name: "Violet Set", price: 22.0, oldPrice: 28.0, discount: "-21%", image: p14 }
];

// Add to cart with quantity
const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) existingProduct.quantity += 1;
  else cart.push({ ...product, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Add to favorites
const addToFavorites = (product) => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.some(fav => fav.id === product.id)) {
    favorites.push(product);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

function Products() {
  const [visibleCount, setVisibleCount] = useState(3); // show 3 initially

  const handleSeeMore = () => setVisibleCount(products.length); // show all products
  const handleShowLess = () => setVisibleCount(3); // collapse to 3 products

  return (
    <section className="my-5 mt-5 products" id="products">
      <div className="row">
        <h1>Pick your first <span>flower</span></h1>
        {products.slice(0, visibleCount).map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="product">
              <div className="flowers position-relative">
                <p>{product.discount}</p>
                <img src={product.image} alt={product.name} />
              </div>
              <h4>{product.name}</h4>
              <p>
                ${product.price.toFixed(1)}{" "}
                <del>${product.oldPrice.toFixed(1)}</del>
              </p>

              <button className="btn main-btn me-2" onClick={() => addToCart(product)}>
                Shop now
              </button>

              <button className="btn main-btn" onClick={() => addToFavorites(product)}>
                <i className="fa-solid fa-heart"></i>
              </button>
            </div>
          </div>
        ))}

        {visibleCount < products.length ? (
          <div className="col-12 text-center mt-3">
            <a className="btn main-btn" onClick={handleSeeMore}>
              See more &gt;&gt;
            </a>
          </div>
        ) : (
          <div className="col-12 text-center mt-3">
            <a className="btn main-btn" onClick={handleShowLess}>
              Show less &lt;&lt;
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
