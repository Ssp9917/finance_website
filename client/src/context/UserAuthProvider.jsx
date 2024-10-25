// src/auth/UserAuthProvider.js
import React, { createContext, useState, useEffect } from "react";
import axios from "../config/axiosConfig.jsx";

// Create the AuthContext
export const UserAuthContext = createContext();

// UserAuthProvider component
const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');

  // console.log(token)
  useEffect(() => {
    // Check localStorage for the user data on component mount
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Save user data to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // signup with credential
  const signup = async (data) => {
    try {
      const response = await axios.post('/user/signup', data);
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
      const response = await axios.post('/user/login', data);
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


  return (
    <UserAuthContext.Provider
      value={{ user, loading, setUser, logout, signup, login, setToken, token }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthProvider;
