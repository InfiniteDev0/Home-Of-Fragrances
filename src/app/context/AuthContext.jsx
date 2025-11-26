"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [mode, setMode] = useState("login");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from cookies on page load
  useEffect(() => {
    try {
      const cookieUser = Cookies.get("user");
      if (cookieUser) {
        const parsed = JSON.parse(cookieUser);
        setUser(parsed);
      }
    } catch (err) {
      console.error("Error loading user cookie:", err);
      Cookies.remove("user");
    }
    setLoading(false);
  }, []);

  // Save user to cookies
  const storeUser = (userData) => {
    setUser(userData);
    Cookies.set("user", JSON.stringify(userData), {
      expires: 7, // 7 days
    });
  };

  // Completely logout
  const logout = () => {
    Cookies.remove("user");
    setUser(null);
  };

  // LOGIN
  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        let error;
        try {
          error = JSON.parse(errorText);
        } catch {
          error = { message: "Login failed" };
        }
        throw new Error(error.message);
      }

      const data = await response.json();
      storeUser(data.user);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    } finally {
      setLoading(false);
    }
  };

  // REGISTER
  const register = async (email, password, displayName, otp) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, displayName, otp }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        let error;
        try {
          error = JSON.parse(errorText);
        } catch {
          error = { message: "Registration failed" };
        }
        throw new Error(error.message);
      }

      const data = await response.json();
      storeUser(data.user);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    } finally {
      setLoading(false);
    }
  };

  const value = {
    mode , 
    setMode,
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
