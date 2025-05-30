import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  console.log("Cloudinary Config:", {
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET, // Corrected key name
  }); // Debugging log

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET, // Corrected key name
  });
};

export default connectCloudinary;
