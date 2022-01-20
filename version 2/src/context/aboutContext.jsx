import axios from "axios";
import React, {useContext, useEffect, useState} from "react";

const AwardContext = React.createContext(null)

const AwardProvider = ({children}) => {

   const [award, setAward] = useState([]);
 
 useEffect(() => {
  axios.get("/dbawards.json")
  .then(res => setAward(res.data.awards)) 
 }, [])

 return (<AwardContext.Provider value={{award}}>
           {children}
        </AwardContext.Provider>
 )
}

export const useAwardData = () =>  useContext(AwardContext)

export { AwardContext, AwardProvider }
