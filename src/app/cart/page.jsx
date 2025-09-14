"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { Box, Typography, Drawer, useMediaQuery, Button } from "@mui/material";
import useCart from "../../utils/useCart";

import InputAdornment from "@mui/material/InputAdornment";

function Cart() {
  const { getCart, removeFromCart } = useCart();
  const [cartProducts, setCartProducts] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(true);
  const [currentPageForm, setCurrentPageForm] = useState("payment-form");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    apt: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
    deliveryInstruction: "",
  });

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // mobile
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // tablet
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); // small desktop
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl")); // desktop
  const isXl = useMediaQuery(theme.breakpoints.up("xl")); // wide desktop

  const styles = {
    parent_mycart: {
      // border: "solid red 2px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#F3EBDD",
    },
    cart_image_item: {
      backgroundSize: "cover",
      backgroundPosition: "center",
      width:
        isXs || isSm
          ? "22%"
          : isMd
          ? "25%"
          : isLg
          ? "20%"
          : isXl
          ? "20%"
          : "100%",
      // border: "solid green 2px",
    },
    cart_title: {
      // border: "solid green 2px",
      height: "70px",
      backgroundColor: "#14213d",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    reciept_cart: {
      // paddingTop: "40px",
      position: "sticky",
      bottom: 0,
      // border: "solid blue 2px",
      backgroundColor: "#fca311",
      height:
        isXs || isSm
          ? "180px"
          : isMd
          ? "200px"
          : isLg
          ? "160px"
          : isXl
          ? "160px"
          : "",
    },
    sub_parent: {
      // border: "solid green 2px",
      display: "flex",
      flexDirection: "column",
      minHeight: "92vh",
    },
    carts_all: {
      // border: "solid blue 2px",
      flex: 1,
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      paddingTop: "20px",
      width: "100%",
    },
    carts_empty: {
      flex: 1,
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      paddingTop: "20px",
      justifyContent: "space-evenly",
    },
    info_cart_single: {
      border: "solid #14213d 2px",
      boxShadow: "0 0 8px #14213d",
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "#e5e5e5",
      width: isXs
        ? "86%"
        : isSm
        ? "50%"
        : isMd
        ? "50%"
        : isLg
        ? "30%"
        : isXl
        ? "28%"
        : "",
      height: isXs
        ? "78px"
        : isSm
        ? "85px"
        : isMd
        ? "90px"
        : isLg
        ? "74px"
        : isXl
        ? "90px"
        : "",
      margin: "0 auto",
    },
    icon_delete: {
      // border: "solid #14213d 1px",
      boxShadow: "0 0 10px #14213d",
      width: isXs
        ? "12%"
        : isSm
        ? "50px"
        : isMd
        ? "10%"
        : isLg
        ? "10%"
        : isXl
        ? "10%"
        : "100%",
      height: isXs
        ? "45px"
        : isSm
        ? "45px"
        : isMd
        ? "50px"
        : isLg
        ? "40px"
        : isXl
        ? "55px"
        : "",
      backgroundColor: "#14213d",
      borderRadius: "60px",
      display: "flex",
      justifyContent: "center",
      alignSelf: "center",
      color: "#e5e5e5",
      marginRight: "10px",
    },
    typo_info: {
      // border: "solid red 2px",
      width:
        isXs || isSm
          ? "65%"
          : isMd
          ? "65%"
          : isLg
          ? "60%"
          : isXl
          ? "60%"
          : "100%",
      textAlign: "center",
      alignContent: "center",
    },
    your_cart_title: {
      color: "#e5e5e5",
      display: "flex",
      // border: "solid 1px white",
      justifyContent: "center",
      gap: "8px",
    },
    checkout_button: {
      backgroundColor: "#14213d",
      boxShadow: "0 0 10px #14213d",
      color: "#e5e5e5",
      marginTop: "10px",
      width: "90%",
    },
    typo_name: {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    typo_category: {},
    typo_price: { fontSize: "1.1rem" },
  };
  const styles_drawer = {
    parent_drawer: {
      // border: "solid red 2px",
      height: "100vh",
      backgroundColor: "#e5e5e5",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    close_box: {
      // border: "solid green 2px",
      height: "50px",
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
      backgroundColor: "#14213d",
    },
    parent_tabs: {
      // border: "solid green 2px",
      display: "flex",
      justifyContent: "center",
      margin: "0 auto",
      width: "80%",
      gap: "20px",
    },
    single_tab: {
      // border: "solid red 2px",
      display: "flex",
      gap: "10px",
    },
    parent_payments: {
      // border: "solid blue 2px",
      display: "flex",
      justifyContent: "space-between",
      width: "60%",
      margin: "0 auto",
    },
    single_payment: {
      border: "solid grey 1px",
      boxShadow: "0 0 2px #14213d",
      width: "40%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      height: "100px",
    },
    next_back_parent: {
      // border: "solid green 2px",
      width: "60%",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
    },
    parent_address: {
      // border: "solid blue 2px",
      width: "60%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      margin: "0 auto",
      rowGap: "15px",
    },
    single_input: {
      // border: "solid red 2px",
      width: "30%",
    },
  };

  const toggleFormDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };
  console.log("33", openDrawer);

  useEffect(() => {
    const cart_products = getCart();
    setCartProducts(cart_products);
  }, []);

  const sub_total = cartProducts.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);

  const delivery_price = sub_total > 100 || sub_total <= 0 ? 0 : 20;

  const total_price = sub_total + delivery_price;

  const handleDeleteItem = (id) => {
    removeFromCart(id);
    setCartProducts((prev) => prev.filter((item) => item._id !== id));
  };

  const handleNextButton = () => {
    if (currentPageForm === "payment-form") {
      setCurrentPageForm("address-form");
      console.log("paymentDetail", paymentMethod);
    }
    if (currentPageForm === "address-form") {
      setCurrentPageForm("check-form");

      console.log("addressDetail", formData);
    }
  };
  const handleBackButton = () => {
    if (currentPageForm === "check-form") {
      setCurrentPageForm("address-form");
    }
    if (currentPageForm === "address-form") {
      setCurrentPageForm("payment-form");
    }
  };

  const handleCashPaymentButton = () => {
    setPaymentMethod("cash-payment");
  };
  const handleOnlinePaymentButton = () => {
    setPaymentMethod("online-payment");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const DrawerList = (
    <Box sx={styles_drawer.parent_drawer} role="presentation">
      <Box onClick={toggleFormDrawer(false)} sx={styles_drawer.close_box}>
        <CloseIcon sx={{ fontSize: 30, marginRight: 3, color: "#e5e5e5" }} />
      </Box>
      <Box sx={styles_drawer.parent_tabs}>
        <Box sx={styles_drawer.single_tab}>
          <Typography>1</Typography>
          <Typography>Payment Type</Typography>
        </Box>
        <Box sx={styles_drawer.single_tab}>
          <Typography>-------------------</Typography>
          <Typography>2</Typography>
          <Typography>Delivery Address</Typography>
        </Box>
        <Box sx={styles_drawer.single_tab}>
          <Typography>-------------------</Typography>
          <Typography>3</Typography>
          <Typography>Confirm Order</Typography>
        </Box>
      </Box>
      {currentPageForm === "payment-form" && (
        <Typography sx={{ width: "80%", margin: "0 auto", fontWeight: "bold" }}>
          Choose payment method
        </Typography>
      )}
      {currentPageForm === "address-form" && (
        <Typography sx={{ width: "80%", margin: "0 auto", fontWeight: "bold" }}>
          Fill delivery address
        </Typography>
      )}
      <Box
        sx={{
          minHeight: "50%",
          // border: "solid blue 2px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {currentPageForm === "payment-form" && (
          <Box sx={styles_drawer.parent_payments}>
            <Box
              sx={styles_drawer.single_payment}
              onClick={handleOnlinePaymentButton}
            >
              <Typography sx={{ fontWeight: "bold", paddingLeft: "10px" }}>
                Online Payment
              </Typography>
              <Typography sx={{ fontFamily: "italic", paddingLeft: "10px" }}>
                Pay securely by card through Stripe. Fast and confirmed
                instantly
              </Typography>
              <AttachMoneyIcon sx={{ color: "green", alignSelf: "end" }} />
            </Box>
            <Box
              sx={styles_drawer.single_payment}
              onClick={handleCashPaymentButton}
            >
              <Typography sx={{ fontWeight: "bold", paddingLeft: "10px" }}>
                Cash on Delivery
              </Typography>
              <Typography sx={{ fontFamily: "italic", paddingLeft: "10px" }}>
                Pay with cash when your order arrives.
              </Typography>
              <AttachMoneyIcon sx={{ color: "green", alignSelf: "end" }} />
            </Box>
          </Box>
        )}
        {currentPageForm === "address-form" && (
          <Box component="form" sx={styles_drawer.parent_address}>
            <TextField
              id="outlined-start-adornment"
              name="fullName"
              label="Full Name"
              variant="outlined"
              size="small"
              sx={styles_drawer.single_input}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                },
              }}
              onChange={handleChange}
              value={formData.fullName}
            />
            <TextField
              id="outlined-basic"
              name="email"
              label="Email"
              variant="outlined"
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                },
              }}
              sx={styles_drawer.single_input}
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="phone"
              label="Phone Number"
              variant="outlined"
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                },
              }}
              sx={styles_drawer.single_input}
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="address"
              label="Address"
              variant="outlined"
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                },
              }}
              sx={styles_drawer.single_input}
              value={formData.address}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="apt"
              label="Apt"
              variant="outlined"
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                },
              }}
              sx={styles_drawer.single_input}
              value={formData.apt}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="city"
              label="City"
              variant="outlined"
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                },
              }}
              sx={styles_drawer.single_input}
              value={formData.city}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="province"
              label="Province"
              variant="outlined"
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                },
              }}
              sx={styles_drawer.single_input}
              value={formData.province}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="postalCode"
              label="Postal Code"
              variant="outlined"
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                },
              }}
              sx={styles_drawer.single_input}
              value={formData.postalCode}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="country"
              label="Country"
              variant="outlined"
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                },
              }}
              sx={styles_drawer.single_input}
              value={formData.country}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="deliveryInstruction"
              label="Delivery Instruction"
              variant="outlined"
              multiline
              minRows={4}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                },
              }}
              sx={{
                ...styles_drawer.single_input,
                width: "100%",
              }}
              value={formData.deliveryInstruction}
              onChange={handleChange}
            />
          </Box>
        )}
      </Box>
      <Box sx={styles_drawer.next_back_parent}>
        <Button
          sx={{
            border: "solid #14213d 1px",
            backgroundColor: "#fca311",
            color: "#14213d",
            width: "140px",
          }}
          onClick={handleBackButton}
        >
          Back
        </Button>
        <Button
          sx={{
            border: "solid #14213d 1px",
            backgroundColor: "#fca311",
            color: "#14213d",
            width: "140px",
          }}
          onClick={handleNextButton}
        >
          Next
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={styles.parent_mycart}>
      <Box sx={styles.cart_title}>
        <Typography sx={styles.your_cart_title}>
          {" "}
          My Cart <ShoppingCartIcon sx={{}} />{" "}
        </Typography>
        <Link
          href={`/`}
          style={{
            color: "#e5e5e5",
            // border: "solid 1px white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "2px",
            marginLeft: "15px",
          }}
        >
          <ArrowBackIcon style={{}} /> Continue Shopping
        </Link>
      </Box>
      <Box sx={styles.sub_parent}>
        {cartProducts.length > 0 ? (
          <Box sx={styles.carts_all}>
            {cartProducts.map((item, index) => (
              <Box key={index} sx={styles.info_cart_single}>
                <Box
                  sx={{
                    ...styles.cart_image_item,
                    backgroundImage: `url(${item.images[0]})`,
                  }}
                ></Box>
                <Box sx={styles.typo_info}>
                  <Typography sx={styles.typo_name}>{item.name}</Typography>
                  <Typography sx={styles.typo_category}>
                    {item.category}
                  </Typography>
                  <Typography sx={styles.typo_price}>
                    {item.price} CAD
                  </Typography>
                </Box>
                <Box
                  sx={styles.icon_delete}
                  onClick={() => handleDeleteItem(item._id)}
                >
                  <DeleteIcon
                    sx={{
                      fontSize: "1.8rem",
                      alignSelf: "center",
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        ) : (
          <Box sx={styles.carts_empty}>
            <Typography
              sx={{
                color: "#e0e0e0",
                fontSize: "3rem",
                textAlign: "center",
              }}
            >
              Cart Empty <RemoveShoppingCartIcon fontSize="" />
            </Typography>
            <Typography
              sx={{
                color: "#e0e0e0",
                fontSize: "3rem",
                textAlign: "center",
              }}
            >
              Cart Empty <RemoveShoppingCartIcon fontSize="" />
            </Typography>
            <Typography
              sx={{
                color: "#e0e0e0",
                fontSize: "3rem",
                textAlign: "center",
              }}
            >
              Cart Empty <RemoveShoppingCartIcon fontSize="" />
            </Typography>
          </Box>
        )}

        <Box sx={styles.reciept_cart}>
          <Box
            sx={{
              width: isXs
                ? "60%"
                : isSm
                ? "35%"
                : isMd
                ? "30%"
                : isLg
                ? "20%"
                : isXl
                ? "18%"
                : "100%",
              // border: "solid green 2px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                marginBottom: "5px",
                fontWeight: 700,
                // border: "solid blue 2px",
              }}
            >
              Subtotal: {sub_total} CAD
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                marginBottom: "5px",
                fontWeight: 700,
                // border: "solid blue 2px",
              }}
            >
              Delivery fee: {delivery_price} CAD
            </Typography>
            <Typography
              sx={{
                // fontSize: "1.2rem",
                fontWeight: 700,
                borderTop: "solid #14213d 1px",
                width: "90%",

                // border: "solid blue 2px",
              }}
            >
              TOTAL: {total_price} CAD
            </Typography>
            <Button
              sx={styles.checkout_button}
              onClick={toggleFormDrawer(true)}
            >
              Checkout
            </Button>
            <Drawer
              open={openDrawer}
              onClose={toggleFormDrawer(false)}
              anchor="top"
            >
              {DrawerList}
            </Drawer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
// q6kdsgioccyd9mwgiixk
// https://res.cloudinary.com/dckp14oxv/image/upload/q6kdsgioccyd9mwgiixk.png
