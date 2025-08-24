"use client";

import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";

function AboutUs() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // mobile
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // tablet
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); // small desktop
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl")); // desktop
  const isXl = useMediaQuery(theme.breakpoints.up("xl")); // wide desktop

  const styles = {
    aboutUs_parent: {
      // border: "2px solid blue",
      width: "100%",
      height: isXl
        ? "25vh"
        : isXs
        ? "40vh"
        : isSm
        ? "28vh"
        : isMd
        ? "25vh"
        : isLg
        ? "36vh"
        : "",
      backgroundColor: "#fca311",
      display: "flex",
    },
    typography: {
      fontSize: isXs
        ? "1.2rem"
        : isSm
        ? "1.2rem"
        : isMd
        ? "1.3rem"
        : isLg
        ? "1.1rem"
        : isXl
        ? "1.2rem"
        : "",
      textAlign: "center",
      // border: "solid red 2px",
      width: isXs
        ? "75%"
        : isSm
        ? "65%"
        : isMd
        ? "60%"
        : isLg
        ? "60%"
        : isXl
        ? "50%"
        : "",
      margin: "0 auto",
      // paddingTop: "50px",
      // paddingBottom: "50px",
      fontWeight: "bold",
      color: "#14213d",
      alignSelf: "center",
    },
  };
  return (
    <Box sx={styles.aboutUs_parent}>
      <Typography sx={styles.typography}>
        We bring you quality furniture, delightful perfumes, and fun pet toys,
        and many more all at unbeatable prices. Shop right from your cab and
        enjoy exclusive deals while you ride. With fast delivery and trusted
        sellers, we make shopping as easy as your trip.
      </Typography>
    </Box>
  );
}

export default AboutUs;
