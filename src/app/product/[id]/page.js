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
      flexDirection: isLg || isXl ? "row" : "column",
      justifyContent: isLg ? "" : "space-between",
      minHeight: isLg || isXl ? "" : "650px",
      marginTop: isXs ? "" : isSm || isMd || isLg || isXl ? "20px" : "",
    },
    product_image_parent: {
      // border: "solid blue 2px",
      height:
        isXs || isSm
          ? "400px"
          : isMd
          ? "600px"
          : isLg
          ? "400px"
          : isXl
          ? "400px"
          : "",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "10px",
      width: isLg || isXl ? "40%" : "100%",
      margin: isLg ? "0 auto" : "",
      marginTop: isLg || isXl ? "20px" : "",
    },
    image_large: {
      height: isXs
        ? "45%"
        : isSm
        ? "80%"
        : isMd
        ? "60%"
        : isLg
        ? "60%"
        : isXl
        ? "60%"
        : "",
      width: isXs
        ? "96%"
        : isSm
        ? "50%"
        : isMd
        ? "50%"
        : isLg
        ? "80%"
        : isXl
        ? "60%"
        : "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      margin: isXs || isSm || isMd || isLg || isXl ? "0 auto" : "",
      // border: "solid red 2px",
    },
    images_small_parent: {
      // border: "solid purple 2px",
      height: isXs
        ? "45%"
        : isSm
        ? "60%"
        : isMd
        ? "40%"
        : isLg
        ? "30%"
        : isXl
        ? "30%"
        : "",
      width: isXs
        ? "100%"
        : isSm
        ? "90%"
        : isMd
        ? "80%"
        : isLg
        ? "450px"
        : isXl
        ? "450px"
        : "100%",
      display: "flex",
      alignContent: "space-around",
      justifyContent: isXs || isMd || isLg || isXl ? "center" : isSm ? "" : "",
      flexWrap: "wrap",
      margin: isXs || isSm || isMd || isLg || isXl ? "0 auto" : "",
    },
    single_image: {
      // border: "solid blue 1px",
      height:
        isXs || isSm ? "80px" : isMd ? "45%" : isLg ? "50%" : isXl ? "55%" : "",
      width:
        isXs || isSm
          ? "80px"
          : isMd
          ? "140px"
          : isLg
          ? "80px"
          : isXl
          ? "80px"
          : "",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    product_info: {
      // border: "solid purple 2px",
      display: "flex",
      flexDirection: "column",
      width: isXs
        ? "92%"
        : isSm
        ? "90%"
        : isMd
        ? "90%"
        : isLg
        ? "50%"
        : isXl
        ? "50%"
        : "100%",
      // minHeight: "300px",
      margin: "0 auto",
      justifyContent: "space-betweeen",
      gap: "5px",
    },
    typo_name: {
      fontSize: isXs
        ? "2.2rem"
        : isSm
        ? "2.4rem"
        : isMd
        ? "2.6rem"
        : isLg
        ? "2.6rem"
        : isXl
        ? "2.6rem"
        : "",
      fontWeight: 500,
      color: "#14213d",
    },
    typo_retail_price: {
      color: "rgba(0, 0, 0, 0.6)",
      textDecoration: "line-through",
      fontSize: isXs
        ? "1.2rem"
        : isSm
        ? "1.3rem"
        : isMd
        ? "1.3rem"
        : isLg
        ? "1.0rem"
        : isXl
        ? "1.0rem"
        : "1.2rem",
    },
    typo_price: {
      fontSize: isXs
        ? "1.4rem"
        : isSm
        ? "1.5rem"
        : isMd
        ? "1.6rem"
        : isLg
        ? "1.6rem"
        : isXl
        ? "1.6rem"
        : "",
      color: "red",
    },
    typo_condition: {
      color: "rgba(0, 0, 0, 0.6)",
      fontSize: isXs
        ? "1.2rem"
        : isSm
        ? "1.3rem"
        : isMd
        ? "1.3rem"
        : isLg
        ? "1.0rem"
        : isXl
        ? "1.0rem"
        : "1.2rem",
    },
    typo_description: {
      maxWidth: "100%",
      wordWrap: "break-word",
      overflowWrap: "break-word",
      whiteSpace: "normal",
      width: isLg || isXl ? "85%" : "100%",
    },
    typo_category: {
      backgroundColor: "#fca311",
      // border: "solid red 2px",
      width: isXs
        ? "30%"
        : isSm
        ? "20%"
        : isMd
        ? "20%"
        : isLg
        ? "20%"
        : isXl
        ? "20%"
        : "100%",
      height:
        isXs || isSm
          ? "30px"
          : isMd
          ? "45px"
          : isLg
          ? "25px"
          : isXl
          ? "25px"
          : "",
      textAlign: "center",
      alignContent: "center",
      borderRadius: "20px",
      fontWeight: "bold",
      color: "#14213d",
      marginTop: "20px",
      fontSize: isXs
        ? "1.2rem"
        : isSm
        ? "1.3rem"
        : isMd
        ? "1.3rem"
        : isLg
        ? "1.0rem"
        : "1.2rem",
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
                // border: "solid blue 10px",
                width: isXs
                  ? "100%"
                  : isSm
                  ? "60%"
                  : isMd
                  ? "60%"
                  : isLg
                  ? "40%"
                  : isXl
                  ? "30%"
                  : "100%",
                height: isXs
                  ? "110px"
                  : isSm
                  ? "120px"
                  : isMd
                  ? "160px"
                  : isLg
                  ? "120px"
                  : isXl
                  ? "110px"
                  : "400px",
                justifySelf: "center",
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
              {product.description.repeat(100)}
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
