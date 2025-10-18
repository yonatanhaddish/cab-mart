import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    name: {
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
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
