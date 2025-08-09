import React from "react";
import { Box, Typography, Button } from "@mui/material";

const styles = {
  //   categoryBox_parent: { border: "solid red 2px" },
  category_Box: {
    // border: "solid green 1px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
    rowGap: "30px",
  },
  coffee_box: {
    // border: "solid blue 1px",
    display: "flex",
    flexDirection: "row",
    height: "160px",
    width: "40%",
    color: "#fff",
  },
  coffee_img: {
    width: "40%",
    height: "100%",
    backgroundImage: "url('/images/coffee_beans.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  furniture_img: {
    width: "40%",
    height: "100%",
    backgroundImage: "url('/images/furniture.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  pet_img: {
    width: "40%",
    height: "100%",
    backgroundImage: "url('/images/pet_toy.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  perfume_img: {
    width: "40%",
    height: "100%",
    backgroundImage: "url('/images/perfume.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  coffee_info_box: {
    // border: "solid yellow 2px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#14213d",
    width: "60%",
  },
  more_button: {
    backgroundColor: "#f97316",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "#e85d04",
    },
    width: "70%",
    height: "35px",
    fontSize: "1rem",
  },
};
function CategoryBox() {
  return (
    <Box sx={styles.categoryBox_parent}>
      <Typography
        variant="h4"
        component="div"
        sx={{ textAlign: "center", margin: "20px 0" }}
      >
        Categories{" "}
      </Typography>
      <Box sx={styles.category_Box}>
        <Box sx={styles.coffee_box}>
          <Box sx={styles.coffee_info_box}>
            <Typography variant="h6">Coffee</Typography>
            <Typography fontSize={"0.9rem"}>
              High-quality fresh green coffee beans and freshly roasted coffee
              beans
            </Typography>
            <Button sx={styles.more_button}>SEE MORE</Button>
          </Box>
          <Box sx={styles.coffee_img}></Box>
        </Box>
        <Box sx={styles.coffee_box}>
          <Box sx={styles.coffee_info_box}>
            <Typography variant="h6">Perfume</Typography>
            <Typography fontSize={"0.9rem"}>
              Premium-quality perfumes offering a wide variety of captivating
              scentsy
            </Typography>
            <Button sx={styles.more_button}>SEE MORE</Button>
          </Box>
          <Box sx={styles.perfume_img}></Box>
        </Box>
        <Box sx={styles.coffee_box}>
          <Box sx={styles.coffee_info_box}>
            <Typography variant="h6">Pet Toy</Typography>
            <Typography fontSize={"0.9rem"}>
              Durable and safe pet toys designed for endless fun and play
            </Typography>
            <Button sx={styles.more_button}>SEE MORE</Button>
          </Box>
          <Box sx={styles.pet_img}></Box>
        </Box>

        <Box sx={styles.coffee_box}>
          <Box sx={styles.coffee_info_box}>
            <Typography variant="h6">Furniture</Typography>
            <Typography fontSize={"0.9rem"}>
              High-quality, stylish furniture crafted for comfort and
              durability.
            </Typography>
            <Button sx={styles.more_button}>SEE MORE</Button>
          </Box>
          <Box sx={styles.furniture_img}></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CategoryBox;
