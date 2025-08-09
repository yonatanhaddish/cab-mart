"use client";

import React, { useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";

const styles = {
  products_parent: {
    border: "2px solid blue",
  },
  products_body: {
    border: "2px solid green",
  },
};
function Products() {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("Popular Products");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setName(event.target.textContent);
  };

  return (
    <Box sx={styles.products_parent}>
      <Typography
        variant="h4"
        component="div"
        sx={{ textAlign: "center", margin: "20px 0" }}
      >
        {name}
      </Typography>
      <Box sx={styles.products_body}>
        <Box>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Popular Products" />
            <Tab label="Coffee" />
            <Tab label="Furniture" />
            <Tab label="Pet Toys" />
            <Tab label="Perfume" />
          </Tabs>
        </Box>
        {value === 0 && <Box>Popular products goes here</Box>}
        {value === 1 && <Box>Coffee products goes here</Box>}
        {value === 2 && <Box>Furniture products goes here</Box>}
        {value === 3 && <Box>Pet Toys products goes here</Box>}
        {value === 4 && <Box>Perfume products goes here</Box>}
      </Box>
    </Box>
  );
}

export default Products;
