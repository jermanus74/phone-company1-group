import React, { useState } from "react";
import { Navbar } from "./../components/navbar/Navbar";
import { ProductCard } from "./../components/products/ProductCard";

export const ProductsPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const incrementQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const productsData = [
    // Sample product data
    { id: 1, title: "Galaxy Z Flip 3", price: 999, image: "path/to/image1" },
    { id: 2, title: "Galaxy Watch 5", price: 299, image: "path/to/image2" },
  ];

  return (
    <div>
      <Navbar
        cartItems={cartItems}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
      <ProductCard data={productsData} addToCart={addToCart} />
    </div>
  );
};
