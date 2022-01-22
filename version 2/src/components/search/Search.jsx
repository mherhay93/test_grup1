import { useState, useEffect } from 'react'
import './search.css'
import { useGlobalContext } from "../../context/EventContext";
import { useTranslation } from 'react-i18next';


const Search = () => {

  const { t } = useTranslation();

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
          <h2>{t("Find_best_event")}</h2>
        </div>
        <div className="search-form">
          <form onClick={filterEventsHandler}>
          <input type='text' placeholder={t("Event_name")}
          value={inputValue}
         onChange={changeValueHandler}
          />
          <select value={selectValue} onChange={changeSelectHandler}>
            <option value="all">{t("All")}</option>
            <option value="music">{t("Music")}</option>
            <option value="education">{t("Education")}</option>
            <option value="culture">{t("Culture")}</option>
            <option value="movie">{t("Movie")}</option>
            <option value="tourism">{t("Tourism")}</option>
          </select>
          </form>
        </div>
      </section>
  )
}

export default Search
