import React from 'react'

import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  return (
    <div className="search">
      <label className="glass" htmlFor="searchInput">
        <FiSearch />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__searc"
        placeholder="지식의 인사이트"
        title="검색"
      />
    </div>
  )
}

export default SearchBar
