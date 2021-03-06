import { createContext, useContext, useEffect, useState } from "react";

const EventContext = createContext()
//localStorage
//  const getLocalStorage = () => {
//     let events = localStorage.getItem('events')
//     if (events) {
//      return JSON.parse(localStorage.getItem('events'))
//     }
//     return []
//   }

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [events, setEvents] = useState([])
  const [isAdded, setIsAdded] = useState(false)
  const [isRemove, setIsRemoving] = useState(false)
  //get events
  const fetchData = async() => {
    setIsLoading(true)
    try {
     const response = await fetch('http://localhost:8000/events', {
          headers: {
              'Content-Type':'application/json',
              'Accept': 'application/json'
          }
      })
      const data = await response.json()
      setEvents(data)
      setIsLoading(false)
    } catch (error) {
       console.log(error)
        setIsLoading(false)
    }
  }
  // for localStorage
//     useEffect(() => {
//     localStorage.setItem('events',JSON.stringify(events))
// },[events])

  useEffect(() => {
      fetchData()
    }, [])
 
    //add events
  const addEvents = (val) => {
    setIsAdded(true)
    fetch('http://localhost:8000/events', {
      method: 'POST',
      body: JSON.stringify(val),
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    }).then(() => setIsAdded(false))
     fetchData()
    }
  //remove event
   let date = new Date();
   const formatted = date.toString().slice(4, 10);
   const handelRemove = () => {
    setIsRemoving(true)
    return events.filter(item => item.date === formatted)
      .map(item => fetch(`http://localhost:8000/events/${item.id}`, {
      method: 'DELETE',
      }).then(() => setIsRemoving(false))
        .then(() => fetchData()))
    }
  //sort events
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

  // isLikedHandler
  const isLikedHandler = (id) => {
    return setEvents(events.map(item => {
      if (item.id === id) {
      return {...item, isActive: !item.isActive};
      } else {
        return item
     }
   }))
  }
 
//   const isLikedHandler =(id) =>{
//     const currEvent = events.find(item => item.id === id)
//      fetch(`http://localhost:8000/events/${currEvent.id}`, {
//        method: 'PUT',
//       body: JSON.stringify({
//        ...currEvent,
//       isActive: !currEvent.isActive
//     }),
//     headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//      .then((data) => setEvents(data.id ))
//       fetchData()
//   }

  
  return (
    <EventContext.Provider
      value={{
        events,
        isLoading,
        filterEvents,
        sortEvents,
        isLikedHandler,
        addEvents,
        isAdded,
        handelRemove,
        isRemove
      }}
    >
      {children}
    </EventContext.Provider>
  )
}

export const useGlobalContext = () => useContext(EventContext)

export { EventContext, AppProvider }
