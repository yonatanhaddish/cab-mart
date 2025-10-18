import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    payment_method: {
      type: String,
    },
    phone_number: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    apartment: {
      type: String,
    },
    city: {
      type: String,
    },
    province: {
      type: String,
    },
    postal_code: {
      type: String,
    },
    country: {
      type: String,
    },
    devivery_instruction: {
      type: String,
    },
    items: [
      {
        id: { type: String },
        name: { type: String },
        price: { type: Number },
        // quantity: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
