import cloudinary from "../lib/cloudinary";

export async function uploadToCloudinary(file) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const base64 = buffer.toString("base64");
  const dataURL = `data:${file.type};base64,${base64}`;

  try {
    const result = await cloudinary.uploader.upload(dataURL, {
      folder: "airbnb-clone-tutorial",
      transformation: [{ format: "webp" }],
    });

    return {
      secure_url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    console.dir(error, { depth: null });
    throw error;
  }
}
