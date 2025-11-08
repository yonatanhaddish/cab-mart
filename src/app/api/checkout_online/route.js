import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "../../../lib/stripe";

import dbConnect from "../../../lib/mongoose";
import Order from "../../../models/Order";

export async function POST(req) {
  try {
    const headersList = headers();
    const origin = headersList.get("origin");

    const body = await req.json();
    const { total_price, formData, cartProducts } = body;

    // Validate total price
    if (!total_price || total_price <= 0) {
      return NextResponse.json(
        { error: "Invalid total price" },
        { status: 400 }
      );
    }

    await dbConnect();
    let newOrder;
    try {
      newOrder = await Order.create({
        ...formData,
        items: cartProducts.map((item) => ({
          id: item._id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          total_price: item.quantity * item.price,
        })),
        total_price,
        payment_status: "pending",
      });
    } catch (error) {
      console.error("Failed to create order", error);
    }

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "cad", // Change to your preferred currency
            product_data: {
              name: "Order Total",
              description: "Your order total",
            },
            unit_amount: Math.round(total_price * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
      metadata: {
        orderId: newOrder._id.toString(),
      },
    });

    // Return the session URL as JSON response
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}
