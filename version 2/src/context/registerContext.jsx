import { createContext, useContext, useState, useEffect } from "react";


const RegisterContext = createContext();

const RegisterProvider = ({ children }) => {
  const [dataInLogin, setDataInLogin] = useState([]);
  const [isLoginTrue, setIsLoginTrue] = useState(false)

  return (
      <RegisterContext.Provider value={{dataInLogin, setDataInLogin,isLoginTrue, setIsLoginTrue }}>
        {children}
      </RegisterContext.Provider>
    
    
  );
};

export const useServerData = () => useContext(RegisterContext);
export { RegisterProvider, RegisterContext };
