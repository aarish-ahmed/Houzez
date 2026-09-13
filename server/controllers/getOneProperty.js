import prisma from "../lib/prisma.js";

const getOneProperty = async (req, res) => {
    try {
        const {id}= req.params
       
    const property=await prisma.property.findUnique({
        where:{
            id:id
        }
    })
   
    if(!property){
        return res.status(201).json({
            message:'no property found'
        })
    }
    return res.status(201).json(property)
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
export default getOneProperty