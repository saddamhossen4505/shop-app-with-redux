import mongoose from "mongoose";

// Create categorySchema.
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    short_desc: {
      type: String,
      trim: true,
      default: null,
    },
    long_desc: {
      type: String,
      trim: true,
      default: null,
    },
    stock: {
      type: Number,
      default: null,
    },
    regular_price: {
      type: Number,
      required: true,
    },
    sales_price: {
      type: Number,
      default: null,
    },
    photo: {
      type: String,
      trim: true,
      default: null,
    },
    gallery: {
      type: [String],
      trim: true,
      default: null,
    },
    categories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Category",
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Tag",
    },
    brands: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Brand",
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// ExportModel.
export default mongoose.model("Product", productSchema);
