"use client";

import { Box, Button } from "@mui/material";
import Link from "next/link";
import useCart from "../../../utils/useCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";

const styles = {
  image_parent: {
    width: "60%",
    height: "50px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    // border: "solid blue 10px",
  },
  button_add_to_cart: {
    backgroundColor: "#14213d",
    color: "#e0e0e0",
    fontWeight: "400",
    width: "25%",
    height: "70%",
    opacity: "100%",
    justifyContent: "space-evenly",
  },
};

export default function AddToCartButtons({ product, passDataToProductPage }) {
  const { addToCart } = useCart();

  function handlePassDataToProductPage() {
    passDataToProductPage();
  }

  return (
    <Box sx={styles.image_parent}>
      <Button
        sx={styles.button_add_to_cart}
        onClick={() => {
          addToCart(product), handlePassDataToProductPage();
        }}
      >
        Add to Cart <AddShoppingCartIcon />
      </Button>
      <Button sx={styles.button_add_to_cart}>
        Buy Now
        <PaymentIcon />
      </Button>
      <Button sx={styles.button_add_to_cart} href={`/cart`}>
        My Cart
        <ShoppingCartIcon />
      </Button>
    </Box>
  );
}
