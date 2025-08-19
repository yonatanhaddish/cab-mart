"use client";
import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

const styles = {
  form_parent: {
    border: "solid blue 2px",
  },
  form: {
    border: "solid green 2px",
    width: "40%",
    margin: "0 auto",
  },
  name: {
    border: "solid red 2px",
  },
  description: {
    border: "solid green 2px",
  },
  box_prices: {
    border: "solid blue 2px",
    display: "flex",
  },
  box_condition_category: {
    border: "solid green 2px",
    display: "flex",
  },
  box_stock_images: {
    border: "solid blue 2px",
    display: "flex",
    justifyContent: "space-between",
  },
  box_button: {
    border: "solid red 2px",
  },
  typo_heading: {
    border: "solid red 2px",
    textAlign: "center",
    fontSize: "2.6rem",
  },
};

import {
  Box,
  TextField,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  MenuItem,
  Select,
  Typography,
  Button,
} from "@mui/material";

export default function ImageUplaoder() {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [retailPrice, setRetailPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        description,
        retail_price: retailPrice,
        price,
        category,
        images,
      }),
    });

    const data = await res.json();
    console.log("Created product:", data);
  };

  return (
    <Box sx={styles.form_parent}>
      <Typography sx={styles.typo_heading}>Post an Item</Typography>
      <form onSubmit={handleSubmit} style={styles.form}>
        <Box sx={styles.name} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box sx={styles.description}>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            fullWidth
          />
        </Box>
        <Box sx={styles.box_prices}>
          <FormControl fullWidth>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">Retail Price</InputAdornment>
              }
              label="Retail Price"
            />
          </FormControl>
          <FormControl fullWidth>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">Price</InputAdornment>
              }
              label="Price"
            />
          </FormControl>
        </Box>
        <Box sx={styles.box_condition_category}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={"Coffee"}>Coffee</MenuItem>
              <MenuItem value={"Furniture"}>Furniture</MenuItem>
              <MenuItem value={"Pet Toy"}>Pet Toy</MenuItem>
              <MenuItem value={"Perfume"}>Perfume</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Condition</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={condition}
              label="Condition"
              onChange={(e) => setCondition(e.target.value)}
            >
              <MenuItem value={"New"}>New</MenuItem>
              <MenuItem value={"Open Box / Like New"}>
                Open Box / Like New
              </MenuItem>
              <MenuItem value={"Used"}>Used</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={styles.box_stock_images}>
          <Typography style={{ border: "solid green 2px", width: "50%" }}>
            Qty: 1
          </Typography>
          <CldUploadWidget
            uploadPreset="cabmart_unsigned"
            onUpload={(result) => {
              if (result.event === "success") {
                setImages((prev) => [...prev, result.info.secure_url]);
              }
            }}
          >
            {({ open }) => (
              <button
                type="button"
                onClick={() => open()}
                style={{ border: "solid green 2px", width: "50%" }}
              >
                Upload Images
              </button>
            )}
          </CldUploadWidget>
        </Box>
        <Box sx={styles.box_button}>
          <Button>POST</Button>
        </Box>
      </form>
    </Box>
  );
}

//   {images.length > 0 && (
//     <div>
//       {images.map((img, i) => (
//         <img key={i} src={img} alt={`Product ${i}`} width="100" />
//       ))}
//     </div>
//   )}

//   <button type="submit">Create Product</button>
