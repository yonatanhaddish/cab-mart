"use client";

import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
function Services() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // mobile
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // tablet
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); // small desktop
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl")); // desktop
  const isXl = useMediaQuery(theme.breakpoints.up("xl")); // wide desktop

  const styles = {
    service_parent: {
      // border: "solid red 2px",
      display: "flex",
      flexDirection: isXs || isSm || isMd || isLg || isXl ? "column" : "row",
      backgroundColor: "#e5e5e5",
      gap: "50px",
    },
    parent_cards: {
      // border: "solid green 2px",
      display: "flex",
      flexDirection: isXs || isSm ? "column" : "row",
      gap: isXs ? "50px" : isSm ? "20px" : isMd ? "40px" : "",
      width: isXl || isMd ? "90%" : "100%",
      margin: "0 auto",
    },
    card_box: {
      border: "solid #14213d 2px",
      boxShadow: "0 0 10px #14213d",
      width: isXs
        ? "75%"
        : isSm
        ? "80%"
        : isMd
        ? "70%"
        : isLg
        ? "22%"
        : isXl
        ? "18%"
        : "100%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: isXs
        ? "400px"
        : isSm
        ? "250px"
        : isMd
        ? "250px"
        : isLg
        ? "300px"
        : isXl
        ? "340px"
        : "",
      justifyContent: "space-around",
      backgroundColor: "white",
    },

    typo_heading: {
      fontSize: isXs
        ? "1.5rem"
        : isSm
        ? "1.6rem"
        : isMd
        ? "1.6rem"
        : isLg
        ? "1.5rem"
        : isXl
        ? "1.6rem"
        : "",
      fontWeight: "bold",
      color: "#fca311",
    },
    typo_box: {
      textAlign: "center",
      width: "90%",
      fontStyle: "italic",
      color: "#14213d",
      fontWeight: "bold",
    },
  };
  return (
    <Box sx={styles.service_parent}>
      <Typography
        style={{
          fontFamily: "Karma, sans-serif",
          borderBottom: "solid #14213d 2px",
          // backgroundColor: "#fca311",
          fontSize: isXs
            ? "2.0rem"
            : isSm
            ? "2.0rem"
            : isMd
            ? "2.2rem"
            : isLg
            ? "1.8rem"
            : isXl
            ? "1.8rem"
            : "",
          width: isXs
            ? "60%"
            : isSm
            ? "32%"
            : isMd
            ? "30%"
            : isLg
            ? "22%"
            : isXl
            ? "15%"
            : "",
          display: "flex",
          justifyContent: "center",
          justifySelf: "end",
          color: "#14213d",
          marginRight: isXs
            ? "10%"
            : isSm
            ? "10%"
            : isMd
            ? "10%"
            : isLg
            ? "10%"
            : isXl
            ? "10%"
            : "",
          paddingTop: isXs
            ? "50px"
            : isSm
            ? "50px"
            : isMd
            ? "50px"
            : isLg
            ? "50px"
            : isXl
            ? "50px"
            : "",
          alignSelf: "end",
          // border: "solid red 2px",
        }}
      >
        Why Choose Us
      </Typography>
      <Box sx={styles.parent_cards}>
        <Box sx={styles.card_box}>
          <LocalShippingIcon
            sx={{
              fontSize: "4rem",
              backgroundColor: "#fca311",
              borderRadius: "60px",
              color: "#14213d",
              border: "solid #14213d 1px",
              boxShadow: "0 0 10px #14213d",
            }}
          />
          <Typography sx={styles.typo_heading}>Free Delivery</Typography>
          <Typography sx={styles.typo_box}>
            Enjoy free delivery on orders over 100 CAD. No extra charges, just
            convenience
          </Typography>
        </Box>
        <Box sx={styles.card_box}>
          <AttachMoneyIcon
            sx={{
              fontSize: "4rem",
              backgroundColor: "#fca311",
              borderRadius: "60px",
              color: "#14213d",
              border: "solid #14213d 1px",
              boxShadow: "0 0 10px #14213d",
            }}
          />
          <Typography sx={styles.typo_heading}>Best Prices</Typography>
          <Typography sx={styles.typo_box}>
            High-quality products with discounts of over 50%. Premium items at
            unbeatable prices
          </Typography>
        </Box>
        <Box sx={styles.card_box}>
          <InventoryIcon
            sx={{
              fontSize: "4rem",
              backgroundColor: "#fca311",
              borderRadius: "60px",
              color: "#14213d",
              border: "solid #14213d 1px",
              boxShadow: "0 0 10px #14213d",
            }}
          />
          <Typography sx={styles.typo_heading}>Always Updated</Typography>
          <Typography sx={styles.typo_box}>
            We refresh our inventory every day to bring you the latest products
            and ensure nothing stays out of stock for long
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Services;
