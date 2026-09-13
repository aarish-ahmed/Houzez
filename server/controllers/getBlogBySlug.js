import prisma from "../lib/prisma.js";

const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const blog = await prisma.blog.findUnique({
      where: {
        slug,
      },
    });

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      blog,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch blog",
    });
  }
};

export default getBlogBySlug;