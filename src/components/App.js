import { Routes, Route } from "react-router-dom";
import React from 'react';
import './App';
import NavBar from './NavBar'
import Header from './Header'
import Search from './Search';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
    <Route exact  path="/" element={ <Header/> } />
    <Route  exact path="/search" element={ <Search/> } />
  </Routes>
  </>
  )
}

export default App;

