import { Routes, Route } from "react-router-dom";
import React, {useState} from 'react';
import './App';
import NavBar from './NavBar'
import Header from './Header'
import Search from './Search';

function App() {
  const [book, setBooks] = useState("")
  const [result, setResult] = useState([])
  const [apiKey, setApiKey] = useState("AIzaSyDD9tmSWYx1Kky4x0-REa5sM5KnEL5j6iw")

  function handleChange(event) {
    const book = event.target.value
    setBooks(book)

  }
  function handleSubmit(e) {
    e.preventDefault()
    fetch("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=12")
    .then(r => r.json())
    .then((data) => {
      console.log(data.items);
      setResult(data.items);
    })
  }
  return (
    <>
    <NavBar />
    <Routes>
    <Route exact  path="/" element={ <Header/> } />
    <Route  exact path="/search" element={ <Search handleChange={handleChange} handleSubmit={handleSubmit} result={result}/> } />
  </Routes>
  </>
  )
}

export default App;
