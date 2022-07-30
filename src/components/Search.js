import React from 'react';
import { BiSearch }  from "react-icons/bi";
import SearchResult from './SearchResult';

const Search = ({handleChange, handleSubmit, result}) => {

  return (
  <div className='search-page'>
    <div className='searchText'>
      <h2>Search</h2>
    </div>
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type='text' placeholder='Enter Book Title'></input>
      <button className='search' type="submit"><BiSearch /></button>
    </form>
    <div>
      <SearchResult result={result}/>
    </div>
  </div>
  )
}

export default Search
