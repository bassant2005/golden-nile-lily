import React, { useState, useEffect } from "react";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "./assets/l.png";

function Nav() {
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);

  // Load cart & favorites on modal open
  useEffect(() => {
    const cartModal = document.getElementById("cartModal");
    const favModal = document.getElementById("favModal");

    const loadCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(storedCart);
    };

    const loadFavs = () => {
      const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavItems(storedFavs);
    };

    cartModal.addEventListener("show.bs.modal", loadCart);
    favModal.addEventListener("show.bs.modal", loadFavs);

    return () => {
      cartModal.removeEventListener("show.bs.modal", loadCart);
      favModal.removeEventListener("show.bs.modal", loadFavs);
    };
  }, []);

  // Delete favorite item
  const deleteFavItem = (productId) => {
    const newFavs = favItems.filter((item) => item.id !== productId);
    setFavItems(newFavs);
    localStorage.setItem("favorites", JSON.stringify(newFavs));
  };

  // Delete cart item
  const deleteCartItem = (productId) => {
    const newCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Update quantity
  const updateQuantity = (productId, change) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        const newQty = item.quantity + change;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  // Cart total
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" /> Golden Nile Lily
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#products">Products</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Comment</a></li>
              <li className="nav-item"><a className="nav-link" href="#review">Review</a></li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="modal" data-bs-target="#cartModal">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="modal" data-bs-target="#favModal">
                  <i className="fa-solid fa-heart"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Cart Modal */}
      <div className="modal fade" id="cartModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header">
              <h5 className="modal-title">Your Cart</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {cartItems.length === 0 ? (
                <p>No items in your cart yet 🛒</p>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className="row align-items-center mb-3">
                    <div className="col-8 d-flex align-items-center">
                      <img src={item.image} alt={item.name} style={{ width: "50px", marginRight: "10px" }} />
                      <div>
                        <p className="mb-0">{item.name} x{item.quantity}</p>
                        <small>${(item.price * item.quantity).toFixed(2)}</small>
                      </div>
                    </div>
                    <div className="col-4 d-flex align-items-center">
                      <button
                        className="btn btn-sm btn-secondary m-1"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <i className="fa-solid fa-square-plus"></i>
                      </button>
                      
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteCartItem(item.id)}
                      >
                        Delete
                      </button>
                      
                      <button
                        className="btn btn-sm btn-secondary m-1"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <i className="fa-solid fa-square-minus"></i>
                      </button>
                    </div>
                  </div>
                ))
              )}
              <hr/>
              <div className="total mt-3 d-flex justify-content-between">
                <h5>Total: ${cartTotal.toFixed(2)}</h5>
                <div>
                  <button
                    className="btn btn-sm btn-secondary me-2"
                    onClick={clearCart}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-sm btn-success"
                    data-bs-dismiss="modal"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Favorites Modal */}
      <div className="modal fade" id="favModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header">
              <h5 className="modal-title">Favorites</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {favItems.length === 0 ? (
                <p>No favorite products yet ❤️</p>
              ) : (
                favItems.map((product, index) => (
                  <div key={index} className="row align-items-center mb-3">
                    <div className="col-9 d-flex align-items-center">
                      <img src={product.image} alt={product.name} style={{ width: "50px", marginRight: "10px" }} />
                      <div>
                        <p className="mb-0">{product.name}</p>
                        <small>${product.price.toFixed(2)}</small>
                      </div>
                    </div>
                    <div className="col-3 text-end">
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteFavItem(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
