import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";

function Footer() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // mobile
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // tablet
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); // small desktop
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl")); // desktop
  const isXl = useMediaQuery(theme.breakpoints.up("xl")); // wide desktop

  const styles = {
    parent_footer: {
      //   border: "solid green 2px",
      display: "flex",
      flexDirection: isXs || isSm ? "column" : "row",
      gap: isMd || isLg ? "" : "40px",
      paddingTop: "30px",
      backgroundColor: "#000E2B",
      justifyContent: isXl || isLg || isMd ? "space-evenly" : "",
      alignItems: isSm || isXs ? "center" : "",
    },
    logo_motto: {
      //   border: "solid blue 2px",
      width: isXs
        ? "80%"
        : isSm
        ? "70%"
        : isMd
        ? "30%"
        : isLg
        ? "25%"
        : isXl
        ? "15%"
        : "",
      //   margin: isXl ? "" : "0 auto",
    },
    link_parent: {
      //   border: "solid red 2px",
      display: "flex",
      justifyContent: isMd || isLg || isXl ? "space-between" : "space-around",
      textAlign: "center",
      marginBottom: "40px",
      width: isXs
        ? "100%"
        : isSm
        ? "65% "
        : isMd
        ? "35%"
        : isLg
        ? "30%"
        : isXl
        ? "20%"
        : "100%",
      //   margin: "0 auto",
    },
    link_product: {
      //   border: "solid purple, 1px",
      display: "flex",
      flexDirection: "column",
    },
    link_links: {
      //   border: "solid purple, 1px",
      display: "flex",
      flexDirection: "column",
    },
    cabmart_logo: {
      fontSize: isXs
        ? "5.4rem"
        : isSm
        ? "6rem"
        : isMd
        ? "6rem"
        : isLg
        ? "5.6rem"
        : isXl
        ? "5.6rem"
        : "",
      color: "#fca311",
    },
    typo_cabmart: {
      fontSize: isXs
        ? "1.8rem"
        : isSm
        ? "1.8rem"
        : isMd
        ? "1.8rem"
        : isLg
        ? "1.8rem"
        : isXl
        ? "1.8rem"
        : "",
      color: "#e5e5e5",
    },
    typo_motto: {
      fontSize: "1.1rem",
      color: "#e5e5e5",
    },
    typo_parent_link: {
      color: "#e5e5e5",
      fontSize: "1.0rem",
      fontWeight: "bold",
      borderBottom: "solid 1px #fca311",
      marginBottom: "10px",
    },

    typo_link: {
      color: "#e5e5e5",
    },
  };
  return (
    <Box sx={styles.parent_footer}>
      <Box sx={styles.logo_motto}>
        <LocalTaxiIcon sx={styles.cabmart_logo} />
        <Typography sx={styles.typo_cabmart}>CabMart</Typography>
        <Typography sx={styles.typo_motto}>
          The Market That Moves With You
        </Typography>
      </Box>
      <Box sx={styles.link_parent}>
        <Box sx={styles.link_product}>
          <Typography sx={styles.typo_parent_link}>Products</Typography>
          <Button sx={styles.typo_link}>Coffee</Button>
          <Button sx={styles.typo_link}>Furniture</Button>
          <Button sx={styles.typo_link}>Pet Toy</Button>
          <Button sx={styles.typo_link}>Perfume</Button>
        </Box>
        <Box sx={styles.link_links}>
          <Typography sx={styles.typo_parent_link}>Links</Typography>
          <Button sx={styles.typo_link}>Home</Button>
          <Button sx={styles.typo_link}>About Us</Button>
          <Button sx={styles.typo_link}>Service</Button>
          <Button sx={styles.typo_link}>Categories</Button>
          <Button sx={styles.typo_link}>Products</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
