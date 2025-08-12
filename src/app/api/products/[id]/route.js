import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongoose";
import mongoose from "mongoose";
import Product from "../../../../models/Product";

export async function GET(request, context) {
  const params = await context.params;

  const { id } = params;

  await dbConnect();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
  }

  const product = await Product.findById(id).lean();
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(product, { status: 200 });
}
