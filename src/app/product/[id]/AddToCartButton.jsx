"use client";

import { Box, Button, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import useCart from "../../../utils/useCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";
import Popper from "@mui/material/Popper";
import { useEffect, useState } from "react";

export default function AddToCartButtons({ product, passDataToProductPage }) {
  const [currentStock, setCurrentStock] = useState(product.stock);
  const [stockValid, setStockValid] = useState(true);
  const [buttonName, setButtonName] = useState("ADD TO CART");
  const [currentCartQty, setCurrentCartQty] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);

  const router = useRouter();

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
      // border:  "solid blue 2px",
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
      backgroundColor: stockValid ? "#14213d" : "#e5e5e5",
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

  const { addToCart, getCart } = useCart();

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  // console.log("currentStock", currentStock);
  // // console.log("single_current_cart", single_current_cart);
  // console.log("selectedProduct", selectedProduct);
  // console.log("currentCartQty", currentCartQty);

  useEffect(() => {
    getUpdatedCart();
  }, []);

  function handleAddToCart(product) {
    if (currentStock > currentCartQty) {
      addToCart(product);
    }
  }

  function getUpdatedCart() {
    const current_cart = getCart() || [];
    const single_current_cart = current_cart.find(
      (item) => item._id === product._id
    );

    if (single_current_cart) {
      setCurrentCartQty(single_current_cart.quantity);
      setSelectedProduct(single_current_cart);
    } else {
      // setCurrentCartQty(0);
    }
  }

  function handlePassDataToProductPage(event) {
    getUpdatedCart();

    if (currentStock >= 1 && currentStock - 1 > currentCartQty) {
      passDataToProductPage();
    } else {
      if (event?.currentTarget) {
        setAnchorEl(anchorEl ? null : event.currentTarget);
      }
      setStockValid(false);
      setButtonName("Product Out Of Stock");
    }
  }

  function routeChangeToMyCart() {
    setTimeout(() => {
      router.push("/cart");
    }, 1000);
  }

  return (
    <Box>
      <Box sx={styles.addcart_parent}>
        <Box sx={styles.button_add_to_cart_buy_now}>
          <Button
            sx={styles.button_add_to_cart}
            onClick={(e) => {
              handleAddToCart(product), handlePassDataToProductPage(e);
            }}
            disabled={!stockValid}
          >
            {buttonName} <AddShoppingCartIcon style={{ paddingLeft: 10 }} />
          </Button>
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <Box
              sx={{
                // border: 1,
                p: 1,
                bgcolor: "background.paper",
                backgroundColor: "#14213d",
                color: "red",
              }}
            >
              You Purchased the last product.
            </Box>
          </Popper>
          <Button
            sx={styles.button_buy_now}
            onClick={() => {
              addToCart(product),
                handlePassDataToProductPage(e),
                routeChangeToMyCart();
            }}
          >
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
