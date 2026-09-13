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
    const res = await axios.get(
      `${API_URL}/api/properties/all`
    );

    const properties = res.data;
    return properties;
  } catch (error) {
    console.error(error);
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