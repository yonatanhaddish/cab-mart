import React from "react";
import { Box, Typography, Tabs, Tab, Button } from "@mui/material";
import { text } from "stream/consumers";

const styles = {
  parent_single_product: {
    border: "1px solid #ccc",
    width: "90%",
    margin: "20px auto",
  },

  product_image_parent: {
    border: "solid blue 2px",
    height: "350px",
  },
  image_large: {
    border: "solid green 2px",
    height: "70%",
    width: "60%",
    margin: "0 auto",
  },
  images_small_parent: {
    // border: "solid orange 2px",
    height: "25%",
    width: "90%",
    margin: "0 auto",
    display: "flex",
    flexwrap: "wrap",
  },
  single_image: {
    border: "solid purple 2px",
    width: "100%",
    height: "100%",
  },
  typo_name: {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#14213d",
  },
  typo_retail_price: {
    fontSize: "1.1rem",
    fontWeight: "500",
    color: "red",
    textDecoration: "line-through",
  },
  typo_price: {
    fontSize: "1.4rem",
    fontWeight: "600",
    color: "green",
  },
  typo_condition: {
    fontSize: "1.2rem",
    fontWeight: "500",
    color: "#14213d",
  },
  typo_description: {
    fontSize: "1rem",
    fontWeight: "400",
    color: "#14213d",
  },
  footer_bar: {
    backgroundColor: "rgba(249, 115, 22, 0.8)",
    position: "sticky",
    bottom: "0",
    zIndex: 1000,
  },
  image_parent: {
    // border: "solid red 2px",
    width: "60%",
    height: "50px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button_add_to_cart: {
    // border: "solid black 2px",
    backgroundColor: "#14213d",
    color: "#e0e0e0",
    fontWeight: "600",
    width: "25%",
    height: "70%",
    opacity: "100%",
  },
  product_info: {
    // border: "solid orange 2px",
    width: "90%",
    margin: "20px auto",
  },
};

async function getSingleProduct(id) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch product data");
  }

  return res.json();
}

async function page({ params }) {
  params = await params;
  const { id } = params;

  const product = await getSingleProduct(id);

  console.log("Single Product Data:", product);

  return (
    <Box sx={styles.parent_single_product}>
      <Box>
        <Box sx={styles.product_image_parent}>
          <Box sx={styles.image_large}></Box>
          <Box sx={styles.images_small_parent}>
            <Box sx={styles.single_image}></Box>
            <Box sx={styles.single_image}></Box>{" "}
            <Box sx={styles.single_image}></Box>
            <Box sx={styles.single_image}></Box>{" "}
            <Box sx={styles.single_image}></Box>
            <Box sx={styles.single_image}></Box>{" "}
            <Box sx={styles.single_image}></Box>
            <Box sx={styles.single_image}></Box>{" "}
            <Box sx={styles.single_image}></Box>
            <Box sx={styles.single_image}></Box>
          </Box>
        </Box>
        <Box sx={styles.product_info}>
          <Typography sx={styles.typo_name}>{product.name}</Typography>
          <Typography sx={styles.typo_retail_price}>
            Retail Price: {product.retail_price} CAD
          </Typography>
          <Typography sx={styles.typo_price}>
            Price:{product.price} CAD
          </Typography>
          <Typography sx={styles.typo_condition}>
            Condition: {product.condition}
          </Typography>
          <Typography sx={styles.typo_description}>
            {product.description}
            {product.description}
            {product.description}
            {product.description}
            {product.description}
            {product.description}
            {product.description}
            {product.description}
            {product.description}
            {product.description}
            {product.description}
            {product.description}
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.footer_bar}>
        <Box sx={styles.image_parent}>
          <Button sx={styles.button_add_to_cart}>Add to Cart</Button>
          <Button sx={styles.button_add_to_cart}>Buy Now</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default page;
