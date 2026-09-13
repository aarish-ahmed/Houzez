import prisma from '../lib/prisma.js'

const getProperty = async (req, res) => {
  try {
    const properties = await prisma.property.findMany({
      orderBy: {
        createdAt: 'desc' // optional: orders by newest first
      }
    });

    // Always send status 200 and the array directly
    return res.status(200).json(properties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    return res.status(500).json({ error: "Failed to fetch properties" });
  }
};

export default getProperty;