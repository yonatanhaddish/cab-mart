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
