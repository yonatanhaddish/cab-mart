import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    retail_price: { type: Number, required: true }, // retail price
    price: { type: Number, required: true }, // selling price
    category: { type: String, required: true },
    condition: { type: String, default: "new" },
    images: [String],
    stock: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
