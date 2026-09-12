import { useState } from "react";
import {
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

function App() {

  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState(null);

  const addToCart = (product) => {

    setCart((currentCart) => {

      const existingProduct =
        currentCart.find(
          (item) => item.id === product.id
        );

      if (existingProduct) {

        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );

      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1
        }
      ];

    });
  };

  const increaseQuantity = (id) => {

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );

  };

  const decreaseQuantity = (id) => {

    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );

  };

  const removeFromCart = (id) => {

    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== id
      )
    );

  };

  const placeOrder = (newOrder) => {
    setOrder(newOrder);
    setCart([]);
  };

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <div className="app">

      <Navbar cartCount={cartCount} />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              onAddToCart={addToCart}
            />
          }
        />

        <Route
          path="/products"
          element={
            <Products
              onAddToCart={addToCart}
            />
          }
        />

        <Route
          path="/products/:id"
          element={
            <ProductDetails
              onAddToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onRemove={removeFromCart}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              onPlaceOrder={placeOrder}
            />
          }
        />

        <Route
          path="/order-success"
          element={<OrderSuccess order={order} />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="*"
          element={
            <main className="page">
              <div className="container not-found">
                <h1>404</h1>
                <p>
                  Page not found.
                </p>
              </div>
            </main>
          }
        />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;