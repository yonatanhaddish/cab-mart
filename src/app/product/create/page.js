"use client";

import React, { useState, useEffect } from "react";
import ImageUplaoder from "../../../components/ImageUploader/ImageUplaoder";
import CircularProgress from "@mui/material/CircularProgress";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";

import { Box } from "@mui/material";

export default function Page() {
  // const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setMounted(true);
    const timer = setTimeout(() => setLoading(false), 500);
    console.log("test", loading);
    return () => clearTimeout(timer);
  }, []);

  // if (!mounted) return null;

  if (loading) {
    return (
      <Box
        sx={{
          backgroundColor: "#d9d9d9",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <LocalTaxiIcon sx={{ height: 100, width: 100, color: "#fca311" }} />
        <CircularProgress
          sx={{ width: 100, height: 100, mt: 2, color: "#fca311" }}
        />
      </Box>
    );
  }

  return (
    <Box
      style={{
        // border: "solid 4px red",
        minHeight: "100vh",
        backgroundColor: "#F3EBDD",
      }}
    >
      <ImageUplaoder />
    </Box>
  );
}
