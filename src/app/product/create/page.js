"use client";
import React, { useState } from "react";
import ImageUplaoder from "../../../components/ImageUploader/ImageUplaoder";

import { Box } from "@mui/material";

export default function Page() {
  return (
    <Box
      style={{
        // border: "solid 4px red",
        minHeight: "100vh",
        backgroundColor: "#F3EBDD",
      }}
    >
      <ImageUplaoder />
    </Box>
  );
}
