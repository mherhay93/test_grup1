import { createContext, useContext, useState, useEffect } from "react";


const RegisterContext = createContext();

const RegisterProvider = ({ children }) => {

  return (
    
      <RegisterContext.Provider value={{ }}>
        {children}
      </RegisterContext.Provider>
    
    
  );
};

export const useServerData = () => useContext(RegisterContext);
export { RegisterProvider, RegisterContext };
