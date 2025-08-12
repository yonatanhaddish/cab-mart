import React from "react";
import { Box, Typography } from "@mui/material";

const styles = {
  aboutUs_parent: {
    // border: "2px solid blue",
    width: "100%",
    backgroundColor: "#f97316",
  },
  typography: {
    fontSize: "1.2rem",
    lineHeight: "1.5",
    color: "#14213d",
    padding: "20px",
    textAlign: "center",
    fontWeight: "700",
    width: "50%",
    margin: "30px auto",
  },
};
function AboutUs() {
  return (
    <Box sx={styles.aboutUs_parent}>
      <Typography sx={styles.typography}>
        We bring you quality furniture, delightful perfumes, and fun pet toys,
        all at unbeatable prices. Shop right from your cab and enjoy exclusive
        deals while you ride. With fast delivery and trusted sellers, we make
        shopping as easy as your trip.
      </Typography>
    </Box>
  );
}

export default AboutUs;
