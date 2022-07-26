import { GoBook } from "react-icons/go";
import React from 'react'
import style from '../App.css'
//let loadingGif = require("../Night date (1).gif")

export const NavBar = () => {
  return (
    <div style={style} className='navbar'>
      <div style={style} className='logo'>
        <h1>Master<GoBook/></h1>
        </div>
      <ul style={style} className='nav'>
        <li>Home</li>
        <li>Recommended</li>
      </ul>
    </div>
  )
}
