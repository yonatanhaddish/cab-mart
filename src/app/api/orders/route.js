import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongoose";
import Order from "../../../models/Order";

export async function POST(request) {
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
      delivery_instruction,
      items,
      payment_status,
      total_price,
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
      delivery_instruction,
      items,
      payment_status,
      total_price,
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

export async function PUT(request) {
  await dbConnect();

  try {
    const { orderId, payment_status } = await request.json();

    if (!orderId) {
      return NextResponse.json(
        { error: "Order ID is required" },
        { status: 400 }
      );
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { payment_status: payment_status || "paid" },
      { new: true }
    );

    if (!updatedOrder) {
      return NextResponse.json(
        {
          message: "Order not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Order updated successfully",
      order: updatedOrder,
    });
  } catch (error) {
    console.error("Order update error:", error);
    return NextResponse.json(
      {
        message: "Failed to update order payment status",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
