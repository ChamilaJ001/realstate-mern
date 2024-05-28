import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    address: {
      country: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      zip: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
    },
    property: {
      area: {
        type: String,
        required: true,
      },
      bedrooms: {
        type: String,
        required: true,
      },
      bathrooms: {
        type: String,
        required: true,
      },
      parking: {
        type: String,
        required: true,
      },
      amenteties: [
        {
          type: String,
          required: true,
        },
      ],
      pets: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
    price: {
      currencyType: {
        type: String,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
      period: {
        type: String,
        required: true,
      },
    },
    photos: [
      {
        type: String,
        required: true,
      },
    ],
    user_id: {
      type: String,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Property", propertySchema);
