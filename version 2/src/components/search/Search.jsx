import { useState, useEffect } from 'react'
import './search.css'
import { useGlobalContext } from "../../context/EventContext";

const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('')

  const { events,filterEvents,sortEvents } = useGlobalContext()
 
  useEffect(() => {
   filterEvents(inputValue)
  },[inputValue])
  
  useEffect(() => {
    sortEvents(selectValue)
  }, [selectValue])
  
  const changeValueHandler = (e) => {
    setInputValue(e.target.value)
  }

  const changeSelectHandler = (e) => {
    setSelectValue(e.target.value)
  }

  const filterEventsHandler = (e) => {
    e.preventDefault()
    setInputValue('')
  }

  return (
    <section className="search-container">
        <div className="search-title">
          <h2>FIND BEST EVENT</h2>
        </div>
        <div className="search-form">
          <form onClick={filterEventsHandler}>
          <input type='text' placeholder="Event name"
          value={inputValue}
         onChange={changeValueHandler}
          />
          <select value={selectValue} onChange={changeSelectHandler}>
            <option value="all">All</option>
            <option value="music">Music</option>
            <option value="education">Education</option>
            <option value="culture">Culture</option>
            <option value="movie">Movie</option>
            <option value="tourism">Tourism</option>
          </select>
          </form>
        </div>
      </section>
  )
}

export default Search
