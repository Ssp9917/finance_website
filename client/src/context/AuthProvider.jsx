// src/auth/AuthProvider.js
import React, { createContext, useState, useEffect } from "react";
import axios from "../config/axiosConfig";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(false);
  const [token,setToken] = useState('')

  // console.log(token)

  // signup with credential
   const signup = async (data) => {
    try {
      const response = await axios.post('/auth/signup', data);
      return response.data;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };


  // login with credential
  const login = async (data) => {
    console.log(data)
    try {
      const response = await axios.post('/auth/login',data);
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  // Save user data to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user,loading,setUser, logout,signup,login,setToken,token}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
