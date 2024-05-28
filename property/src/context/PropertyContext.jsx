import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { createProperty } from "../helpers/api-communicator";

const PropertyContext = createContext();

export const useProperty = () => {
  return useContext(PropertyContext);
};

/* eslint-disable react/prop-types */
export const PropertyProvider = ({ children }) => {
  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "http://localhost:5000/api/v1/property/"
        );
        setProperty(response.data.properties);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPropertyDetails();

    // const intervalId = setInterval(fetchPropertyDetails, 100);
    // return () => clearInterval(intervalId);
  }, []);

  const create = async (formData) => {
    const data = await createProperty(formData);
    if (data) {
      setProperty(data);
    }
  };

  //   const update = async (
  //     id,
  //     name,
  //     email,
  //     avatar,
  //     phone,
  //     company,
  //     address,
  //     facebook,
  //     linkedin,
  //     twitter,
  //     bio
  //   ) => {
  //     const updatedUserData = {
  //       id,
  //       name,
  //       email,
  //       avatar,
  //       phone,
  //       company,
  //       address,
  //       facebook,
  //       linkedin,
  //       twitter,
  //       bio,
  //     };

  //     const updatedUser = await updateUser(
  //       id,
  //       name,
  //       email,
  //       avatar,
  //       phone,
  //       company,
  //       address,
  //       facebook,
  //       linkedin,
  //       twitter,
  //       bio
  //     );

  //     if (updatedUser) {
  //       setUser(updatedUserData);
  //       localStorage.setItem("auth_token", JSON.stringify(updatedUserData));
  //     }
  //   };

  const value = {
    property,
    isLoading,
    create,
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};
