"use client";

import React, { useEffect, useState, use } from "react";
import { Box, Typography, Drawer } from "@mui/material";

import useCart from "../../../utils/useCart";
import AddToCartButtons from "../[id]/AddToCartButton";
import CartNotification from "../../../components/CartNotification/CartNotification";

const styles = {
  parent_single_product: { width: "90%", margin: "20px auto" },
  product_image_parent: {
    height: "350px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  image_large: {
    height: "70%",
    width: "60%",
    margin: "0 auto",
    backgroundImage: "url('/images/furniture.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  images_small_parent: {
    height: "25%",
    width: "90%",
    margin: "0 auto",
    display: "flex",
    flexwrap: "wrap",
  },
  single_image: { border: "solid #ccc 2px", width: "100%", height: "100%" },
  typo_name: { fontSize: "1.8rem", fontWeight: "600", color: "#14213d" },
  typo_retail_price: {
    fontSize: "1.1rem",
    fontWeight: "500",
    color: "red",
    textDecoration: "line-through",
  },
  typo_price: { fontSize: "1.4rem", fontWeight: "600", color: "green" },
  typo_condition: { fontSize: "1.2rem", fontWeight: "500", color: "#14213d" },
  typo_description: { fontSize: "1rem", fontWeight: "400", color: "#14213d" },
  footer_bar: {
    backgroundColor: "rgba(249, 115, 22, 0.8)",
    position: "sticky",
    bottom: "0",
    zIndex: 1000,
  },
  image_parent: {
    width: "60%",
    height: "50px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button_add_to_cart: {
    backgroundColor: "#14213d",
    color: "#e0e0e0",
    fontWeight: "600",
    width: "25%",
    height: "70%",
    opacity: "100%",
  },
  product_info: { width: "90%", margin: "20px auto" },
  cart_notification: {},
};

export default function ProductPage({ params }) {
  const [openModal, setOpenModal] = useState(false);
  const { id } = use(params);
  const [product, setProduct] = useState(null);

  // fetch product on client side
  useEffect(() => {
    async function getSingleProduct() {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const res = await fetch(`${baseUrl}/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }
    getSingleProduct();
  }, [id]);

  function handleDataFromAddToCartPage() {
    setOpenModal(true);
    setTimeout(() => setOpenModal(false), 5000);
  }
  function handleDataFromCartNotificationPage() {
    setOpenModal(false);
  }

  console.log("openModal", openModal);

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={styles.parent_single_product}>
      <Box>
        <Drawer
          anchor="top"
          open={openModal}
          onClose={handleDataFromCartNotificationPage}
          PaperProps={{
            sx: {
              // border: "solid red 3px",
              width: "30%",
              height: "200px",
              justifySelf: "end",
            },
          }}
        >
          <CartNotification
            product={product}
            passDataToProductPage={handleDataFromCartNotificationPage}
          />
        </Drawer>
        <Box sx={styles.product_image_parent}>
          <Box sx={styles.image_large}></Box>
          <Box sx={styles.images_small_parent}>
            {Array.from({ length: 10 }).map((_, i) => (
              <Box key={i} sx={styles.single_image}></Box>
            ))}
          </Box>
        </Box>
        <Box sx={styles.product_info}>
          <Typography sx={styles.typo_name}>{product.name}</Typography>
          <Typography sx={styles.typo_retail_price}>
            Retail Price: {product.retail_price} CAD
          </Typography>
          <Typography sx={styles.typo_price}>
            Price: {product.price} CAD
          </Typography>
          <Typography sx={styles.typo_condition}>
            Condition: {product.condition}
          </Typography>
          <Typography sx={styles.typo_description}>
            {product.description.repeat(12)}
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.footer_bar}>
        <AddToCartButtons
          product={product}
          passDataToProductPage={handleDataFromAddToCartPage}
        />
      </Box>
    </Box>
  );
}
