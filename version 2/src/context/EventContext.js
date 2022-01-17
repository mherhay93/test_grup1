import { createContext,useContext, useEffect, useState } from "react";


const EventContext = createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [events, setEvents] = useState([])
 
  const fetchData = async () => {
    setIsLoading(true)
    try {
     const response = await fetch(' http://localhost:8000/events')
      const data = await response.json()
      setEvents(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }
  
    useEffect(() => {
     fetchData()
    }, [])
  
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
        sortEvents
      }}
    >
      {children}
    </EventContext.Provider>
  )
}

export const useGlobalContext = () => useContext(EventContext)

export { EventContext, AppProvider }
