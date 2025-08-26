"use client";

import { Box, Button, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useCart from "../../../utils/useCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";

export default function AddToCartButtons({ product, passDataToProductPage }) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  const styles = {
    addcart_parent: {
      // border: "solid red 2px",
      display: "flex",
      flexDirection: "column",
      gap: isXs ? "15px" : "",
      height: "150px",
      justifyContent: "center",
    },
    button_add_to_cart_buy_now: {
      // border: "solid green 2px",
      display: "flex",
      justifyContent: "space-between",
      width: isXs ? "90%" : "100%",
      margin: isXs ? "0 auto" : "",
    },
    button_add_to_cart: {
      // border: "solid blue 2px",
      width: "45%",
      backgroundColor: "#14213d",
      color: "#e5e5e5",
      boxShadow: "0 0 10px #000",
    },
    button_buy_now: {
      // border: "solid blue 2px",
      width: "45%",
      backgroundColor: "#14213d",
      color: "#e5e5e5",
      boxShadow: "0 0 10px #000",
    },
    button_my_cart: {
      // border: "solid blue 2px",
      width: "100%",
      display: "flex",
      justifySelf: "center",
      width: isXs ? "90%" : "100%",
      margin: isXs ? "0 auto" : "",
      backgroundColor: "#14213d",
      color: "#e5e5e5",
      boxShadow: "0 0 10px #000",
    },
  };

  const { addToCart } = useCart();

  function handlePassDataToProductPage() {
    passDataToProductPage();
  }

  return (
    <Box>
      <Box sx={styles.addcart_parent}>
        <Box sx={styles.button_add_to_cart_buy_now}>
          <Button
            sx={styles.button_add_to_cart}
            onClick={() => {
              addToCart(product), handlePassDataToProductPage();
            }}
          >
            Add to Cart <AddShoppingCartIcon style={{ paddingLeft: 10 }} />
          </Button>
          <Button sx={styles.button_buy_now}>
            Buy Now
            <PaymentIcon style={{ paddingLeft: 10 }} />
          </Button>
        </Box>
        <Button sx={styles.button_my_cart} href={`/cart`}>
          My Cart
          <ShoppingCartIcon style={{ paddingLeft: 10 }} />
        </Button>
      </Box>
    </Box>
  );
}
