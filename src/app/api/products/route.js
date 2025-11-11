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
      stock,
    } = body;

    console.log("44", body);

    if (
      !name ||
      !description ||
      !price ||
      !retail_price ||
      !category ||
      !condition ||
      !stock
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
      images,
      stock,
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

export async function PUT(request) {
  await dbConnect();

  try {
    const body = await request.json();
    const { product_id, stock } = body;

    if (!product_id || stock === undefined) {
      return NextResponse.json(
        {
          message: "Product Id and new stock value are required",
        },
        { status: 400 }
      );
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      product_id,
      { stock },
      { new: true }
    );

    if (!updatedProduct) {
      return NextResponse.json(
        {
          message: "Product not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    console.error("Error updating stock:", error);
    return NextResponse.json(
      {
        message: "Failed to update product stock:",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request) {
  await dbConnect();

  try {
    const body = await request.json();
    const { product_id } = body;

    if (!product_id) {
      return NextResponse.json(
        {
          message: "Product Id required",
        },
        {
          status: 400,
        }
      );
    }

    const deletedProduct = await Product.findByIdAndDelete(product_id);

    if (!deletedProduct) {
      return NextResponse.json(
        {
          message: "Product not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(deletedProduct, { status: 200 });
  } catch (error) {
    console.error("Error deleting stock: ", error);
    return NextResponse.json(
      {
        message: "Failed to delete product stock",
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
