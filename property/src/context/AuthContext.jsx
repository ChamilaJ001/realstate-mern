import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  loginUser,
  registerUser,
  updateUser,
} from "../helpers/api-communicator";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

/* eslint-disable react/prop-types */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("auth_token");

    if (storedToken) {
      setIsLoading(true); // Set loading state to true
      const validateToken = async () => {
        try {
          const response = await axios.get(
            "http://localhost:5000/api/v1/user/auth-status"
          );

          if (response.status >= 200 && response.status < 300) {
            const userData = JSON.parse(storedToken);
            console.log("User updated:");
            setUser(userData);
          } else {
            console.error("Token validation failed");
          }
        } catch (error) {
          console.error("Error during token validation", error);
        } finally {
          setIsLoading(false); // Set loading state to false after request
        }
      };

      validateToken();
    }
  }, []);

  const register = async (name, email, password) => {
    const data = await registerUser(name, email, password);
    if (data) {
      setUser({
        email: data.email,
        name: data.name,
        id: data.id,
        phone: data.phone,
        company: data.company,
        address: data.address,
        facebook: data.facebook,
        twitter: data.twitter,
        linkedin: data.linkedin,
        bio: data.bio,
      });
    }
    localStorage.setItem(
      "auth_token",
      JSON.stringify({
        email: data.email,
        name: data.name,
        id: data.id,
        phone: data.phone,
        company: data.company,
        address: data.address,
        facebook: data.facebook,
        twitter: data.twitter,
        linkedin: data.linkedin,
        bio: data.bio,
      })
    );
  };

  const login = async (email, password) => {
    const data = await loginUser(email, password);
    if (data) {
      setUser({
        email: data.email,
        name: data.name,
        id: data.id,
        phone: data.phone,
        company: data.company,
        address: data.address,
        facebook: data.facebook,
        twitter: data.twitter,
        linkedin: data.linkedin,
        bio: data.bio,
      });
    }

    localStorage.setItem(
      "auth_token",
      JSON.stringify({
        email: data.email,
        name: data.name,
        id: data.id,
        phone: data.phone,
        company: data.company,
        address: data.address,
        facebook: data.facebook,
        twitter: data.twitter,
        linkedin: data.linkedin,
        bio: data.bio,
      })
    );
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_token");
  };

  const update = async (
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
    const updatedUserData = {
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
    };

    const updatedUser = await updateUser(
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
    );

    if (updatedUser) {
      setUser(updatedUserData);
      localStorage.setItem("auth_token", JSON.stringify(updatedUserData));
    }
  };

  const value = {
    user,
    isLoading,
    register,
    login,
    logout,
    update,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
