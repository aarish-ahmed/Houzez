import cloudinary from "../lib/cloudinary.js";
import prisma from "../lib/prisma.js";


const createProperty = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      location,
      propertyType,
      listingType,
      status,
      bedrooms,
      bathrooms,
      area,
    } = req.body;

    const images = req.files;

    if (!images || images.length === 0) {
      return res.status(400).json({ message: "No images provided" });
    }

    const uploadtoCloudinary = await Promise.all(
      images.map((image) => {
        const b64 = Buffer.from(image.buffer).toString("base64");
        const dataURI = `data:${image.mimetype};base64,${b64}`;
        return cloudinary.uploader.upload(dataURI, {
          folder: "properties",
        });
      })
    );

    const imageUrls = uploadtoCloudinary.map((result) => result.secure_url);
    
    const newProperty = await prisma.property.create({
      data: {
        title,
        description,
        price: Number(price),
        location,
        propertyType,
        listingType,
        status,
        bedrooms: Number(bedrooms),
        bathrooms: Number(bathrooms),
        area: Number(area),
        images: imageUrls,
      },
    });
   
    
    return res.status(201).json({
      property: newProperty,
      message: "property created succesfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default createProperty;