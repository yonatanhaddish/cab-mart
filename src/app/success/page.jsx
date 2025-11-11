import { redirect } from "next/navigation";

import { stripe } from "../../lib/stripe";

import Link from "next/link";
import { NextResponse } from "next/server";

import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import useCart from "../../utils/useCart";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const {
    status,
    customer_details: { email: customerEmail },
    metadata,
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete" && metadata?.orderId) {
    const test = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderId: metadata.orderId,
        payment_status: "paid",
      }),
    });

    return (
      <section
        id="success"
        style={{ backgroundColor: "#F3EBDD", height: "100vh" }}
      >
        <nav
          style={{ height: "40px", width: "100%", backgroundColor: "#14213d" }}
        >
          <Link
            href={`/`}
            style={{
              color: "#e5e5e5",
              //   border: "solid 1px white",
              textDecoration: "none",
              display: "flex",
              marginRight: "30px",
              height: "100%",
              width: "fit-content",
              alignItems: "center",
              cursor: "pointer",
              justifySelf: "end",
            }}
          >
            Close
          </Link>
        </nav>
        <div
          style={{
            width: "90%",
            margin: "0 auto",
            fontSize: "1.1rem",
            marginTop: "60px",
          }}
        >
          <InsertEmoticonIcon sx={{ color: "green", fontSize: "2rem" }} />
          <p>
            We appreciate your order! You’ll receive a confirmation email
            shortly at {customerEmail}.
          </p>
          <p>
            If you need help or have any questions, our team is always happy to
            assist at <a href="mailto:orders@example.com">orders@example.com</a>
          </p>
          <p> Thanks again for choosing us!</p>
          <p style={{ fontWeight: "bold", color: "#14213d" }}>Cab Mart</p>
        </div>
      </section>
    );
  }

  console.log("test");
}
