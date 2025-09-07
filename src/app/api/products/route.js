import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongoose";
import Product from "../../../models/Product";

export async function GET(request) {
  await dbConnect();

  const url = new URL(request.url);
  const category = url.searchParams.get("category");

  if (category) {
    const products = await Product.find({ category }).lean();
    return NextResponse.json(products, { status: 200 });
  } else {
    const products = await Product.find().lean();
    return NextResponse.json(products, { status: 200 });
  }
}

export async function POST(request) {
  await dbConnect();

  try {
    const body = await request.json();
    const {
      name,
      description,
      retailPrice: retail_price,
      price,
      category,
      condition,
      images,
    } = body;

    console.log("44", body);

    if (
      !name ||
      !description ||
      !price ||
      !retail_price ||
      !category ||
      !condition
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const newProduct = await Product.create({
      name,
      description,
      retail_price,
      price,
      category,
      condition,
      images, // array of Cloudinary URLs
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to create product", error: error.message },
      { status: 500 }
    );
  }
}
