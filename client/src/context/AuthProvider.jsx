// src/auth/AuthProvider.js
import React, { createContext, useState, useEffect } from "react";
import axios from "../config/axiosConfig";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const [token, setToken] = useState('');

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("admin"));
    console.log(storedUser);
    
    if (storedUser) {
      setAdmin(storedUser); // Set admin state from localStorage
      setToken(storedUser.token || ''); // Set token if available in the stored user
    }
    
    setLoading(false); // Set loading to false after checking localStorage
  }, []);

  // Sign up with credentials
  const signup = async (data) => {
    try {
      const response = await axios.post('/auth/signup', data);
      return response.data;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  // Log in with credentials
  const login = async (data) => {
    console.log(data);
    try {
      const response = await axios.post('/admin/admin-login', data);
      const loggedInUser = response.data;

      // Set admin and token after successful login
      setAdmin(loggedInUser);
      setToken(loggedInUser.token || '');
      
      return loggedInUser;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  // Logout function
  // const logout = () => {
  //   setAdmin(null);
  //   setToken(''); // Clear the token on logout
  //   localStorage.removeItem("admin");
  // };

  // Save user data to localStorage
  useEffect(() => {
    if (admin) {
      localStorage.setItem("admin", JSON.stringify(admin));
    } else {
      localStorage.removeItem("admin");
    }
  }, [admin]);

  return (
    <AuthContext.Provider
      value={{ loading, admin, setAdmin, setLoading, signup, login, setToken, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
