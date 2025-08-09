import React from "react";
import { Box, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const styles = {
  landingPage_parent: {
    // border: "2px solid blue",
    display: "flex",
    height: "55vh",
    width: "92%",
    justifyContent: "space-around",
    justifySelf: "center",
    backgroundColor: "#f6f6f6",
    marginTop: "50px",
    borderRadius: "20px",
  },
  info_box: {
    // border: "solid green 1px",
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  info_box_01: {
    // border: "solid red 1px",
    padding: "1rem",
    width: "90%",
  },
  typo_youonestop: {
    fontWeight: "bold",
    fontSize: "2.6rem",
    letterSpacing: "1px",
    marginTop: "0.5rem",
  },
  typo_welcome: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    letterSpacing: "1px",
    marginTop: "0.5rem",
  },
  image_box_02: {
    display: "flex",
    // border: "solid blue 1px",
    height: "120px",
    justifyContent: "space-between",
    width: "100%",
  },
  box_01: {
    width: "45%",
    textAlign: "center",
    alignContent: "center",
    backgroundColor: "#14213d",
    color: "#f6f6f6",
  },
  box_02: {
    width: "45%",
    height: "100%",
    textAlign: "center",
    alignContent: "center",
    backgroundColor: "#14213d",
    color: "#f6f6f6",
  },

  image_main: {
    // border: "solid green 2px",
    height: "80%",
    width: "30%",
    backgroundImage: "url('/images/landing_page_02.jpeg')",
    backgroundSize: "cover",
    alignSelf: "self-end",
  },
};
function LandingPage() {
  return (
    <Box sx={styles.landingPage_parent}>
      <Box sx={styles.info_box}>
        <Box sx={styles.info_box_01}>
          <Typography sx={styles.typo_welcome}>
            Welcome to <span style={{ color: "black" }}>CabMart</span>{" "}
          </Typography>
          <Typography sx={styles.typo_youonestop}>
            Easy <span style={{ color: "#F97316" }}>shopping</span> for your
            favorite items while you{" "}
            <span style={{ color: "#F97316" }}>ride</span> in a cab.
          </Typography>
        </Box>
        <Box sx={styles.image_box_02}>
          <Box sx={styles.box_01}>
            <LocalShippingIcon
              fontSize="large"
              sx={{ color: "#F97316", marginBottom: "0.5rem" }}
            />
            <Typography variant="h6" component="div">
              Enjoy free delivery on orders over 100 CAD .
            </Typography>
          </Box>
          <Box sx={styles.box_02}>
            <AttachMoneyIcon
              fontSize="large"
              sx={{ color: "#F97316", marginBottom: "0.5rem" }}
            />
            <Typography variant="h6" component="div">
              We offer high-quality products with discounts of over 50%.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.image_main}></Box>
    </Box>
  );
}

export default LandingPage;
