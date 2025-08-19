"use client";
import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

const styles = {
  form_parent: {
    // border: "solid blue 2px",
    height: "99vh",
  },
  form: {
    border: "solid #14213d 1px",
    boxShadow: "0 0 10px #14213d",
    width: "40%",
    height: "70%",
    margin: "30px auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "30px",
  },
  name: {
    // border: "solid red 2px",
    border: "solid #14213d 1px",
    boxShadow: "0 0 10px #14213d",
  },
  description: {
    // border: "solid green 2px",
    border: "solid #14213d 1px",
    boxShadow: "0 0 10px #14213d",
  },
  box_prices: {
    // border: "solid blue 2px",

    display: "flex",
    gap: "40px",
  },
  box_condition_category: {
    // border: "solid green 2px",
    display: "flex",
    gap: "40px",
  },
  box_stock_images: {
    // border: "solid blue 2px",
    display: "flex",
    justifyContent: "space-between",
    gap: "40px",
    height: "40px",
  },
  box_button: {
    // border: "solid red 2px",
    width: "50%",
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "#f97316",
    marginTop: "40px",
  },
  typo_heading: {
    // border: "solid red 2px",
    textAlign: "center",
    fontSize: "2.6rem",
    marginTop: "30px",
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
              sx={{
                border: "solid #14213d 1px",
                boxShadow: "0 0 10px #14213d",
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">Price</InputAdornment>
              }
              label="Price"
              sx={{
                border: "solid #14213d 1px",
                boxShadow: "0 0 10px #14213d",
              }}
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
              sx={{
                border: "solid #14213d 1px",
                boxShadow: "0 0 10px #14213d",
              }}
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
              sx={{
                border: "solid #14213d 1px",
                boxShadow: "0 0 10px #14213d",
              }}
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
                style={{
                  width: "50%",
                  textAlign: "start",
                  border: "solid #e0e0e0 1px",
                  boxShadow: "0 0 10px #14213d",
                }}
              >
                Upload Images
              </button>
            )}
          </CldUploadWidget>
          <Typography
            style={{
              //   border: "solid green 2px",
              width: "50%",
              height: "100%",
              alignContent: "center",
              fontWeight: "bold",
            }}
          >
            Qty: 1
          </Typography>
        </Box>
        <Box sx={styles.box_button}>
          <Button sx={{ color: "#14213d", fontWeight: 700 }}>POST</Button>
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
