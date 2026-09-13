import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const addPropertyApi = async (propertyData) => {
  try {
    const res = await axios.post(
      `${API_URL}/api/properties/create`,
      propertyData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return { data: res.data };
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

export const getPropertyApi = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/properties/all`);

    // Ensure the returned data is an array
    const properties = res.data;
    return Array.isArray(properties) ? properties : [];
  } catch (error) {
    console.error("Failed to fetch properties:", error?.response?.data || error.message);
    return []; // Return an empty array so consumers never receive undefined
  }
};

export const getOneProperty = async (pid) => {
  try {
    const res = await axios.get(
      `${API_URL}/api/properties/${pid}`
    );

    const property = res.data;
    return property;
  } catch (error) {
    console.error(error);
  }
};