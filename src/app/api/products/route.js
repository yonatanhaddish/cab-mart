import dbConnect from "../../../lib/mongoose";
import Product from "../../../models/Product";

export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    // Build filter object
    const filter = category ? { category } : {};

    // Fetch products from MongoDB
    const products = await Product.find(filter).lean();

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to fetch products",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
