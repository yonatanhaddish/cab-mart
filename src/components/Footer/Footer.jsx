import React, { useState } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { Link } from "react-scroll";
import { useTheme } from "@mui/material/styles";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";

function Footer({ setSelectedCategory }) {
  const [selectedFooterLink, setSelectedFooterLink] = useState("products");
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // mobile
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // tablet
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); // small desktop
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl")); // desktop
  const isXl = useMediaQuery(theme.breakpoints.up("xl")); // wide desktop

  const styles = {
    parent_footer: {
      borderBottom: "solid #fca311 1px",
      display: "flex",
      flexDirection: isXs || isSm ? "column" : "row",
      gap: isMd || isLg ? "" : "40px",
      paddingTop: "30px",
      backgroundColor: "#000E2B",
      justifyContent: isXl || isLg || isMd ? "space-evenly" : "",
      alignItems: isSm || isXs ? "center" : "",
    },
    logo_motto: {
      border: "solid blue 2px",
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
      height: "100%",
      cursor: "pointer",
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
        ? "4.0rem"
        : isSm
        ? "5rem"
        : isMd
        ? "5rem"
        : isLg
        ? "5.6rem"
        : isXl
        ? "5.6rem"
        : "",
      color: "#fca311",
    },
    typo_cabmart: {
      fontSize: isXs
        ? "1.6rem"
        : isSm
        ? "1.6rem"
        : isMd
        ? "1.6rem"
        : isLg
        ? "1.8rem"
        : isXl
        ? "1.8rem"
        : "",
      color: "#e5e5e5",
    },
    typo_motto: {
      fontSize: "1.0rem",
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

  const sendDataToProductComponent = (data) => {
    setSelectedFooterLink("products");

    setTimeout(() => {
      setSelectedCategory(data);
    }, 300);
  };
  return (
    <Box sx={styles.parent_footer}>
      <Link
        sx={styles.logo_motto}
        to="home_page"
        duration={500}
        smooth={true}
        offset={isMd || isLg ? -60 : -60}
      >
        <Box>
          <LocalTaxiIcon sx={styles.cabmart_logo} />
          <Typography sx={styles.typo_cabmart}>CabMart</Typography>
          <Typography sx={styles.typo_motto}>
            The Market That Moves With You
          </Typography>
        </Box>
      </Link>
      <Box sx={styles.link_parent}>
        <Box sx={styles.link_product}>
          <Typography sx={styles.typo_parent_link}>Products</Typography>
          <Link to={selectedFooterLink} duration={500} smooth={true}>
            <Button
              sx={styles.typo_link}
              onClick={() => sendDataToProductComponent(1)}
            >
              Coffee
            </Button>
          </Link>
          <Link to={selectedFooterLink} duration={500} smooth={true}>
            <Button
              sx={styles.typo_link}
              onClick={() => sendDataToProductComponent(2)}
            >
              Furniture
            </Button>
          </Link>
          <Link to={selectedFooterLink} duration={500} smooth={true}>
            <Button
              sx={styles.typo_link}
              onClick={() => sendDataToProductComponent(3)}
            >
              Pet Toy
            </Button>
          </Link>
          <Link to={selectedFooterLink} duration={500} smooth={true}>
            <Button
              sx={styles.typo_link}
              onClick={() => sendDataToProductComponent(4)}
            >
              Perfume
            </Button>
          </Link>
        </Box>
        <Box sx={styles.link_links}>
          <Typography sx={styles.typo_parent_link}>Links</Typography>
          <Link
            to="home_page"
            duration={500}
            smooth={true}
            offset={isMd || isLg ? -60 : -60}
          >
            <Button sx={styles.typo_link}>Home</Button>
          </Link>
          <Link
            to="about_us"
            duration={500}
            smooth={true}
            offset={isMd || isLg ? -60 : -60}
          >
            {" "}
            <Button sx={styles.typo_link}>About Us</Button>
          </Link>
          <Link
            to="why_choose_us"
            duration={500}
            smooth={true}
            offset={isMd || isLg ? -60 : -60}
          >
            <Button sx={styles.typo_link}>Service</Button>
          </Link>
          <Link
            to="categories"
            duration={500}
            smooth={true}
            offset={isMd || isLg ? -60 : -60}
          >
            <Button sx={styles.typo_link}>Categories</Button>
          </Link>
          <Link
            to="products"
            duration={500}
            smooth={true}
            offset={isMd || isLg ? -60 : -60}
          >
            <Button sx={styles.typo_link}>Products</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
