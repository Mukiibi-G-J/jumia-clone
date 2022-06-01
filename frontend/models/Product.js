import mongoose from 'mongoose';
// mongodb+srv://admin:<password>@cluster0.db9hx.mongodb.net/?retryWrites=true&w=majority

const productSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    //! This is an array, meaning a category possess the capability to have Many products
    description: [
      {
        name: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        brand: { type: String, required: true },
        rating: { type: Number, required: true, default: 0 },
        numReviews: { type: Number, required: true, default: 0 },
        countInStock: { type: Number, required: true, default: 0 },
        description: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
