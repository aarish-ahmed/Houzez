import prisma from "../lib/prisma.js";

const getBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      blogs,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch blogs",
    });
  }
};

export default getBlogs;