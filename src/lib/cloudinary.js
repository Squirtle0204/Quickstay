import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "zz8mvofv",
  api_key: process.env.CLOUDINARY_API_KEY || "487598767196557",
  api_secret: process.env.CLOUDINARY_API_SECRET || "0D6kB-cx6mgec0rI3r-GyW5IEUo",
});

export default cloudinary;
