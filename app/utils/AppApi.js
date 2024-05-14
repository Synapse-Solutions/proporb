import axios from "axios";
import mime from "mime";

//***************** */ create an axios instance
const axiosClient = axios.create({
  baseURL: `https://proporb-staging-1d1681f54e44.herokuapp.com`,
});
// baseURL: "http://192.168.0.103:3000/",

//************* */ header config for api call
const headerConfig = (token) => ({
  headers: {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  },
});

//************** */ post api call without token
export const postApi = async (url, data) => {
  console.log("🚀 ~ postApi ~ data:", data);
  try {
    const response = await axiosClient.post(url, data);
    return response.data;
  } catch (error) {
    console.error("Error while login:", error.response.data);
    return error.response.data;
  }
};

//*************** */ post api call with token
export const postApiWithToken = async (url, data, token) => {
  try {
    const response = await axiosClient.post(url, data, headerConfig(token));
    return response.data;
  } catch (error) {
    console.error("Error while post data with token:", error.response.data);
    return error.response.data;
  }
};

//*************** */ get api call with token
export const getApiWithToken = async (url, token) => {
  try {
    const response = await axiosClient.get(url, headerConfig(token));
    return response.data;
  } catch (error) {
    console.log("Error while fetching data:", error.response.data);
    return error.response.data;
  }
};

//************** */ get api call without token
export const getApi = async (url) => {
  try {
    const response = await axiosClient.get(url);
    return response.data;
  } catch (error) {
    console.log("Error while fetching data:", error.response.data);
    return error.response.data;
  }
};

//**************** */ put api call with token
export const putAPi = async (url, data, token) => {
  try {
    const response = await axiosClient.put(url, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error while updating data:", error.response.data);
    return error.response.data;
  }
};

//*************** */ delete api
export const deleteAPi = async (url, token) => {
  try {
    const response = await axiosClient.delete(url, headerConfig(token));
    return response.data;
  } catch (error) {
    console.log("Error while deleting data:", error.response.data);
    return error.response.data;
  }
};
//*************** */ delete api with payload
export const deleteAPiwithpayload = async (url, data, token) => {
  console.log("🚀 ~ deleteAPiwithpayload ~ token:", url);
  try {
    const response = await axiosClient.delete(url, data, headerConfig(token));
    return response.data;
  } catch (error) {
    console.log("Error while deleting data:", error.response.data);
    return error.response.data;
  }
};

//**************** */ upload image
export const uploadImageToS3 = async (imageUri, token) => {
  try {
    const config = {
      headers: {
        accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    const formData = new FormData();
    formData.append("attachment", imageUri);
    const response = await axiosClient.post("/v1/image", formData, config);
    return response.data.data.result;
  } catch (error) {
    console.log("Error in uploading image", error);
    return error.response.data;
  }
};
