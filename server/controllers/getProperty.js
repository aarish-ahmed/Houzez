import prisma from '../lib/prisma.js'

const getProperty = async (req, res) => {
    
    const properties=await prisma.property.findMany()
    
    if(!properties){
        return res.status(201).json({
            message:'No Properties Found'
        })
    }
    
    return res.status(201).json(properties)
};
export default getProperty