import { createContext,useContext, useEffect, useState } from "react";


const EventContext = createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [events, setEvents] = useState([])
 //get events
   const abortFetch = new AbortController()
  const fetchData = async () => {
    setIsLoading(true)
    try {
     const response = await fetch('http://localhost:8000/events', {signal:abortFetch.signal})
      const data = await response.json()
      setEvents(data)
      setIsLoading(false)
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted")
      } else {
        console.log(error)
        setIsLoading(false)
      }
     
    }
  }
  
  useEffect(() => {
      fetchData()
      return () => abortFetch.abort()
    }, [])
 
    //add events
  // const addEvents = (val) => {
  //    fetch(' http://localhost:8000/newEvents', {
  //   method: "POST",
  //   body: JSON.stringify(val),
  //   headers: {'Content-type': 'application/json; charset=UTF-8'},
  //     })
  //    
       
       
  // }
  const filterEvents = (val) => {
      setEvents(events.map(item => {
        item.isHidden = !item.title.toLowerCase().includes(val.toLowerCase())
        return item
      }))
  }
  const sortEvents = (val) => {
    setEvents(events.map(item => {
      if (val === 'all') {
       fetchData()
     }
       item.isHidden = !item.field.includes(val)
           return item
      }))
  }
  
  return (
    <EventContext.Provider
      value={{
        events,
        isLoading,
        filterEvents,
        sortEvents,
        // addEvents
      }}
    >
      {children}
    </EventContext.Provider>
  )
}

export const useGlobalContext = () => useContext(EventContext)

export { EventContext, AppProvider }
