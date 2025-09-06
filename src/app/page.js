"use client";

import React, { useState, useEffect } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import CategoryBox from "../components/CategoryBox/CategoryBox";
import LandingPage from "../components/LandingPage/LandingPage";
import Navbar from "../components/Navbar/Navbar";
import Service from "../components/Service/Service";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";
import FooterTwo from "../components/FooterTwo/FooterTwo";

import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";

export default function Home() {
  // const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setMounted(true);
    const timer = setTimeout(() => setLoading(false), 500);

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
    <>
      <Navbar />
      <LandingPage />
      <AboutUs />
      <CategoryBox />
      <Service />
      <Products />
      <Footer />
      <FooterTwo />
    </>
  );
}
