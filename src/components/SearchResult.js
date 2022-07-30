import React, { useState } from 'react'
import Specific from './Specific';

function SearchResult({result}) {
    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();


  return (
    <div className='bookImage'>
    {result.map(book => (
      <div className='library'>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
      <div>
        <h2 className='bookText'>{book.volumeInfo.title}</h2>
        <p>Author : {book.volumeInfo.authors}</p>
        <p>Ratings : {book.volumeInfo.averageRating} /10 </p>
        <p>Categories : {book.volumeInfo.categories}</p>
        <button
        className="openModalBtn"
        onClick={()=>{setShow(true);setItem(book)}}>
        Open
      </button>

      {show && <Specific show={show} item={bookItem} onClose={()=>setShow(false)} />}
      </div>
    </div>
    ))}
    </div>
  )
}

export default SearchResult