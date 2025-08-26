"use client";

import React, { useEffect, useState, use } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Drawer, useMediaQuery } from "@mui/material";

import useCart from "../../../utils/useCart";
import AddToCartButtons from "../[id]/AddToCartButton";
import CartNotification from "../../../components/CartNotification/CartNotification";

export default function ProductPage({ params }) {
  const [openModal, setOpenModal] = useState(false);
  const { id } = use(params);
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("/images/furniture.jpeg");

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // mobile
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // tablet
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); // small desktop
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl")); // desktop
  const isXl = useMediaQuery(theme.breakpoints.up("xl")); // wide desktop

  const styles = {
    parent_single_product: {
      // border: "solid green 2px",
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    sub_parent_single_product: {
      // border: "solid yellow 2px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "650px",
    },
    product_image_parent: {
      // border: "solid blue 2px",
      height: "400px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "10px",
    },
    image_large: {
      height: "45%",
      width: isXs ? "96%" : "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      margin: isXs ? "0 auto" : "",
      // border: "solid red 2px",
    },
    images_small_parent: {
      // border: "solid purple 2px",
      height: "45%",
      display: "flex",
      alignContent: "space-around",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    single_image: {
      // border: "solid blue 1px",
      height: "80px",
      width: "80px",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    product_info: {
      // border: "solid purple 2px",
      display: "flex",
      flexDirection: "column",
      width: "96%",
      // minHeight: "300px",
      margin: "0 auto",
      justifyContent: "space-betweeen",
      gap: "5px",
    },
    typo_name: {
      fontSize: isXs ? "2rem" : "",
      fontWeight: 500,
    },
    typo_retail_price: {
      color: "rgba(0, 0, 0, 0.6)",
      textDecoration: "line-through",
    },
    typo_price: {
      fontSize: "1.4rem",
      color: "red",
    },
    typo_condition: {
      color: "rgba(0, 0, 0, 0.6)",
    },
    typo_description: {
      maxWidth: "100%", // stays inside parent
      wordWrap: "break-word", // breaks long words
      overflowWrap: "break-word",
      whiteSpace: "normal", // allows wrapping
    },
    typo_category: {
      backgroundColor: "#fca311",
      // border: "solid red 2px",
      width: isXs ? "30%" : "100%",
      height: isXs ? "35px" : "",
      textAlign: "center",
      alignContent: "center",
      borderRadius: "20px",
      fontWeight: "bold",
      color: "#14213d",
    },
    footer_bar: {
      // border: "solid blue 2px",
      position: "sticky",
      bottom: 0,
      backgroundColor: "#fca311",
    },
    cart_navbar: {
      // border: "solid green 2px",
      height: "40px",
      width: "100%",
      backgroundColor: "#14213d",
    },
  };

  // fetch product on client side
  useEffect(() => {
    async function getSingleProduct() {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const res = await fetch(`${baseUrl}/api/products/${id}`);
      const data = await res.json();
      setProduct(data);

      if (data?.images?.length > 0) {
        setMainImage(data.images[0]);
      }
    }
    getSingleProduct();
  }, [id]);
  // console.log("555", product.images[0]);

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
    <Box>
      <Box sx={styles.cart_navbar}></Box>
      <Box sx={styles.parent_single_product}>
        <Box style={styles.sub_parent_single_product}>
          <Drawer
            anchor="top"
            open={openModal}
            onClose={handleDataFromCartNotificationPage}
            PaperProps={{
              sx: {
                // border: "solid red 3px",
                width: "100%",
                height: "100px",
                justifySelf: isXs ? "center" : "",
              },
            }}
          >
            <CartNotification
              product={product}
              passDataToProductPage={handleDataFromCartNotificationPage}
            />
          </Drawer>
          <Box sx={styles.product_image_parent}>
            <Box
              sx={{
                ...styles.image_large,
                backgroundImage: `url(${mainImage})`,
              }}
            ></Box>
            <Box sx={styles.images_small_parent}>
              {Array.from({ length: 10 }).map((_, i) => {
                const img = product.images?.[i]; // real image if exists
                return (
                  <Box
                    key={i}
                    sx={{
                      ...styles.single_image,
                      backgroundImage: img ? `url(${img})` : "none",
                      backgroundColor: img ? "transparent" : "#e0e0e0", // placeholder color
                      border: img ? "none" : "1px dashed #999", // dashed border for empty slots
                      cursor: img ? "pointer" : "default",
                    }}
                    onClick={() => img && setMainImage(img)} // only clickable if image exists
                  />
                );
              })}
            </Box>
          </Box>
          <Box sx={styles.product_info}>
            <Typography sx={styles.typo_category}>
              {product.category}
            </Typography>
            <Typography sx={styles.typo_name}>{product.name}</Typography>
            <Typography sx={styles.typo_retail_price}>
              Retail Price: {product.retail_price} CAD
            </Typography>
            <Typography sx={styles.typo_price}>{product.price} CAD</Typography>
            <Typography sx={styles.typo_condition}>
              Condition:{" "}
              <span style={{ fontWeight: "bold", color: "#000" }}>
                {product.condition}
              </span>
            </Typography>
            <Typography sx={styles.typo_description}>
              {product.description.repeat(10)}
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
    </Box>
  );
}
