"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Typography, Tabs, Tab, Button } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import CoffeeIcon from "@mui/icons-material/Coffee";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import PetsIcon from "@mui/icons-material/Pets";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

const styles = {
  products_parent: {
    // border: "2px solid blue",
  },
  products_body: {
    // border: "2px solid green",
  },
  product_list_parent: {
    // border: "2px solid green",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    rowGap: "50px",
    width: "93%",
  },
  product_list: {
    // border: "solid #14213d 1px",
    boxShadow: "0 0 10px #f97316",
    width: "300px",
    height: "320px",
    display: "flex",
    flexDirection: "column",
  },
  product_img: {
    width: "100%",
    height: "100px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: "url('/images/furniture.jpeg')",
    height: "60%",
  },
  product_info: {
    height: "40%",
    backgroundColor: "#f97316",
    color: "#14213d",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    borderBottom: "solid #14213d 20px",
  },
  typo_product_name: {
    fontSize: "1.2rem",
    fontWeight: "500",
    width: "94%",
    margin: "0 auto",
  },
  typo_retail_price: {
    fontSize: "1.1rem",
    // fontWeight: "400",
    textDecoration: "line-through",
    width: "94%",
    margin: "0 auto",
    color: "#e0e0e0",
    textAlign: "end",
  },
  typo_our_price: {
    fontSize: "1.4rem",
    fontWeight: "500",
    color: "red",
    width: "90%",
    margin: "0 auto",
  },
  caterory_title: {
    backgroundColor: "#14213d",
    width: "30%",
    fontSize: "1.6rem",
    textAlign: "center",
    margin: "20px 70px",
    justifySelf: "end",
    color: "#fff",
  },
};

const categoryMap = {
  0: "",
  1: "coffee",
  2: "furniture",
  3: "pet toys",
  4: "perfume",
};
function Products() {
  const [value, setValue] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={styles.products_parent}>
      <Typography
        variant="h4"
        component="div"
        sx={{ textAlign: "center", margin: "20px 0" }}
      >
        Products
      </Typography>
      <Box sx={styles.products_body}>
        <Box>
          <Tabs value={value} onChange={handleChange}>
            <Tab
              label="Popular Products"
              icon={<WhatshotIcon />}
              iconPosition="end"
            />
            <Tab label="Coffee" icon={<CoffeeIcon />} iconPosition="end" />
            <Tab
              label="Furniture"
              icon={<TableRestaurantIcon />}
              iconPosition="end"
            />
            <Tab label="Pet Toys" icon={<PetsIcon />} iconPosition="end" />
            <Tab
              label="Perfume"
              icon={<LocalFloristIcon />}
              iconPosition="end"
            />
          </Tabs>
        </Box>
        <Box sx={styles.caterory_title}>
          {(categoryMap[value]
            ? categoryMap[value]
            : "Popular Products"
          ).toUpperCase()}
        </Box>
        {value === 0 && (
          <Box sx={styles.product_list_parent}>
            {products.map((item, index) => (
              <Link
                key={index}
                href={`/product/${item._id}`}
                passHref
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Box sx={styles.product_list}>
                  <Box sx={styles.product_img}></Box>

                  <Box sx={styles.product_info}>
                    <Typography sx={styles.typo_product_name}>
                      {item.name}
                    </Typography>
                    <Typography sx={styles.typo_retail_price}>
                      {" "}
                      Retail Price: {item.retail_price} CAD
                    </Typography>
                    <Typography sx={styles.typo_our_price}>
                      {item.price} CAD
                    </Typography>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>
        )}
        {value === 1 && (
          <Box sx={styles.product_list_parent}>
            {products.map((item, index) => (
              <Link
                key={index}
                href={`/product/${item._id}`}
                passHref
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Box key={index} sx={styles.product_list}>
                  <Box sx={styles.product_img}></Box>
                  <Box sx={styles.product_info}>
                    <Typography sx={styles.typo_product_name}>
                      {item.name}
                    </Typography>
                    <Typography sx={styles.typo_retail_price}>
                      {" "}
                      Retail Price: {item.retail_price} CAD
                    </Typography>
                    <Typography sx={styles.typo_our_price}>
                      {item.price} CAD
                    </Typography>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>
        )}
        {value === 2 && (
          <Box sx={styles.product_list_parent}>
            {products.map((item, index) => (
              <Link
                key={index}
                href={`/product/${item._id}`}
                passHref
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Box key={index} sx={styles.product_list}>
                  <Box sx={styles.product_img}></Box>
                  <Box sx={styles.product_info}>
                    <Typography sx={styles.typo_product_name}>
                      {item.name}
                    </Typography>
                    <Typography sx={styles.typo_retail_price}>
                      {" "}
                      Retail Price: {item.retail_price} CAD
                    </Typography>
                    <Typography sx={styles.typo_our_price}>
                      {item.price} CAD
                    </Typography>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>
        )}
        {value === 3 && (
          <Box sx={styles.product_list_parent}>
            {products.map((item, index) => (
              <Link
                key={index}
                href={`/product/${item._id}`}
                passHref
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Box key={index} sx={styles.product_list}>
                  <Box sx={styles.product_img}></Box>
                  <Box sx={styles.product_info}>
                    <Typography sx={styles.typo_product_name}>
                      {item.name}
                    </Typography>
                    <Typography sx={styles.typo_retail_price}>
                      {" "}
                      Retail Price: {item.retail_price} CAD
                    </Typography>
                    <Typography sx={styles.typo_our_price}>
                      {item.price} CAD
                    </Typography>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>
        )}
        {value === 4 && (
          <Box sx={styles.product_list_parent}>
            {products.map((item, index) => (
              <Link
                key={index}
                href={`/product/${item._id}`}
                passHref
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Box key={index} sx={styles.product_list}>
                  <Box sx={styles.product_img}></Box>
                  <Box sx={styles.product_info}>
                    <Typography sx={styles.typo_product_name}>
                      {item.name}
                    </Typography>
                    <Typography sx={styles.typo_retail_price}>
                      {" "}
                      Retail Price: {item.retail_price} CAD
                    </Typography>
                    <Typography sx={styles.typo_our_price}>
                      {item.price} CAD
                    </Typography>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Products;
