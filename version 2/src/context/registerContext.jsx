import { createContext, useContext, useState, useEffect } from "react";
import { isDisabledIsRegister } from "../components/register/register";

const RegisterContext = createContext();

const RegisterProvider = ({ children }) => {
  const isDisabled = useContext(isDisabledIsRegister)
  const dataAdmin  = useContext(isDisabledIsRegister)
  console.log(dataAdmin);
  return (
    <RegisterContext.Provider value={{  dataAdmin }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useDisabledRegister = () => useContext(RegisterContext);
export { RegisterProvider };
