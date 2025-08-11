// seed.js
import mongoose from "mongoose";
import Product from "./src/models/Product.js";
import dotenv from "dotenv";
import products from "./src/dummyData/dummy_data.json" assert { type: "json" };

dotenv.config({ path: ".env.local" });

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected");

    await Product.deleteMany({});
    console.log("🗑️ Existing products cleared");

    await Product.insertMany(products);
    console.log(`✅ ${products.length} products inserted`);

    process.exit();
  } catch (err) {
    console.error("❌ Error seeding data:", err);
    process.exit(1);
  }
}

seedData();
