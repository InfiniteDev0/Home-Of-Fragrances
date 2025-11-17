"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext(undefined);


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(null);

  // Initialize user and cookie consent on mount
  useEffect(() => {
    const initializeAuth = () => {
      try {
        // Check cookie consent first
        const consent = Cookies.get("cookie-consent");
        setCookieConsent(consent);

        let storedUser = null;

        // If cookies are accepted, try to get user from cookies first, then localStorage
        if (consent === "accepted" || consent === "personalized") {
          const cookieUser = Cookies.get("user");
          if (cookieUser) {
            storedUser = JSON.parse(cookieUser);
            console.log("User restored from cookies:", storedUser);
          } else {
            // Fall back to localStorage
            const localUser = localStorage.getItem("user");
            if (localUser) {
              storedUser = JSON.parse(localUser);
              console.log("User restored from localStorage:", storedUser);
            }
          }
        } else {
          // If cookies not accepted, only use localStorage/sessionStorage
          const localUser = localStorage.getItem("user");
          const sessionUser = sessionStorage.getItem("user");

          if (localUser) {
            storedUser = JSON.parse(localUser);
            console.log("User restored from localStorage:", storedUser);
          } else if (sessionUser) {
            storedUser = JSON.parse(sessionUser);
            console.log("User restored from sessionStorage:", storedUser);
          }
        }

        if (storedUser) {
          setUser(storedUser);
        }
      } catch (error) {
        console.error("Error parsing stored user data:", error);
        // Clear corrupted data
        clearAllUserData();
      } finally {
        setLoading(false);
        setInitialized(true);
      }
    };

    initializeAuth();
  }, []);

  // Helper function to store user data based on cookie consent
  const storeUserData = (userData) => {
    try {
      setUser(userData);
      console.log("User data stored:", userData);

      const consent = Cookies.get("cookie-consent");

      if (consent === "accepted" || consent === "personalized") {
        // Store in cookies if consent given
        Cookies.set("user", JSON.stringify(userData), { expires: 30 }); // 30 days
        localStorage.setItem("user", JSON.stringify(userData));
      } else {
        // Store in localStorage and sessionStorage if no cookie consent
        localStorage.setItem("user", JSON.stringify(userData));
        sessionStorage.setItem("user", JSON.stringify(userData));
      }
    } catch (error) {
      console.error("Error storing user data:", error);
    }
  };

  // Helper function to clear all user data
  const clearAllUserData = () => {
    try {
      Cookies.remove("user");
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      setUser(null);
      console.log("All user data cleared");
    } catch (error) {
      console.error("Error clearing user data:", error);
    }
  };

  // Update storage when cookie consent changes
  const updateCookieConsent = (consent) => {
    setCookieConsent(consent);

    // If user is logged in, update storage based on new consent
    if (user) {
      if (consent === "accepted" || consent === "personalized") {
        // Move data to cookies
        Cookies.set("user", JSON.stringify(user), { expires: 30 });
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        // Remove from cookies, keep in localStorage/sessionStorage
        Cookies.remove("user");
        localStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("user", JSON.stringify(user));
      }
    }
  };

  // Fetch user details from backend (for profile)
  const fetchUserDetails = async (email) => {
    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/api/auth/details?email=${encodeURIComponent(email)}`
      );
      if (!response.ok) throw new Error("Failed to fetch user details");
      const data = await response.json();
      return data.user || data;
    } catch (error) {
      console.error("Fetch user details error:", error);
      return {};
    }
  };

  // Login (calls backend)
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
        const text = await response.text();
        let error;
        try {
          error = text ? JSON.parse(text) : {};
        } catch {
          error = { message: text || "Login failed" };
        }
        throw new Error(error.message || "Login failed");
      }
      const data = await response.json();

      // Store user data from backend response
      storeUserData(data.user);
    } finally {
      setLoading(false);
    }
  };

  // Registration
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
        const text = await response.text();
        let error;
        try {
          error = text ? JSON.parse(text) : {};
        } catch {
          error = { message: text || "Registration failed" };
        }
        throw new Error(error.message || "Registration failed");
      }
      const data = await response.json();

      // Store user data from backend response
      storeUserData(data.user);
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = () => {
    clearAllUserData();
    // Optionally call backend logout endpoint here
  };

  // Password reset/request
  const resetPassword = async (email) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/password/send-code`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      if (!response.ok) {
        const text = await response.text();
        let error;
        try {
          error = text ? JSON.parse(text) : {};
        } catch {
          error = { message: text || "Failed to send reset code" };
        }
        throw new Error(error.message || "Failed to send reset code");
      }
    } finally {
      setLoading(false);
    }
  };

  const confirmPasswordReset = async (email, code, newPassword) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/password/reset`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, code, newPassword }),
        }
      );
      if (!response.ok) {
        const text = await response.text();
        let error;
        try {
          error = text ? JSON.parse(text) : {};
        } catch {
          error = { message: text || "Failed to reset password" };
        }
        throw new Error(error.message || "Failed to reset password");
      }
    } finally {
      setLoading(false);
    }
  };

  // Profile update
  const updateUserProfile = async (profileData) => {
    const updatedUser = { ...user, ...profileData };
    storeUserData(updatedUser);

    // Optionally call backend to persist changes
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profileData),
        }
      );

      if (!response.ok) {
        console.error("Failed to update profile on backend");
      }
    } catch (error) {
      console.error("Profile update error:", error);
    }
  };

  // Request OTP for registration
  const requestOtp = async (email) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/request-verification-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        let error;
        try {
          error = errorText ? JSON.parse(errorText) : {};
        } catch {
          error = { message: errorText || "Failed to send OTP" };
        }
        throw new Error(error.message || "Failed to send OTP");
      }
    } finally {
      setLoading(false);
    }
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return user !== null;
  };

  // Refresh user data from backend
  const refreshUserData = async () => {
    if (!user?.email) return;

    setLoading(true);
    try {
      const updatedUser = await fetchUserDetails(user.email);
      if (updatedUser && Object.keys(updatedUser).length > 0) {
        storeUserData(updatedUser);
      }
    } catch (error) {
      console.error("Failed to refresh user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    initialized,
    cookieConsent,
    login,
    requestOtp,
    register,
    logout,
    resetPassword,
    confirmPasswordReset,
    updateUserProfile,
    fetchUserDetails,
    isAuthenticated,
    refreshUserData,
    updateCookieConsent,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
