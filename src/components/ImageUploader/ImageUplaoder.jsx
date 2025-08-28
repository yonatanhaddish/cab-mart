"use client";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { CldUploadWidget } from "next-cloudinary";
import FileUploadIcon from "@mui/icons-material/FileUpload";
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
  useMediaQuery,
} from "@mui/material";

export default function ImageUplaoder() {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [retailPrice, setRetailPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // mobile
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // tablet
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); // small desktop
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl")); // desktop
  const isXl = useMediaQuery(theme.breakpoints.up("xl")); // wide desktop

  const styles = {
    form_parent: {
      // border: "solid green 2px",
      minHeight: "98vh",
      display: "flex",
      flexDirection: "column",
      gap: isXs ? "20px" : "",
      backgroundColor: "#e5e5e5",
    },
    box_heading: {
      // border: "solid blue 2px",
      height: "80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    typo_heading: {
      borderBottom: "solid #14213d 1px",
      fontSize: "1.4rem",
    },
    form: {
      border: "solid #14213d 2px",
      boxShadow: "0 0 10px #14213d",
      width: isXs ? "380px" : "100%",
      display: "flex",
      flexWrap: "wrap",
      rowGap: isXs ? "10px" : "",
      columnGap: "",
      margin: "0 auto",
      padding: "30px 0 50px 0",
      backgroundColor: "#F3EBDD",
    },
    name: {
      border: "solid #14213d 1px",
      width: isXs ? "90%" : "100%",
      margin: "0 auto",
      backgroundColor: "#F3EBDD",
    },
    description: {
      border: "solid #14213d 1px",
      width: isXs ? "90%" : "100%",
      margin: "0 auto",
      backgroundColor: "#F3EBDD",
    },
    box_retail_prices: {
      border: "solid #14213d 1px",
      width: isXs ? "90%" : "100%",
      margin: "0 auto",
      backgroundColor: "#F3EBDD",
    },
    box_prices: {
      border: "solid #14213d 1px",
      width: isXs ? "90%" : "100%",
      margin: "0 auto",
      backgroundColor: "#F3EBDD",
    },
    box_category: {
      border: "solid #14213d 1px",
      width: isXs ? "40%" : "100%",
      margin: "0 auto",
      backgroundColor: "#F3EBDD",
    },
    box_condition: {
      border: "solid #14213d 1px",
      width: isXs ? "40%" : "100%",
      margin: "0 auto",
      backgroundColor: "#F3EBDD",
    },
    box_stock_images: {
      width: isXs ? "90%" : "100%",
      height: isXs ? "40px" : "",
      margin: "0 auto",
      // border: "solid red 2px",
    },
    box_button: {
      // border: "solid red 2px",
      boxShadow: "0 0 10px #fca311",
      width: isXs ? "90%" : "100%",
      height: "40px",
      margin: "0 auto",
      textAlign: "center",
      marginTop: isXs ? "20px" : "",
      backgroundColor: "#fca311",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        description,
        retailPrice,
        price,
        category,
        condition,
        images,
      }),
    });

    const data = await res.json();
    console.log("Created product:", data);
  };
  return (
    <Box sx={styles.form_parent}>
      <Box sx={styles.box_heading}>
        <Typography sx={styles.typo_heading}>Post an Item</Typography>
      </Box>
      <form onSubmit={handleSubmit} style={styles.form}>
        <Box
          sx={styles.name}
          noValidate
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box
          sx={styles.description}
          onChange={(e) => setDescription(e.target.value)}
        >
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            fullWidth
          />
        </Box>
        <Box sx={styles.box_retail_prices}>
          <FormControl fullWidth>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment
                  position="start"
                  onChange={(e) => setRetailPrice(e.target.value)}
                >
                  Retail Price
                </InputAdornment>
              }
              label="Retail Price"
              onChange={(e) => setRetailPrice(e.target.value)}
            />
          </FormControl>
        </Box>
        <Box sx={styles.box_prices}>
          <FormControl fullWidth>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment
                  position="start "
                  onChange={(e) => setPrice(e.target.value)}
                >
                  Price
                </InputAdornment>
              }
              label="Price"
            />
          </FormControl>
        </Box>
        <Box sx={styles.box_category}>
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
        </Box>
        <Box sx={styles.box_condition}>
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
                  height: "100%",
                  width: isXs ? "45%" : "100%",
                  display: "flex",
                  alignItems: "center",
                  // border: "solid green 2px",
                  backgroundColor: "#14213d",
                  color: "#e5e5e5",
                  gap: "10px",
                }}
              >
                Upload Images <FileUploadIcon />
              </button>
            )}
          </CldUploadWidget>
        </Box>
        <Box sx={styles.box_button}>
          <Button
            type="submit"
            sx={{
              color: "#14213d",
              fontWeight: "bold",
              fontSize: isXs ? "1.0rem" : "",
            }}
          >
            POST
          </Button>
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
