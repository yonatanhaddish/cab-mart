import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";

function FooterTwo() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // mobile
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // tablet
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); // small desktop
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl")); // desktop
  const isXl = useMediaQuery(theme.breakpoints.up("xl")); // wide desktop

  const styles = {
    parent_footer_two: {
      backgroundColor: "#000E2B",
      color: "#fca311",
      height: isXs
        ? "50px"
        : isSm
        ? "60px"
        : isMd
        ? "60px"
        : isLg
        ? "70px"
        : isXl
        ? "80px"
        : "",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  return (
    <Box sx={styles.parent_footer_two}>
      <Typography> © 2025 CabMart Inc. All rights reserved.</Typography>
    </Box>
  );
}

export default FooterTwo;
