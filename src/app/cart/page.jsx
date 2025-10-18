"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CircularProgress from "@mui/material/CircularProgress";
import DoneIcon from "@mui/icons-material/Done";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import {
  Box,
  Typography,
  Drawer,
  useMediaQuery,
  Button,
  Popover,
} from "@mui/material";
import useCart from "../../utils/useCart";

import InputAdornment from "@mui/material/InputAdornment";

function Cart() {
  const { getCart, removeFromCart } = useCart();
  const [cartProducts, setCartProducts] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedPaymentStyle, setSelectedPaymentStyle] = useState("");
  const [currentPageForm, setCurrentPageForm] = useState("payment-form");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errorMessageSnippet, setErrorMessageSnippet] = useState("");
  const [errorPopover, setErrorPopover] = useState(false);
  const [orderClicked, setOrderClicked] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
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
  const [confirmedCheckBox, setConfirmedCheckBox] = useState(false);
  const [buttonText, setButtonText] = useState("Next");

  const router = useRouter();

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
    },
    close_box: {
      // border: "solid white 2px",
      height: "50px",
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
      backgroundColor: "#14213d",
      cursor: "pointer",
    },
    parent_tabs: {
      // border: "solid green 2px",
      display: "flex",
      justifyContent: "center",
      margin: "0 auto",
      width: isXs
        ? "90%"
        : isSm
        ? "80%"
        : isMd
        ? "70%"
        : isLg
        ? "60%"
        : isXl
        ? "50%"
        : "80%",
      gap: isXs
        ? "20px"
        : isMd
        ? "50px"
        : isLg
        ? "100px"
        : isXl
        ? "150px"
        : "30px",
      marginTop:
        isXs || isSm
          ? "30px"
          : isMd
          ? "50px"
          : isLg
          ? "30px"
          : isXl
          ? "50px"
          : "",
    },
    single_tab: {
      display: "flex",
      gap: "10px",
    },
    single_tab_payment: {
      borderBottom: `1px solid ${
        currentPageForm === "address-form" || currentPageForm === "check-form"
          ? "#fca311"
          : "grey"
      }`,
    },
    single_tab_address: {
      borderBottom: `1px solid ${
        currentPageForm === "check-form" ? "#fca311" : "grey"
      }`,
    },
    single_tab_confirm_order: {
      borderBottom: `1px solid ${confirmedCheckBox ? "#fca311" : "grey"}`,
    },
    parent_payments: {
      // border: "solid green 2px",
      display: "flex",
      flexDirection: isXs || isSm || isLg || isXl ? "column" : "row",
      gap: isXs || isSm || isMd || isLg || isXl ? "40px" : "",
      width: isXs
        ? "80%"
        : isSm
        ? "60%"
        : isMd
        ? "50%"
        : isLg
        ? "40%"
        : isXl
        ? "25%"
        : "100%",
      height: isXs
        ? "450px"
        : isSm
        ? "600px"
        : isMd
        ? "600px"
        : isLg
        ? "300px"
        : isXl
        ? "400px"
        : "70%",
      margin: "0 auto",
      marginTop:
        isXs || isSm ? "40px" : isMd ? "50px" : isLg || isXl ? "40px" : "",
    },
    single_payment: {
      border: "solid grey 1px",
      boxShadow: "0 0 2px #14213d",
      width: isXs
        ? "100%"
        : isSm
        ? "80%"
        : isMd
        ? "45%"
        : isLg
        ? "80%"
        : isXl
        ? "80%"
        : "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      height: "120px",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.25s ease-in-out",
      margin: "0 auto",

      "&:hover": {
        border: "solid #fca311 1px",
        boxShadow: "0 0 6px #fca311",
        transform: "scale(1.05)",
      },
    },
    next_back_parent: {
      // border: "solid green 2px",
      width: isXs
        ? "80%"
        : isSm
        ? "60%"
        : isMd
        ? "50%"
        : isLg
        ? "40%"
        : isXl
        ? "25%"
        : "100%",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      marginTop: isXs || isSm || isMd ? "50px" : isLg || isXl ? "60px" : "",
    },
    parent_address: {
      // border: "solid blue 2px",
      width: isXs
        ? "80%"
        : isSm
        ? "60%"
        : isMd
        ? "50%"
        : isLg
        ? "40%"
        : isXl
        ? "25%"
        : "100%",
      height: isXs
        ? "450px"
        : isSm
        ? "600px"
        : isMd
        ? "600px"
        : isLg
        ? "300px"
        : isXl
        ? "400px"
        : "",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      margin: "0 auto",
      alignContent: "space-between",
      marginTop:
        isXs || isSm ? "40px" : isMd ? "50px" : isLg || isXl ? "40px" : "",
    },
    single_input: {
      // border: "solid red 2px",
      width: "100%",
      // height: "100%",
      // margin: "0 auto",
    },
    online_payment: {
      border:
        selectedPaymentStyle === "online_payment"
          ? "solid #fca311 1px"
          : "solid grey 1px",
      boxShadow:
        selectedPaymentStyle === "online_payment"
          ? "0 0 10px #fca311"
          : "0 0 2px #14213d",
    },
    cash_payment: {
      border:
        selectedPaymentStyle === "cash_payment"
          ? "solid #fca311 1px"
          : "solid grey 1px",
      boxShadow:
        selectedPaymentStyle === "cash_payment"
          ? "0 0 10px #fca311"
          : "0 0 2px #14213d",
    },
  };

  const toggleFormDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };
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

  useEffect(() => {
    if (currentPageForm === "check-form" && confirmedCheckBox) {
      setErrorPopover(false);
      setErrorMessageSnippet("");
    }
    if (
      currentPageForm === "check-form" &&
      paymentMethod === "online-payment"
    ) {
      setButtonText("Payment");
    }
    if (currentPageForm === "check-form" && paymentMethod === "cash-payment") {
      setButtonText("Place Order");
    }
    if (currentPageForm !== "check-form") {
      setButtonText("Next");
      setConfirmedCheckBox(false);
    }
  });

  const handleNextButton = async () => {
    if (currentPageForm === "payment-form" && paymentMethod !== "") {
      setCurrentPageForm("address-form");
    }
    if (currentPageForm === "payment-form" && paymentMethod === "") {
      setErrorMessageSnippet("please select payment method");
      setErrorPopover(true);
    }
    if (
      currentPageForm === "address-form" &&
      validateEmail(formData.email) &&
      validatePhoneNumber(formData.phone) &&
      validateFormData(formData)
    ) {
      setCurrentPageForm("check-form");
      setErrorPopover(false);
    }

    if (currentPageForm === "address-form" && !validateEmail(formData.email)) {
      setErrorMessageSnippet("Please enter valid email");
      setErrorPopover(true);
    }
    if (
      currentPageForm === "address-form" &&
      !validatePhoneNumber(formData.phone)
    ) {
      setErrorMessageSnippet("Please enter valid phone number");
      setErrorPopover(true);
    }
    if (currentPageForm === "address-form" && !validateFormData(formData)) {
      setErrorMessageSnippet("error! check form again");
      setErrorPopover(true);
    }
    if (currentPageForm === "check-form" && !confirmedCheckBox) {
      setErrorMessageSnippet("Please confirm the checkbox above");
      setErrorPopover(true);
    }
    if (
      currentPageForm === "check-form" &&
      confirmedCheckBox &&
      buttonText == "Place Order"
    ) {
      setOrderClicked(true);
      setOrderSuccess(false);

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          paymentMethod,
          phone_number: formData.phone,
          email: formData.email,
          apartment: formData.apt,
          city: formData.city,
          province: formData.province,
          postal_code: formData.postalCode,
          country: formData.country,
          devivery_instruction: formData.deliveryInstruction,
          quantity: 1,
        }),
      });

      const data = await res.json();

      if (data) {
        setTimeout(() => {
          setOrderSuccess(true);
          setOrderClicked(false);
        }, 1000);

        setTimeout(() => {
          router.push("/");
        }, 2000);
      }

      // console.log("Created order:", data);

      // console.log("formData:", formData, paymentMethod);
    }
  };

  const handleBackButton = () => {
    if (currentPageForm === "check-form") {
      setCurrentPageForm("address-form");
    }
    if (currentPageForm === "address-form") {
      setCurrentPageForm("payment-form");
    }
    if (currentPageForm === "payment-form") {
      setOpenDrawer(false);
      setSelectedPaymentStyle("");
      setPaymentMethod("");
      setFormData({
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
    }
    setErrorPopover(false);
    setErrorMessageSnippet("");
  };

  const handleCashPaymentButton = () => {
    setPaymentMethod("cash-payment");
    setSelectedPaymentStyle("cash_payment");
    setErrorPopover(false);
  };
  const handleOnlinePaymentButton = () => {
    setPaymentMethod("online-payment");
    setSelectedPaymentStyle("online_payment");
    setErrorPopover(false);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const validatePhoneNumber = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };
  const validateFormData = (data) => {
    if (
      data.address &&
      data.apt &&
      data.city &&
      data.country &&
      data.fullName &&
      data.phone &&
      data.postalCode &&
      data.province
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setFormData((prev) => ({
        ...prev,
        phone: value,
      }));
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleCheckBox = (e) => {
    setConfirmedCheckBox(e.target.checked);
  };

  const handleCloseIcon = (e) => {
    setOpenDrawer(false);
    setPaymentMethod("");
    setCurrentPageForm("payment-form");
    setSelectedPaymentStyle("");
    setFormData({
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
    setErrorMessageSnippet("");
    setErrorPopover(false);
  };

  const DrawerList = (
    <Box sx={styles_drawer.parent_drawer} role="presentation">
      <Box onClick={handleCloseIcon} sx={styles_drawer.close_box}>
        <CloseIcon sx={{ fontSize: 30, marginRight: 3, color: "#e5e5e5" }} />
      </Box>
      <Box sx={styles_drawer.parent_tabs}>
        <Box
          sx={{
            ...styles_drawer.single_tab,
            ...styles_drawer.single_tab_payment,
          }}
        >
          {currentPageForm === "address-form" ||
          currentPageForm === "check-form" ? (
            <CheckCircleOutlineIcon sx={{ color: "#fca311" }} />
          ) : (
            <LooksOneIcon sx={{ color: "grey" }} />
          )}
          <Typography>Payment Type</Typography>
        </Box>
        <Box
          sx={{
            ...styles_drawer.single_tab,
            ...styles_drawer.single_tab_address,
          }}
        >
          {currentPageForm === "check-form" ? (
            <CheckCircleOutlineIcon sx={{ color: "#fca311" }} />
          ) : (
            <LooksTwoIcon sx={{ color: "grey" }} />
          )}
          <Typography>Delivery Address</Typography>
        </Box>
        <Box
          sx={{
            ...styles_drawer.single_tab,
            ...styles_drawer.single_tab_confirm_order,
          }}
        >
          {confirmedCheckBox ? (
            <CheckCircleOutlineIcon sx={{ color: "#fca311" }} />
          ) : (
            <Looks3Icon sx={{ color: "grey" }} />
          )}
          <Typography>Confirm Order</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          // minHeight: "50%",
          // border: "solid red 2px",
          display: "flex",

          // gap: "20px",
        }}
      >
        {currentPageForm === "payment-form" && (
          <Box sx={styles_drawer.parent_payments}>
            <Box
              sx={{
                ...styles_drawer.single_payment,
                ...styles_drawer.online_payment,
              }}
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
              sx={{
                ...styles_drawer.single_payment,
                ...styles_drawer.cash_payment,
              }}
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
              required
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
              type="email"
              label="Email (optional)"
              variant="outlined"
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                },
              }}
              sx={{
                ...styles_drawer.single_input,
                width: isLg || isXl ? "55%" : "100%",
              }}
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              required
              id="outlined-basic"
              name="phone"
              type="tel"
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
              inputProps={{
                inputMode: "numeric", // mobile shows number keypad
                pattern: "[0-9]*", // digits only
                maxLength: 10, // restrict to 10 digits
              }}
              sx={{
                ...styles_drawer.single_input,
                width: isLg || isXl ? "40%" : "100%",
              }}
              value={formData.phone}
              onChange={handlePhoneChange}
            />
            <TextField
              required
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
              sx={{
                ...styles_drawer.single_input,
                width: isXs ? "70%" : isLg ? "50%" : isXl ? "70%" : "100%",
              }}
              value={formData.address}
              onChange={handleChange}
            />
            <TextField
              required
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
              sx={{
                ...styles_drawer.single_input,
                width: isXs ? "25%" : isLg ? "20%" : isXl ? "25%" : "100%",
              }}
              value={formData.apt}
              onChange={handleChange}
            />
            <TextField
              required
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
              sx={{
                ...styles_drawer.single_input,
                width: isXs ? "55%" : isLg ? "25%" : isXl ? "45%" : "100%",
              }}
              value={formData.city}
              onChange={handleChange}
            />
            <TextField
              required
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
              sx={{
                ...styles_drawer.single_input,
                width: isXs ? "40%" : isLg ? "30%" : isXl ? "45%" : "100%",
              }}
              value={formData.province}
              onChange={handleChange}
            />
            <TextField
              required
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
              sx={{
                ...styles_drawer.single_input,
                width: isXs ? "45%" : isLg ? "30%" : isXl ? "45%" : "100%",
              }}
              value={formData.postalCode}
              onChange={handleChange}
            />
            <TextField
              required
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
              sx={{
                ...styles_drawer.single_input,
                width: isXs ? "45%" : isLg ? "30%" : isXl ? "45%" : "100%",
              }}
              value={formData.country}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="deliveryInstruction"
              label="Delivery Instruction (optional)"
              variant="outlined"
              multiline
              minRows={2}
              maxRows={3}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                },
              }}
              inputProps={{ maxLength: 120 }}
              sx={{
                ...styles_drawer.single_input,
              }}
              value={formData.deliveryInstruction}
              onChange={handleChange}
            />
          </Box>
        )}
        {currentPageForm === "check-form" && (
          <Box
            sx={{
              width: isXs
                ? "80%"
                : isSm
                ? "60%"
                : isMd
                ? "50%"
                : isLg
                ? "55%"
                : isXl
                ? "25%"
                : "100%",
              // border: "solid green 2px",
              margin: "0 auto",
              height: isXs
                ? "450px"
                : isSm
                ? "600px"
                : isMd
                ? "600px"
                : isLg
                ? "300px"
                : isXl
                ? "400px"
                : "70%",
              display: "flex",
              flexDirection: "column",
              marginTop:
                isXs || isSm
                  ? "40px"
                  : isMd
                  ? "50px"
                  : isLg || isXl
                  ? "40px"
                  : "",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: isXs ? "" : isSm ? "7px" : "",
                // border: "solid red 2px",
              }}
            >
              <Typography
                sx={{
                  width: "80%",
                  margin: isMd || isXl ? "" : "0 auto",
                  // border: "solid red 2px",
                  display: "flex",
                  // justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Payment Method: </span>
                <span style={{ fontStyle: "italic" }}>{paymentMethod}</span>
              </Typography>
              <Typography
                sx={{
                  width: "80%",
                  margin: isMd || isXl ? "" : "0 auto",
                  display: "flex",
                  // justifyContent: "space-between",
                  // border: "solid red 2px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Name: </span>
                <span style={{ fontStyle: "italic" }}>{formData.fullName}</span>
              </Typography>
              <Typography
                sx={{
                  width: "80%",
                  margin: isMd || isXl ? "" : "0 auto",
                  display: "flex",
                  // justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Phone Number: </span>
                <span style={{ fontStyle: "italic" }}>{formData.phone}</span>
              </Typography>
              <Typography
                sx={{
                  width: "80%",
                  margin: isMd || isXl ? "" : "0 auto",
                  display: "flex",
                  // justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Email: </span>
                <span style={{ fontStyle: "italic" }}>{formData.email}</span>
              </Typography>
              <Typography
                sx={{
                  width: "80%",
                  margin: isMd || isXl ? "" : "0 auto",
                  display: "flex",
                  // justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Address: </span>
                <span style={{ fontStyle: "italic" }}>{formData.address}</span>
              </Typography>
              <Typography
                sx={{
                  width: "80%",
                  margin: isMd || isXl ? "" : "0 auto",
                  display: "flex",
                  // justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Apartment Number: </span>
                <span style={{ fontStyle: "italic" }}>{formData.apt}</span>
              </Typography>
              <Typography
                sx={{
                  width: "80%",
                  margin: isMd || isXl ? "" : "0 auto",
                  // display: "flex",
                  // justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold" }}>City: </span>
                <span style={{ fontStyle: "italic" }}>{formData.city}</span>
              </Typography>
              <Typography
                sx={{
                  width: "80%",
                  margin: isMd || isXl ? "" : "0 auto",
                  display: "flex",
                  // justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Province: </span>
                <span style={{ fontStyle: "italic" }}>{formData.province}</span>
              </Typography>
              <Typography
                sx={{
                  width: "80%",
                  margin: isMd || isXl ? "" : "0 auto",
                  display: "flex",
                  // justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Postal Code: </span>
                <span style={{ fontStyle: "italic" }}>
                  {formData.postalCode}
                </span>
              </Typography>
              <Typography
                sx={{
                  width: "80%",
                  margin: isMd || isXl ? "" : "0 auto",
                  display: "flex",
                  // justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Country: </span>
                <span style={{ fontStyle: "italic" }}>{formData.country}</span>
              </Typography>
              <Typography
                sx={{
                  width: "80%",
                  margin: isMd || isXl ? "" : "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  wordWrap: "break-word",
                  overflowWrap: "anywhere",
                  whiteSpace: "pre-wrap",
                  // border: "solid green 2px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  Delivery Instruction:
                </span>
                <span style={{ fontStyle: "italic" }}>
                  {formData.deliveryInstruction}
                </span>
              </Typography>
            </Box>
            <Box
              sx={{
                width: isLg ? "100%" : "80%",
                margin: isMd || isLg || isXl ? "" : "0 auto",
                // paddingTop: "20px",
                fontStyle: "italic",
                // border: "solid red 2px",
                marginTop: isXs
                  ? "30px"
                  : isSm
                  ? "50px"
                  : isMd || isXl
                  ? "50px"
                  : "",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckBox}
                    checked={confirmedCheckBox}
                  />
                }
                label="I confirm that my order details are correct and cannot be modified after submission."
              />
            </Box>
          </Box>
        )}
      </Box>
      <Box sx={styles_drawer.next_back_parent}>
        <div
          style={{
            // border: "2px solid red",
            width: "140px",
            height: "80px",
          }}
        >
          <Button
            sx={{
              border: "solid #14213d 1px",
              backgroundColor: "#fca311",
              color: "#14213d",
              width: "140px",
              height: "55%",
            }}
            onClick={handleBackButton}
          >
            Back
          </Button>
        </div>
        <div
          style={{
            // border: "2px solid red",
            width: "140px",
            height: "80px",
          }}
        >
          <Button
            sx={{
              border: "solid #14213d 1px",
              backgroundColor: "#fca311",
              color: "#14213d",
              width: "100%",
              height: "55%",
            }}
            onClick={handleNextButton}
          >
            {orderClicked ? (
              <CircularProgress size={24} sx={{ color: "#14213d" }} />
            ) : orderSuccess ? (
              <DoneIcon sx={{ color: "green" }} />
            ) : (
              <>
                {buttonText}
                {buttonText === "Payment" && (
                  <ArrowRightAltIcon sx={{ ml: 1 }} />
                )}
              </>
            )}
          </Button>
          {errorPopover && (
            <Box sx={{ color: "red" }}>{errorMessageSnippet}</Box>
          )}
        </div>
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
