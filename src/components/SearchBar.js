import React from 'react'

function SearchBar() {
    return (
        <div className='search-bar'>

            <p className='search-bar__popular'>popular places</p>
   
            <form action="#" className="search search-bar__search">
                <label htmlFor="searchInput" hidden>
                    search input
                </label>
                <input
                    type="text"
                    id="searchInput"
                    name="searchInput"
                    className="search__input"
                    placeholder="Search..."
                />

                <button type="submit" className="search__submit">filter by places</button>
            </form>

            <p className='search-bar__following'>following</p>
        </div>
    )
}

export default SearchBar