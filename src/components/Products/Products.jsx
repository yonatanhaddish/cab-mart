"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
} from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import CoffeeIcon from "@mui/icons-material/Coffee";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import PetsIcon from "@mui/icons-material/Pets";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

const categoryMap = {
  0: "",
  1: "Coffee",
  2: "Furniture",
  3: "Pet Toy",
  4: "Perfume",
};
function Products() {
  const [value, setValue] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // mobile
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // tablet
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); // small desktop
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl")); // desktop
  const isXl = useMediaQuery(theme.breakpoints.up("xl")); // wide desktop

  const styles = {
    products_parent: {
      // border: "solid green 2px",
      backgroundColor: "#e5e5e5",
    },
    product_list_parent: {
      // border: "solid red 2px",
    },
    tab_parent: {
      // border: "solid blue 2px",
    },
    tabs: {
      "& .MuiTabs-flexContainer": {
        flexWrap: "wrap",
        justifyContent: isLg || isXl ? "flex-start" : "space-around",
      },
      width: isXs
        ? "90%"
        : isSm
        ? "90%"
        : isMd
        ? "80%"
        : isLg
        ? "100%"
        : isXl
        ? "100%"
        : "30%",
      // border: "solid red 2px",
      margin: "0 auto",
    },
    category_title: {
      // border: "solid red 2px",
      fontSize: "1.3rem",
    },
    single_tab: {
      // border: "solid green 2px",
      width: isXs
        ? "50%"
        : isSm
        ? "40%"
        : isMd
        ? "35%"
        : isLg
        ? "14%"
        : isXl
        ? "10%"
        : "100%",
    },
    product_list_parent: {
      // border: "solid purple 2px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: isMd || isLg || isXl ? "space-evenly" : "space-around",
      rowGap: isXs
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
      columnGap: isMd ? "100px" : isLg ? "70px" : isXl ? "70px" : "",
      width: isLg ? "96%" : isXl ? "96%" : "100%",
      margin: "0 auto",
    },
    heading_name: {
      // border: "solid green 2px",
    },
    single_product: {
      // border: "solid yellow 2px",
    },
    product_list: {
      height: "100%",
      width: "100%",
    },
    product_img: {
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "50%",
      width: "100%",
    },
    product_info: {
      // border: "solid green 2px",
      height: "50%",
      width: isXs || isSm || isMd || isLg ? "92%" : isXl ? "92%" : "100%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    typo_product_name: {
      fontSize: isXs || isSm || isMd || isLg || isXl ? "1.2rem" : "",
      fontWeight: "bold",
      color: "#14213d",
    },
    typo_product_cagetory: {
      fontStyle: "italic",
    },
    typo_retail_price: {
      textDecoration: "line-through",
    },
    typo_our_price: {
      fontSize: isXs || isSm || isMd || isLg | isXl ? "1.2rem" : "",
      color: "red",
      fontSize: isXs || isSm || isMd || isLg || isXl ? "1.2rem" : "",
    },
  };

  useEffect(() => {
    fetchProducts();
  }, [value]);

  async function fetchProducts() {
    setLoading(true);
    try {
      const category = categoryMap[value];
      let url = "/api/products";
      if (category) url += `?category=${encodeURIComponent(category)}`;

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }
  console.log("555", products);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={styles.products_parent}>
      <Typography sx={styles.heading_name}>Products</Typography>
      <Box sx={styles.products_body}>
        <Box sx={styles.tab_parent}>
          <Tabs value={value} onChange={handleChange} sx={styles.tabs}>
            <Tab
              label="Popular Products"
              icon={<WhatshotIcon />}
              iconPosition="end"
              sx={styles.single_tab}
            />
            <Tab
              label="Coffee"
              icon={<CoffeeIcon />}
              iconPosition="end"
              sx={styles.single_tab}
            />
            <Tab
              label="Furniture"
              icon={<TableRestaurantIcon />}
              iconPosition="end"
              sx={styles.single_tab}
            />
            <Tab
              label="Pet Toys"
              icon={<PetsIcon />}
              iconPosition="end"
              sx={styles.single_tab}
            />
            <Tab
              label="Perfume"
              icon={<LocalFloristIcon />}
              iconPosition="end"
              sx={styles.single_tab}
            />
          </Tabs>
        </Box>
        <Box sx={styles.category_title}>
          {(categoryMap[value]
            ? categoryMap[value]
            : "Popular Products"
          ).toUpperCase()}
        </Box>
        {value === 0 && (
          <Box sx={styles.product_list_parent}>
            {products.length > 0 ? (
              products.map((item, index) => (
                <Link
                  key={index}
                  href={`/product/${item._id}`}
                  passHref
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    border: "solid #14213d  1px",
                    boxShadow: "0 0 10px #14213d",
                    height: isXs
                      ? "380px"
                      : isSm
                      ? "340px"
                      : isMd
                      ? "300px"
                      : isLg
                      ? "280px"
                      : isXl
                      ? "320px"
                      : "",
                    width: isXs
                      ? "280px"
                      : isSm
                      ? "280px"
                      : isMd
                      ? "280px"
                      : isLg
                      ? "220px"
                      : isXl
                      ? "220px"
                      : "",
                    backgroundColor: "#fca311",
                  }}
                >
                  <Box sx={styles.product_list}>
                    <Box
                      sx={{
                        ...styles.product_img,
                        backgroundImage: `url(${
                          item.images?.[0] || "/no-image.png"
                        })`, // fallback if no image
                      }}
                    />
                    <Box sx={styles.product_info}>
                      <Typography sx={styles.typo_product_name}>
                        {item.name}
                      </Typography>
                      <Typography sx={styles.typo_product_cagetory}>
                        {item.category} | {item.condition}
                      </Typography>
                      <Typography sx={styles.typo_retail_price}>
                        Retail Price: {item.retail_price} CAD
                      </Typography>
                      <Typography sx={styles.typo_our_price}>
                        {item.price} CAD
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              ))
            ) : (
              <Typography
                sx={{
                  textAlign: "center",
                  mt: 8,
                  color: "gray",
                  height: "20vh",
                }}
              >
                No products available
              </Typography>
            )}
          </Box>
        )}
        {value === 1 && (
          <Box sx={styles.product_list_parent}>
            {products.length > 0 ? (
              products.map((item, index) => (
                <Link
                  key={index}
                  href={`/product/${item._id}`}
                  passHref
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box sx={styles.product_list}>
                    <Box
                      sx={{
                        ...styles.product_img,
                        backgroundImage: `url(${
                          item.images?.[0] || "/no-image.png"
                        })`, // fallback if no image
                      }}
                    />
                    <Box sx={styles.product_info}>
                      <Typography sx={styles.typo_product_name}>
                        {item.name}
                      </Typography>
                      <Typography sx={styles.typo_retail_price}>
                        Retail Price: {item.retail_price} CAD
                      </Typography>
                      <Typography sx={styles.typo_our_price}>
                        {item.price} CAD
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              ))
            ) : (
              <Typography
                sx={{
                  textAlign: "center",
                  mt: 8,
                  color: "gray",
                  height: "20vh",
                }}
              >
                No coffee product available at the moment
              </Typography>
            )}
          </Box>
        )}
        {value === 2 && (
          <Box sx={styles.product_list_parent}>
            {products.length > 0 ? (
              products.map((item, index) => (
                <Link
                  key={index}
                  href={`/product/${item._id}`}
                  passHref
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box sx={styles.product_list}>
                    <Box
                      sx={{
                        ...styles.product_img,
                        backgroundImage: `url(${
                          item.images?.[0] || "/no-image.png"
                        })`,
                      }}
                    />
                    <Box sx={styles.product_info}>
                      <Typography sx={styles.typo_product_name}>
                        {item.name}
                      </Typography>
                      <Typography sx={styles.typo_retail_price}>
                        Retail Price: {item.retail_price} CAD
                      </Typography>
                      <Typography sx={styles.typo_our_price}>
                        {item.price} CAD
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              ))
            ) : (
              <Typography
                sx={{
                  textAlign: "center",
                  mt: 8,
                  color: "gray",
                  height: "20vh",
                }}
              >
                No furniture available at the moment
              </Typography>
            )}
          </Box>
        )}
        {value === 3 && (
          <Box sx={styles.product_list_parent}>
            {products.length > 0 ? (
              products.map((item, index) => (
                <Link
                  key={index}
                  href={`/product/${item._id}`}
                  passHref
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box sx={styles.product_list}>
                    <Box
                      sx={{
                        ...styles.product_img,
                        backgroundImage: `url(${
                          item.images?.[0] || "/no-image.png"
                        })`, // fallback if no image
                      }}
                    />
                    <Box sx={styles.product_info}>
                      <Typography sx={styles.typo_product_name}>
                        {item.name}
                      </Typography>
                      <Typography sx={styles.typo_retail_price}>
                        Retail Price: {item.retail_price} CAD
                      </Typography>
                      <Typography sx={styles.typo_our_price}>
                        {item.price} CAD
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              ))
            ) : (
              <Typography
                sx={{
                  textAlign: "center",
                  mt: 8,
                  color: "gray",
                  height: "20vh",
                }}
              >
                No pet toys available at the moment
              </Typography>
            )}
          </Box>
        )}
        {value === 4 && (
          <Box sx={styles.product_list_parent}>
            {products.length > 0 ? (
              products.map((item, index) => (
                <Link
                  key={index}
                  href={`/product/${item._id}`}
                  passHref
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box sx={styles.product_list}>
                    <Box
                      sx={{
                        ...styles.product_img,
                        backgroundImage: `url(${
                          item.images?.[0] || "/no-image.png"
                        })`, // fallback if no image
                      }}
                    />
                    <Box sx={styles.product_info}>
                      <Typography sx={styles.typo_product_name}>
                        {item.name}
                      </Typography>
                      <Typography sx={styles.typo_retail_price}>
                        Retail Price: {item.retail_price} CAD
                      </Typography>
                      <Typography sx={styles.typo_our_price}>
                        {item.price} CAD
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              ))
            ) : (
              <Typography
                sx={{
                  textAlign: "center",
                  mt: 8,
                  color: "gray",
                  height: "20vh",
                }}
              >
                No perfume available at the moment
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Products;
