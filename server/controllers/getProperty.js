import prisma from '../lib/prisma.js'
import redis from '../lib/redis.js';

const getProperty = async (req, res) => {
  try {
    const cacheKey='properties:all'
    const cachedProperties=await redis.get(cacheKey)
    
    if(cachedProperties){
      return res.status(200).json(JSON.parse(cachedProperties));
    }
    const properties = await prisma.property.findMany({
      orderBy: {
        createdAt: 'desc' 
      }
    });

   await redis.set(
    cacheKey,
    JSON.stringify(properties),
    {
      EX: 60*5
    }
   )
    return res.status(200).json(properties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    return res.status(500).json({ error: "Failed to fetch properties" });
  }
};

export default getProperty;