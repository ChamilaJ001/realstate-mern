import axios from "axios";

export const loginUser = async (email, password) => {
  const res = await axios.post("/user/login", { email, password });
  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  const data = await res.data;
  return data;
};

export const registerUser = async (name, email, password) => {
  const res = await axios.post("/user/signup", { name, email, password });
  if (res.status !== 201) {
    throw new Error("Unable to register");
  }

  const data = await res.data;
  return data;
};

export const updateUser = async (
  id,
  name,
  email,
  avatar,
  phone,
  company,
  address,
  facebook,
  linkedin,
  twitter,
  bio
) => {
  const res = await axios.put("/user/update-user", {
    id,
    name,
    email,
    avatar,
    phone,
    company,
    address,
    facebook,
    linkedin,
    twitter,
    bio,
  });
  if (res.status !== 200) {
    throw new Error("Unable to register");
  }

  const data = await res.data;
  return data;
};

export const createProperty = async (formData) => {
  const res = await axios.post("/property/add-property", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (res.status !== 200) {
    throw new Error("Unable to create property");
  }

  const data = await res.data;
  return data;
};
