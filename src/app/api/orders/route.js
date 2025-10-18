import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongoose";
import Order from "../../../models/Order";

export async function POST(request) {
  console.log("999", request);

  await dbConnect();

  try {
    const body = await request.json();
    const {
      fullName,
      payment_method,
      phone_number,
      email,
      apartment,
      city,
      province,
      postal_code,
      country,
      devivery_instruction,
      items,
    } = body;

    const newOrder = await Order.create({
      fullName,
      payment_method,
      phone_number,
      email,
      apartment,
      city,
      province,
      postal_code,
      country,
      devivery_instruction,
      items,
    });

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to create order",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
