"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BusinessIcon from "@mui/icons-material/Business";
import CategoryIcon from "@mui/icons-material/Category";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Typography, useMediaQuery } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-scroll";

export default function RightDrawer() {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const toggleDrawer = (state) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(state);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, id: "home_page" },
    { text: "About Us", icon: <BusinessIcon />, id: "about_us" },
    { text: "Categories", icon: <CategoryIcon />, id: "categories" },
    { text: "Why Choose Us?", icon: <SupportAgentIcon />, id: "why_choose_us" },
    { text: "Products", icon: <InventoryIcon />, id: "products" },
  ];

  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // mobile
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // tablet
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); // small desktop
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl")); // desktop
  const isXl = useMediaQuery(theme.breakpoints.up("xl")); // wide desktop
  const styles = {
    navbar: {
      borderBottom: "solid #14213d 1px",
      backgroundColor: "#e5e5e5",
      width: "100%",
      height: 60,
      display: "flex",
      position: "sticky",
      top: 0,
      zIndex: 1100,
    },
    navbar_parent: {
      // border: "solid red 2px",
      display: "flex",
      justifyContent: "space-between",
      width: "90%",
      margin: "0 auto",
      alignSelf: "center",
    },
    logo: {
      // border: "solid green 2px",
      display: "flex",
      alignSelf: "center",
    },
    menu_button: {
      // border: "solid blue 2px",
      fontSize: isXs ? "2rem" : isSm ? "2.2rem" : "",
      alignSelf: "center",
    },
    button_box: {
      border: "solid #14213d 1px",
      boxShadow: "0 0 10px #14213d",
      width: "35%",
      alignSelf: "end",
      backgroundColor: "#fca311",
      color: "#14213d",
    },
    nav_bar_parent: {
      borderBottom: "solid #14213d 1px",
      height: isMd || isLg ? 60 : 80,
      display: "flex",
      alignItems: "center",
      backgroundColor: "#e5e5e5",
      position: "sticky",
      top: 0,
      zIndex: 1200,
    },
    nav_bar_sub_parent: {
      // border: "solid green 2px",
      width: isXs || isSm ? "96%" : isMd || isLg ? "94%" : "96%",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
    },
    logo_name: {
      // border: "solid red 2px",
      display: "flex",
      alignSelf: "center",
      cursor: "pointer",
    },
    nav_list_parent: {
      // border: "solid blue 2px",
      width: isMd ? "48%" : isLg ? "50%" : isXl ? "35%" : "50%",
      display: "flex",
      justifyContent: "space-between",
    },
    button_cart: {
      border: "solid #14213d 1px",
      boxShadow: "0 0 10px #14213d",
      backgroundColor: "#fca311",
      color: "#14213d",
      height: isMd || isLg ? "30px" : isXl ? "40px" : "100px",
    },
    button_link: {
      color: "#14213d",
      fontSize: isMd ? "0.8rem" : isLg ? "0.9rem" : isXl ? "1.0rem" : "",
      fontWeight: "bold",
    },
  };
  const list = (
    <Box
      sx={{
        width: isXs ? 250 : isSm ? 350 : 300,
        p: 2,
        // border: "solid green 2px",
        backgroundColor: "#fff",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "#e5e5e5",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          // mb: 2,
        }}
      >
        <CloseIcon
          onClick={toggleDrawer(false)}
          sx={{
            cursor: "pointer",
            fontSize: isXs ? "1.8rem" : isSm ? "2rem" : "",
            // border: "solid yellow 2px",
            marginRight: isXs ? 1 : isSm ? 3 : 0,
            marginTop: isXs ? -1 : isSm ? -2 : 0,
          }}
        />
      </Box>
      <List>
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            duration={500}
            smooth={true}
            offset={isMd || isLg ? -10 : -50}
            onClick={handleClose}
          >
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                height: "45px",
                width: "90%",
                borderBottom: "solid #14213d 1px",
                margin: 1.2,
              }}
            >
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    color: "#fca311",
                    fontSize: "4rem",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    color: "#14213d",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Button sx={styles.button_box} href={`/cart`}>
        <ShoppingCartIcon />
      </Button>
    </Box>
  );

  return isXs || isSm ? (
    <Box sx={styles.navbar}>
      <Box sx={styles.navbar_parent}>
        <a
          href="/"
          style={{ textDecoration: "none", color: "#14213f" }}
          offset={isMd || isLg ? -60 : -70}
        >
          <Box sx={styles.logo}>
            <LocalTaxiIcon
              sx={{
                color: "#fca311",
                fontSize: isXs ? "1.8rem" : isSm ? "2.2rem" : "",
              }}
            />
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: isXs ? "1.2rem" : isSm ? "1.4rem" : "",
              }}
            >
              CabMart
            </Typography>
          </Box>
        </a>
        <MenuIcon
          onClick={toggleDrawer(true)}
          sx={styles.menu_button}
        ></MenuIcon>
      </Box>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            // border: "solid red 2px",
            height: isXs ? "450px" : isSm ? "450px" : "900px",
          },
        }}
      >
        {list}
      </Drawer>
    </Box>
  ) : (
    <Box sx={styles.nav_bar_parent}>
      <Box sx={styles.nav_bar_sub_parent}>
        <a
          href="/"
          style={{ textDecoration: "none" }}
          offset={isMd || isLg ? -60 : -90}
        >
          <Box sx={styles.logo_name}>
            <LocalTaxiIcon
              sx={{
                color: "#fca311",
                fontSize: isXs
                  ? "1.8rem"
                  : isSm
                  ? "2.2rem"
                  : isMd
                  ? "1.8rem"
                  : isLg
                  ? "2.0rem"
                  : "2.2rem",
              }}
            />
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: isXs
                  ? "1.2rem"
                  : isSm
                  ? "1.4rem"
                  : isMd
                  ? "1rem"
                  : isLg
                  ? "1.1rem"
                  : "1.4rem",
                alignSelf: "center",
                color: "#14213d",
              }}
            >
              CabMart
            </Typography>
          </Box>
        </a>
        <Box sx={styles.nav_list_parent}>
          <Link
            to="home_page"
            duration={500}
            smooth={true}
            offset={isMd || isLg ? -60 : -60}
          >
            {" "}
            <Button sx={styles.button_link}>Home</Button>
          </Link>
          <Link
            to="about_us"
            duration={500}
            smooth={true}
            offset={isMd || isLg ? -60 : -60}
          >
            {" "}
            <Button sx={styles.button_link}>About Us</Button>
          </Link>
          <Link
            to="categories"
            duration={500}
            smooth={true}
            offset={isMd || isLg ? -60 : -60}
          >
            <Button sx={styles.button_link}>Categories</Button>
          </Link>
          <Link
            to="why_choose_us"
            duration={500}
            smooth={true}
            offset={isMd || isLg ? -60 : -60}
          >
            <Button sx={styles.button_link}>Why choose us?</Button>
          </Link>
          <Link
            to="products"
            duration={500}
            smooth={true}
            offset={isMd || isLg ? -60 : -60}
          >
            <Button sx={styles.button_link}>Products</Button>
          </Link>
        </Box>
        <Button sx={styles.button_cart} href={`/cart`}>
          <ShoppingCartIcon />
        </Button>
      </Box>
    </Box>
  );
}
