"use client";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import useCart from "../../utils/useCart";

const styles = {
  parent_mycart: {
    border: "solid red 2px",
    width: "90%",
    minHeight: "90vh",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "50px",
  },
  cart_image_item: {
    backgroundImage: `url(/images/coffee_beans.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80px",
    width: "100px",
  },
  cart_title: {
    // border: "solid green 2px",
    alignSelf: "center",
  },
  reciept_cart: {
    border: "solid #14213d 2px",
    width: "25%",
    height: "200px",
    paddingTop: "40px",
    paddingLeft: "20px",
  },
  sub_parent: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  carts_all: {
    // border: "solid green 2px",
    width: "40%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  info_cart_single: {
    border: "solid purple 2px",
    display: "flex",
    justifyContent: "space-between",
  },
  icon_delete: {
    alignSelf: "center",
    paddingRight: "10px",
  },
  typo_info: { width: "60%" },
  your_cart_title: {
    fontSize: "2rem",
  },
};
function Cart() {
  const { getCart, removeFromCart } = useCart();

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const cart_products = getCart();
    setCartProducts(cart_products);
  }, []);

  const sub_total = cartProducts.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);

  const delivery_price = sub_total > 100 || sub_total <= 0 ? 0 : 20;

  const total_price = sub_total + delivery_price;

  const handleDeleteItem = (id) => {
    removeFromCart(id);
    setCartProducts((prev) => prev.filter((item) => item._id !== id));
  };
  return (
    <Box sx={styles.parent_mycart}>
      <Box sx={styles.cart_title}>
        <Typography sx={styles.your_cart_title}>Your Cart</Typography>
        <Link href={`/`}>Continue Shopping</Link>
      </Box>
      <Box sx={styles.sub_parent}>
        <Box sx={styles.carts_all}>
          {cartProducts.map((item, index) => (
            <Box key={index} sx={styles.info_cart_single}>
              <Box sx={styles.cart_image_item}></Box>
              <Box sx={styles.typo_info}>
                <Typography>{item.name}</Typography>
                <Typography>{item.category}</Typography>
                <Typography>{item.price}</Typography>
              </Box>
              <Box
                sx={styles.icon_delete}
                onClick={() => handleDeleteItem(item._id)}
              >
                <DeleteIcon />
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={styles.reciept_cart}>
          <Typography sx={{ fontSize: "1rem", marginBottom: "5px" }}>
            Subtotal: {sub_total} CAD
          </Typography>
          <Typography sx={{ fontSize: "1rem", marginBottom: "5px" }}>
            Delivery: {delivery_price} CAD
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontWeight: "600",
              borderTop: "solid #14213d 1px",
              width: "90%",
            }}
          >
            TOTAL: {total_price} CAD
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
