
const editProperty = async (req, res) => {
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
};  
export default editProperty