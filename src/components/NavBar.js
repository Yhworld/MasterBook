import { GoBook } from "react-icons/go";
import {NavLink} from "react-router-dom"
import React from 'react'
import style from '../App.css'
//let loadingGif = require("../Night date (1).gif")

 const NavBar = () => {
  return (
    <div style={style} className='navbar'>
      <div style={style} className='logo'>
        <h1>Master<GoBook/></h1>
        </div>
      <div style={style} className='nav'>
      <NavLink to={"/"} exact="true">Home</NavLink>
      <NavLink to={"/search"} exact="true">Search</NavLink>
      </div>
      </div>
       )
}
export default NavBar;