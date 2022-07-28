import React, {useState} from 'react';
import { BiSearch }  from "react-icons/bi";

const Search = () => {
  const [book, setBooks] = useState("")
  const [result, setResult] = useState([])
  const [apiKey, setApiKey] = useState("AIzaSyDD9tmSWYx1Kky4x0-REa5sM5KnEL5j6iw")

  function handleChange(event) {
    const book = event.target.value
    setBooks(book)

  }
  function handleSubmit(e) {
    e.preventDefault()
    fetch("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=10")
    .then(r => r.json())
    .then((data) => {
      console.log(data.items);
      setResult(data.items);
    })
  }
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
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
    ))}
    </div>
  </div>
  )
}

export default Search
