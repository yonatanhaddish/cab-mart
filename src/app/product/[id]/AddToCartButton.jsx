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
      flexDirection: isXs || isSm ? "column" : "row",
      gap: isXs || isSm ? "15px" : "",
      height: isXs
        ? "150px"
        : isSm
        ? "140px"
        : isMd
        ? "200px"
        : isLg
        ? "80px"
        : isXl
        ? "100px"
        : "400px",
      justifyContent: isXs || isSm ? "center" : "space-evenly",
      justifyItems: "center",
      alignItems: "center",
    },
    button_add_to_cart_buy_now: {
      // border: "solid green 2px",
      display: "flex",
      justifyContent:
        isXs || isSm || isMd || isLg || isXl ? "space-between" : "",
      width: isXs
        ? "90%"
        : isSm
        ? "55%"
        : isMd
        ? "50%"
        : isLg
        ? "50%"
        : isXl
        ? "42%"
        : "100%",
      height: isXs
        ? "25%"
        : isSm
        ? "30%"
        : isMd
        ? "30%"
        : isLg
        ? "45%"
        : isXl
        ? "35%"
        : "100%",
      margin: isXs || isSm ? "0 auto" : "",
    },
    button_add_to_cart: {
      // border: "solid blue 2px",
      width: isXs
        ? "45%"
        : isSm
        ? "40%"
        : isMd
        ? "40%"
        : isLg
        ? "40%"
        : isXl
        ? "35%"
        : "",
      backgroundColor: "#14213d",
      color: "#e5e5e5",
      boxShadow: "0 0 10px #000",
      height: "100%",
    },
    button_buy_now: {
      // border: "solid blue 2px",
      width: isXs
        ? "45%"
        : isSm
        ? "40%"
        : isMd
        ? "40%"
        : isLg
        ? "40%"
        : isXl
        ? "35%"
        : "",
      backgroundColor: "#14213d",
      color: "#e5e5e5",
      boxShadow: "0 0 10px #000",
      height: "100%",
    },
    button_my_cart: {
      // border: "solid green 2px",
      margin: isXs || isSm ? "0 auto" : "",
      backgroundColor: "#14213d",
      boxShadow: "0 0 10px #000",
      color: "#e5e5e5",
      display: "flex",
      justifySelf: "center",
      height: isXs
        ? "25%"
        : isSm
        ? "30%"
        : isMd
        ? "30%"
        : isLg
        ? "45%"
        : isXl
        ? "35%"
        : "100%",
    },
  };

  const { addToCart } = useCart();

  function handlePassDataToProductPage() {
    passDataToProductPage();
  }
  console.log("product", product);

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
        <Button
          href={`/cart`}
          sx={{
            ...styles.button_my_cart,
            width: isXs
              ? "90%"
              : isSm
              ? "55%"
              : isMd
              ? "20%"
              : isLg
              ? "20%"
              : isXl
              ? "15%"
              : "",
          }}
        >
          My Cart
          <ShoppingCartIcon style={{ paddingLeft: 10 }} />
        </Button>
      </Box>
    </Box>
  );
}
