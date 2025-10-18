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
      // minHeight: "98vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#F3EBDD",
      paddingTop: isSm ? "50px" : isMd ? "80px" : "",
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
      color: "#14213d",
    },
    form: {
      // border: "solid grey 1px",
      boxShadow: "0 0 10px grey",
      width: isXs
        ? "90%"
        : isSm
        ? "80%"
        : isMd
        ? "60%"
        : isLg
        ? "80%"
        : isXl
        ? "40%"
        : "100%",
      display: "flex",
      flexWrap: "wrap",
      rowGap: isXs
        ? "15px"
        : isSm || isMd
        ? "20px"
        : isLg || isXl
        ? "15px"
        : "",
      columnGap: "",
      margin: "0 auto",
      padding: "30px 0 50px 0",
      backgroundColor: "#e5e5e5",
    },
    name: {
      // border: "solid #14213d 1px",
      width: isXs
        ? "85%"
        : isSm
        ? "80%"
        : isMd
        ? "80%"
        : isLg
        ? "60%"
        : isXl
        ? "60%"
        : "100%",
      margin: "0 auto",
      backgroundColor: "#e5e5e5",
    },
    description: {
      // border: "solid #14213d 1px",
      width: isXs
        ? "85%"
        : isSm
        ? "80%"
        : isMd
        ? "80%"
        : isLg
        ? "60%"
        : isXl
        ? "60%"
        : "100%",
      margin: "0 auto",
      backgroundColor: "#e5e5e5",
    },
    box_retail_prices: {
      width: isXs
        ? "85%"
        : isSm
        ? "80%"
        : isMd
        ? "80%"
        : isLg
        ? "60%"
        : isXl
        ? "60%"
        : "100%",
      margin: "0 auto",
      backgroundColor: "#e5e5e5",
    },
    box_prices: {
      // border: "solid #14213d 1px",
      width: isXs
        ? "85%"
        : isSm
        ? "80%"
        : isMd
        ? "80%"
        : isLg
        ? "60%"
        : isXl
        ? "60%"
        : "100%",
      margin: "0 auto",
      backgroundColor: "#e5e5e5",
    },
    box_category: {
      // border: "solid #14213d 1px",
      width: isXs
        ? "85%"
        : isSm
        ? "80%"
        : isMd
        ? "80%"
        : isLg
        ? "60%"
        : isXl
        ? "60%"
        : "100%",
      margin: "0 auto",
      backgroundColor: "#e5e5e5",
    },
    box_condition: {
      // border: "solid #14213d 1px",
      width: isXs
        ? "85%"
        : isSm
        ? "80%"
        : isMd
        ? "80%"
        : isLg
        ? "60%"
        : isXl
        ? "60%"
        : "100%",
      margin: "0 auto",
      backgroundColor: "#e5e5e5",
    },
    box_stock_images: {
      width: isXs
        ? "85%"
        : isSm
        ? "80%"
        : isMd
        ? "80%"
        : isLg
        ? "60%"
        : isXl
        ? "60%"
        : "100%",
      height: isLg || isXl ? "40px" : "45px",
      margin: "0 auto",
      // border: "solid red 2px",
    },
    box_button: {
      // border: "solid #fca311 2px",
      boxShadow: "0 0 10px #fca311",
      width: isXs
        ? "90%"
        : isSm
        ? "80%"
        : isMd
        ? "80%"
        : isLg
        ? "60%"
        : isXl
        ? "60%"
        : "100%",
      height: isXs || isSm || isMd ? "50px" : isLg || isXl ? "40px" : "100px",
      margin: "0 auto",
      textAlign: "center",
      marginTop: isXs || isSm || isMd || isLg || isXl ? "20px" : "",
      backgroundColor: "#fca311",
      alignContent: "center",
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
        <Typography sx={styles.typo_heading}>Post Item</Typography>
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
            size="small"
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
          <FormControl fullWidth size="small">
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
          <FormControl fullWidth size="small">
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
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormControl>
        </Box>
        <Box sx={styles.box_category}>
          <FormControl fullWidth size="small">
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
          <FormControl fullWidth size="small">
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
                  width: isXs
                    ? "55%"
                    : isSm
                    ? "45%"
                    : isMd
                    ? "40%"
                    : isLg
                    ? "40%"
                    : isXl
                    ? "40%"
                    : "100%",
                  display: "flex",
                  alignItems: "center",
                  // border: "solid green 2px",
                  backgroundColor: "#14213d",
                  color: "#e5e5e5",
                  gap: "10px",
                  fontSize: "1.0rem",
                  paddingLeft: "10px",
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
