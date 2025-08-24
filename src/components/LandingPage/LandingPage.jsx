"use client";

import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";

function LandingPageTest() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // mobile
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // tablet
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); // small desktop
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl")); // desktop
  const isXl = useMediaQuery(theme.breakpoints.up("xl")); // wide desktop

  const styles = {
    landing_page_parent: {
      // border: "solid red 2px",
      height: isXs
        ? "86vh"
        : isSm
        ? "92vh"
        : isMd
        ? "94vh"
        : isLg
        ? "93vh"
        : isXl
        ? "92vh"
        : "100vh",
      width: "100%",
      display: "flex",
      flexDirection: isXs || isSm || isMd ? "column" : "row-reverse",
      justifyContent: isXs || isSm || isMd ? "space-evenly" : "",
      backgroundColor: "#F3EBDD",
      alignItems: isLg || isXl ? "center" : "",
    },
    images_box: {
      // border: "solid green 2px",
      height: isXs
        ? "30%"
        : isSm
        ? "35%"
        : isMd
        ? "35%"
        : isLg
        ? "65%"
        : isXl
        ? "55%"
        : "",
      width:
        isSm || isXs || isMd ? "100%" : isLg ? "40%" : isXl ? "40%" : "100%",
      display: "flex",
      margin: "0 auto",
    },
    info_box_parent: {
      // border: "solid blue 2px",
      height: isXs
        ? "50%"
        : isSm
        ? "35%"
        : isMd
        ? "35%"
        : isLg
        ? "65%"
        : isXl
        ? "55%"
        : "",
      width:
        isSm || isXs || isMd ? "90%" : isLg ? "38%" : isXl ? "30%" : "100%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
    },
    single_image: {
      backgroundImage: "url('/images/orange_cab_01.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: isXs || isSm || isMd ? "100%" : "90%",
      width: "100%",
      margin: "0 auto",
      alignSelf: "center",
    },
    typo_heading: {
      // border: "solid green 2px",
      fontSize: isXs
        ? "2.2rem"
        : isSm
        ? "2.8rem"
        : isMd
        ? "2.8rem"
        : isLg
        ? "2.4rem"
        : isXl
        ? "2.8rem"
        : "",
      color: "#14213d",
    },
    typo_desc: {
      // border: "solid blue 2px",
      fontSize: isXs
        ? "1rem"
        : isSm
        ? "1.2rem"
        : isMd
        ? "1.4rem"
        : isLg
        ? "1.05rem"
        : isXl
        ? "1.4rem"
        : "",
      fontStyle: "italic",
    },
    button_box: {
      // border: "solid green 2px",
      display: "flex",
      justifyContent: "space-between",
      width: isXs
        ? "100%"
        : isSm
        ? "75%"
        : isMd
        ? "70%"
        : isLg
        ? "80%"
        : isXl
        ? "70%"
        : "100%",
      height: isXs
        ? "50px"
        : isSm
        ? "50px"
        : isMd
        ? "60px"
        : isLg
        ? "35px"
        : isXl
        ? "40px"
        : "",
    },
    button_start_shopping: {
      // border: "solid #fca311 1px",
      boxShadow: "0 0 10px #fca311",
      width: "40%",
      backgroundColor: "#fca311",
      color: "#14213d",
      fontSize: isMd ? "1.2rem" : "",
    },
    button_learn_more: {
      // border: "solid #14213d 1px",
      boxShadow: "0 0 10px #14213d",
      width: "40%",
      height: "100%",
      backgroundColor: "#14213d",
      color: "#e5e5e5",
      fontSize: isMd ? "1.2rem" : "",
    },
  };

  return (
    <Box sx={styles.landing_page_parent}>
      <Box sx={styles.images_box}>
        <Box sx={styles.single_image}></Box>
      </Box>
      <Box sx={styles.info_box_parent}>
        <Typography sx={styles.typo_heading}>
          Easy{" "}
          <span style={{ color: "#fca311", fontWeight: "bold" }}>Shopping</span>{" "}
          for your favourite Items while you
          <span style={{ color: "#fca311", fontWeight: "bold" }}> Ride</span> in
          a Cab
        </Typography>
        <Typography sx={styles.typo_desc}>
          Transform your commute into a shopping experience. Browse, buy, and
          have items delivered while you travel
        </Typography>
        <Box sx={styles.button_box}>
          <Button sx={styles.button_start_shopping}>Start Shopping</Button>
          <Button sx={styles.button_learn_more}>Learn More</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPageTest;
