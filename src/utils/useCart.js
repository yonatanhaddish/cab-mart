"use client";
import { useState, useEffect } from "react";

export default function useCart() {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Load cart from localStorage on first render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem._id === item._id
      );

      if (existingItem) {
        const updatedCart = prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                stock: cartItem.stock > 0 ? cartItem.stock - 1 : 0,
              }
            : cartItem
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        // If item does not exist, add it with quantity 1
        const updatedCart = [
          ...prevCart,
          { ...item, quantity: 1, stock: item.stock > 0 ? item.stock - 1 : 0 },
        ];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
    });
  };

  const getCart = () => {
    const products = JSON.parse(localStorage.getItem("cart")) || [];
    return products;
  };
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem._id === id);

      if (!existingItem) return prevCart; // no match found

      let updatedCart;

      if (existingItem.quantity > 1) {
        // Decrease quantity and restore stock by 1
        updatedCart = prevCart.map((cartItem) =>
          cartItem._id === id
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
                stock: cartItem.stock + 1, // return 1 back to stock
              }
            : cartItem
        );
      } else {
        // If only one left, remove the item entirely
        updatedCart = prevCart.filter((cartItem) => cartItem._id !== id);
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return { cart, addToCart, removeFromCart, clearCart, getCart };
}
