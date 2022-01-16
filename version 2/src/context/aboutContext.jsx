// import axios from "axios"
// import React, { useContext, useState,useEffect } from "react"

// const AwordContext = React.createContexte(null)

// const AwordProvider = ({children}) => {
//   const [aword, setAword] = useState([])


//   useEffect(() => {
//     axios.get("/dbawards.json")
//     .then(res => setAword(res))
// }, [])

// return(
//     <AwordContext.Provider value={aword}>
//         {children}
//     </AwordContext.Provider>
// )

// }



// export const useAwordData = () =>  useContext(AwordContext)

// export default AwordProvider

import axios from "axios";
import React, {useContext, useEffect, useState} from "react";

const AwardContext = React.createContext(null)

const AwardProvider = ({children}) => {
 const [award, setAward] = useState([]);

 useEffect(() => {
  axios.get("/awards.json")
  .then(res => setAward(res.data.award))
 }, [])

 return (<AwardContext.Provider value={{award}}>
           {children}
        </AwardContext.Provider>
 )
}

export const useAwardData = () =>  useContext(AwardContext)

export default AwardProvider