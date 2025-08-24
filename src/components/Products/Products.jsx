"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Pagination,
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
  const [page, setPage] = useState(1);
  const [itemsPage, setItemsPage] = useState(5);
  // const itemsPerPage = 10;

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  // Pagination calculations
  const totalPages = Math.ceil(products.length / itemsPage);
  const startIndex = (page - 1) * itemsPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPage);

  // Fetch products
  useEffect(() => {
    setPage(1); // reset to page 1 when category changes
    fetchProducts();
  }, [value]);

  useEffect(() => {
    if (isXl) {
      setItemsPage(15);
    }
    if (isLg) {
      setItemsPage(12);
    }
    if (isMd) {
      setItemsPage(12);
    }
    if (isSm) {
      setItemsPage(10);
    }
    if (isXs) {
      setItemsPage(8);
    }
  });

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

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles = {
    products_parent: { backgroundColor: "#e5e5e5", padding: "20px" },
    tabs: {
      "& .MuiTabs-flexContainer": {
        flexWrap: "wrap",
        justifyContent: isLg || isXl ? "flex-start" : "space-around",
      },
      width: isXs || isSm ? "90%" : "100%",
      margin: "0 auto",
    },
    product_list_parent: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      rowGap: "50px",
      marginTop: "30px",
      // border: "solid red 2px",
      width: isLg ? "90%" : isXl ? "88%" : "100%",
      margin: "0 auto",
    },
    product_card: {
      textDecoration: "none",
      color: "inherit",
      border: "1px solid #14213d",
      boxShadow: "0 0 10px #14213d",
      backgroundColor: "#fca311",
      transition: "0.2s",
      height: isXs ? "380px" : isSm ? "340px" : isMd ? "300px" : "280px",
      width: isXs || isSm || isMd || isXl ? "280px" : "240px",
      borderRadius: "10px",
      overflow: "hidden",
    },
    product_img: {
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "50%",
      width: "100%",
    },
    product_info: {
      height: "50%",
      width: "92%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    typo_product_name: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#14213d",
    },
    typo_retail_price: {
      textDecoration: "line-through",
      color: "#555",
    },
    typo_our_price: {
      fontSize: "1.2rem",
      color: "red",
      fontWeight: "bold",
    },
  };

  return (
    <Box sx={styles.products_parent}>
      <Typography variant="h4" align="center" mb={3}>
        Products
      </Typography>

      {/* Tabs */}
      <Tabs value={value} onChange={handleTabChange} sx={styles.tabs} centered>
        <Tab label="Popular" icon={<WhatshotIcon />} iconPosition="end" />
        <Tab label="Coffee" icon={<CoffeeIcon />} iconPosition="end" />
        <Tab
          label="Furniture"
          icon={<TableRestaurantIcon />}
          iconPosition="end"
        />
        <Tab label="Pet Toys" icon={<PetsIcon />} iconPosition="end" />
        <Tab label="Perfume" icon={<LocalFloristIcon />} iconPosition="end" />
      </Tabs>

      {/* Category Title */}
      <Typography align="center" variant="h6" mt={3}>
        {(categoryMap[value] || "Popular Products").toUpperCase()}
      </Typography>

      {/* Product List */}
      <Box sx={styles.product_list_parent}>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : currentProducts.length > 0 ? (
          currentProducts.map((item, index) => (
            <Link
              key={index}
              href={`/product/${item._id}`}
              passHref
              style={styles.product_card}
            >
              <Box
                sx={styles.product_img}
                style={{
                  backgroundImage: `url(${
                    item.images?.[0] || "/no-image.png"
                  })`,
                }}
              />
              <Box sx={styles.product_info}>
                <Typography sx={styles.typo_product_name}>
                  {item.name}
                </Typography>
                <Typography>
                  {item.category} | {item.condition}
                </Typography>
                <Typography sx={styles.typo_retail_price}>
                  Retail: {item.retail_price} CAD
                </Typography>
                <Typography sx={styles.typo_our_price}>
                  {item.price} CAD
                </Typography>
              </Box>
            </Link>
          ))
        ) : (
          <Typography>No products available</Typography>
        )}
      </Box>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(e, value) => setPage(value)}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
}

export default Products;
