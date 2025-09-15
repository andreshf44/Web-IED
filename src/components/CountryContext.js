// CountryContext.js
import { createContext, useContext, useState } from "react";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState(null); // ej: "cl"

  return (
    <CountryContext.Provider value={{ selectedCountryCode, setSelectedCountryCode }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => useContext(CountryContext);
