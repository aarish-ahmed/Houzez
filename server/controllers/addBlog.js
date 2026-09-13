import cloudinary from "../lib/cloudinary.js";
import prisma from "../lib/prisma.js";

const addBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      author,
      excerpt,
      content,
    } = req.body;
    
    console.log(req.body)
    const image = req.file;
    console.log(image)

    if (!image) {
      return res.status(400).json({
        message: "No cover image provided",
      });
    }

    const b64 = Buffer.from(image.buffer).toString("base64");
    const dataURI = `data:${image.mimetype};base64,${b64}`;

    const uploadToCloudinary = await cloudinary.uploader.upload(dataURI, {
      folder: "blogs",
    });
    console.log(uploadToCloudinary)

    const coverImage = uploadToCloudinary.secure_url;

    const newBlog = await prisma.blog.create({
      data: {
        title,
        slug,
        author,
        excerpt,
        content,
        coverImage,
      },
    });
   console.log(newBlog)
    return res.status(201).json({
      blog: newBlog,
      message: "Blog created successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default addBlog;