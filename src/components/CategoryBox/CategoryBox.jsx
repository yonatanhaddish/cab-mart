"use client";

import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";

function CategoryBox({ setSelectedCategory }) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // mobile
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // tablet
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); // small desktop
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl")); // desktop
  const isXl = useMediaQuery(theme.breakpoints.up("xl")); // wide desktop

  const styles = {
    category_parent: {
      // border: "solid red 2px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#F3EBDD",
      gap: "20px",
    },
    category_sub_parent: {
      // border: "solid green 2px",
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      margin: "0 auto",
      gap: isXs ? "50px" : isSm ? 0 : isMd ? "60px" : isXl ? "100px" : "100px",
      rowGap: isSm
        ? "50px"
        : isMd
        ? "50px"
        : isLg
        ? "50px"
        : isXl
        ? "50px"
        : "",
      paddingTop: "30px",
      paddingBottom: "50px",
      justifyContent: "space-around",
    },
    category_single: {
      // border: "solid blue 2px",
      height: isXs
        ? "280px"
        : isSm
        ? "360px"
        : isMd
        ? "350px"
        : isLg
        ? "160px"
        : isXl
        ? "160px"
        : "",
      width: isXs
        ? "90%"
        : isSm
        ? "38%"
        : isMd
        ? "30%"
        : isLg
        ? "34%"
        : isXl
        ? "30%"
        : "100%",
      margin: isXs || isSm ? "0 auto" : "",
      display: "flex",
      flexDirection: isXs || isSm || isMd ? "column" : "row",
      backgroundColor: "#14213d",
      // justifyContent: "center",
    },
    image_coffee: {
      backgroundImage: "url('/images/coffee_beans.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: isXs
        ? "35%"
        : isSm
        ? "40%"
        : isMd
        ? "40%"
        : isLg
        ? "100%"
        : isXl
        ? "100%"
        : "140px",
      width: isLg ? "30%" : isXl ? "30%" : "100%",
      margin: "0 auto",
    },
    image_perfume: {
      backgroundImage: "url('/images/perfume.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: isXs
        ? "35%"
        : isSm
        ? "40%"
        : isMd
        ? "40%"
        : isLg
        ? "100%"
        : isXl
        ? "100%"
        : "140px",
      width: isLg ? "30%" : isXl ? "30%" : "100%",
      margin: "0 auto",
    },
    image_pet_toy: {
      backgroundImage: "url('/images/pet_toy.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: isXs
        ? "35%"
        : isSm
        ? "40%"
        : isMd
        ? "40%"
        : isLg
        ? "100%"
        : isXl
        ? "100%"
        : "140px",
      width: isLg ? "30%" : isXl ? "30%" : "100%",
      margin: "0 auto",
    },
    image_furniture: {
      backgroundImage: "url('/images/furniture.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: isXs
        ? "35%"
        : isSm
        ? "40%"
        : isMd
        ? "40%"
        : isLg
        ? "100%"
        : isXl
        ? "100%"
        : "140px",
      width: isLg ? "30%" : isXl ? "30%" : "100%",
      margin: "0 auto",
    },
    info_box: {
      // border: "solid green 2px",
      height: isXs
        ? "65%"
        : isSm
        ? "60%"
        : isMd
        ? "60%"
        : isLg
        ? "100%"
        : isXl
        ? "100%"
        : "30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      textAlign: "center",
      width: isLg ? "70%" : isXl ? "70%" : "100%",
    },
    typo_name: {
      fontSize: isXs
        ? "1.6rem"
        : isSm
        ? "1.6rem"
        : isMd
        ? "1.6rem"
        : isLg
        ? "1.6rem"
        : isXl
        ? "1.4rem"
        : "",
      color: "#e5e5e5",
    },
    typo_desc: {
      color: "#e5e5e5",
      width: isXs
        ? "90%"
        : isSm
        ? "80%"
        : isMd
        ? "80%"
        : isLg
        ? "90%"
        : isXl
        ? "60%"
        : "100%",
      alignSelf: "center",
      fontSize: isLg ? "0.7rem" : "",
    },
    button_see_more: {
      border: "solid #14213d 1px",
      boxShadow: "0 0 10px #14213d",
      width: isXs
        ? "60%"
        : isSm
        ? "70%"
        : isMd
        ? "70%"
        : isLg
        ? "60%"
        : isXl
        ? "60%"
        : "100%",
      alignSelf: "center",
      backgroundColor: "#fca311",
      color: "#14213d",
    },
    typo_heading: {
      // border: "solid red 2px",
      width: "40%",
      fontSize: "1.6rem",
      justifySelf: "end",
      // paddingTop: "80px",
    },
  };

  const sendDataToProductComponent = (data) => {
    setSelectedCategory(data);
  };
  return (
    <Box sx={styles.category_parent} id="categories">
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
            ? "50%"
            : isSm
            ? "30%"
            : isMd
            ? "28%"
            : isLg
            ? "20%"
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
        Categories
      </Typography>
      <Box sx={styles.category_sub_parent}>
        <Box sx={styles.category_single}>
          <Box sx={styles.image_coffee}></Box>
          <Box sx={styles.info_box}>
            <Typography sx={styles.typo_name}>Coffee</Typography>
            <Typography sx={styles.typo_desc}>
              {" "}
              High-quality fresh green coffee beans and freshly roasted coffee
              beans
            </Typography>
            <Button
              sx={styles.button_see_more}
              onClick={() => sendDataToProductComponent(1)}
            >
              See More
            </Button>
          </Box>
        </Box>
        <Box sx={styles.category_single}>
          <Box sx={styles.image_perfume}></Box>
          <Box sx={styles.info_box}>
            <Typography sx={styles.typo_name}>Perfume</Typography>
            <Typography sx={styles.typo_desc}>
              {" "}
              Premium-quality perfumes offering a wide variety of captivating
              scentsy
            </Typography>
            <Button
              sx={styles.button_see_more}
              onClick={() => sendDataToProductComponent(4)}
            >
              See More
            </Button>
          </Box>
        </Box>
        <Box sx={styles.category_single}>
          <Box sx={styles.image_pet_toy}></Box>
          <Box sx={styles.info_box}>
            <Typography sx={styles.typo_name}>Pet Toy</Typography>
            <Typography sx={styles.typo_desc}>
              {" "}
              Durable and safe pet toys designed for endless fun and play
            </Typography>
            <Button
              sx={styles.button_see_more}
              onClick={() => sendDataToProductComponent(3)}
            >
              See More
            </Button>
          </Box>
        </Box>
        <Box sx={styles.category_single}>
          <Box sx={styles.image_furniture}></Box>
          <Box sx={styles.info_box}>
            <Typography sx={styles.typo_name}>Furniture</Typography>
            <Typography sx={styles.typo_desc}>
              {" "}
              High-quality, stylish furniture crafted for comfort and
              durability.
            </Typography>
            <Button
              sx={styles.button_see_more}
              onClick={() => sendDataToProductComponent(2)}
            >
              See More
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CategoryBox;
