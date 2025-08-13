import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

const styles = {
  cart_notification_cart: {
    border: "solid #14213d 1px",
    boxShadow: "0 0 10px #14213d",
    display: "flex",
    flexDirection: "column",
    width: "300px",
    height: "180px",
    justifyContent: "space-between",
  },
  cart_title_close: {
    borderBottom: "solid #14213d 2px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#14213d",
  },
  cart_typo_title: {
    fontSize: "1.2rem",
    color: "#e0e0e0",
    paddingLeft: "8px",
  },
  cart_img_name: {
    // border: "solid green 2px",
    display: "flex",
    justifyContent: "space-around",
  },
  image_box: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: "url('/images/furniture.jpeg')",
    width: "60px",
    // border: "solid red 2px",
    width: "25%",
  },
  cart_typo_name: {
    fontSize: "1.2rem",
    // border: "solid blue 2px",
    width: "60%",
  },
  cart_button_link: {
    // border: "solid blue 2px",
    width: "90%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "30%",
    justifyContent: "space-around",
  },
  button_view_cart: {
    backgroundColor: "#f97316",
    color: "#14213d",
    height: "25px",
    width: "140px",
    fontSize: "0.9rem",
  },
};
function CartNotification({ product }) {
  return (
    <Box sx={styles.cart_notification_cart}>
      <Box sx={styles.cart_title_close}>
        <Typography sx={styles.cart_typo_title}> Cart Updated</Typography>
        <CloseIcon sx={{ color: "#e0e0e0", paddingRight: "8px" }} />
      </Box>
      <Box sx={styles.cart_img_name}>
        <Box sx={styles.image_box}></Box>
        <Typography sx={styles.cart_typo_name}>{product.name}</Typography>
      </Box>
      <Box sx={styles.cart_button_link}>
        <Button sx={styles.button_view_cart}>View Cart</Button>
        <Link href={`/`}>Continue Shopping</Link>
      </Box>
    </Box>
  );
}

export default CartNotification;
