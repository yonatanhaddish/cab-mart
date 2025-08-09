import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

const styles = {
  navbar: {
    // border: "2px solid green",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.5rem 2rem",
    background: "#fff",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    letterSpacing: "2px",
  },
  navLinks: {
    gap: "1rem",
  },
};
function Navbar() {
  return (
    <Box sx={styles.navbar}>
      <Typography sx={styles.logo} variant="h6" component="div">
        CabMart
      </Typography>
      <Stack direction="row" sx={styles.navLinks}>
        <Button color="inherit">Coffee</Button>
        <Button color="inherit">Furniture</Button>
        <Button color="inherit">Pet</Button>
        <Button color="inherit">Perfume</Button>
      </Stack>
    </Box>
  );
}

export default Navbar;
