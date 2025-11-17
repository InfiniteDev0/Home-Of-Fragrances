"use client";
import React, { createContext , useContext , useState , useEffect} from "react";

const CountryContext = createContext();

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountry must be used within a CountryProvider");
  }
  return context;
};

export const CountryProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState({
    code: "ke",
    name: "Kenya",
  });
  const [isLoading, setIsLoading] = useState(true);

  // Load saved country on mount
  useEffect(() => {
    const savedCountry = localStorage.getItem("fragranceworld_country");
    if (savedCountry) {
      try {
        const country = JSON.parse(savedCountry);
        setSelectedCountry(country);
      } catch (error) {
        console.error("Error parsing saved country:", error);
      }
    }
    setIsLoading(false);
  }, []);

  const updateCountry = (country) => {
    setSelectedCountry(country);
    localStorage.setItem("fragranceworld_country", JSON.stringify(country));
  };

  const value = {
    selectedCountry,
    updateCountry,
    isLoading,
  };

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};

export default CountryContext;
