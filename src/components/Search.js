import React from 'react';
import { BiSearch }  from "react-icons/bi";
import { Link } from 'react-router-dom';

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

    <div className='bookImage'>
    {result.map(book => (
      <div className='library'>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
      <div>
        <h2 className='bookText'>{book.volumeInfo.title}</h2>
        <p>Author : {book.volumeInfo.authors}</p>
        <p>Ratings : {book.volumeInfo.averageRating} /10 </p>
        <p>Categories : {book.volumeInfo.categories}</p>
        <Link to={`specific/${book.id}`} className='start'>Let's Explore</Link>
      </div>
    </div>
    ))}
    </div>
  </div>
  )
}

export default Search
