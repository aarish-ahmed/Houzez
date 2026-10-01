import prisma from "../lib/prisma.js";
import redis from "../lib/redis.js";

const getBlogs = async (req, res) => {
  try {
      const cacheKey='blogs:all'
    const cachedBlogs=await redis.get(cacheKey)
    if (cachedBlogs) {
      console.log("Blogs served from Redis");

      return res.status(200).json({
        blogs: JSON.parse(cachedBlogs),
      });
    }

    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    await redis.set(
    cacheKey,
    JSON.stringify(blogs),
    {
      EX: 60*5
    }
   )
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