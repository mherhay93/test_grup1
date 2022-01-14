import './search.css'

const Search = () => {
  return (
    <section className="search-container">
        <div className="search-title">
          <h2>FIND BEST EVENT</h2>
        </div>
        <div className="search-form">
          <form>
            <input type='text' placeholder="Event name"/>
           <select>
              <option value="">Event1</option>
              <option value="">Even2</option>
              <option value="">Event3</option>
             <option value="">Even4</option>
          </select>
          <button>Search</button>
          </form>
        </div>
      </section>
  )
}

export default Search
