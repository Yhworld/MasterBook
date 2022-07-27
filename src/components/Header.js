import React from 'react'
import style from '../App.css'
import { BsSearch } from "react-icons/bs";
let headerPic = require("../Woman reading (1).gif")


export const Header = () => {
  return (
    <div className='header' style={style}>
        <div className='headertext'>
            <p>
                Books of 
                <br />
                all kinds of genres
            </p>
            <p className='quotes'>“Fairy tales are more than true: not because
                <br />
                 they tell us that dragons exist, 
                 <br />
                 but because they tell us that dragons 
                 <br />
                 can be beaten.”
           <sub>― Neil Gaiman, Coraline </sub>
           </p>
            <form className='search-bar'>
            <input type="text" placeholder='Enter the desired Book title' ></input>
            <button className='search'><BsSearch/></button>
            </form>
            <br />
        </div>
    <div className='headerImage'>
        <img src={headerPic} alt={headerPic}></img>
    </div>
    </div>
  )
}
