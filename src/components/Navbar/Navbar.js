import React from 'react'
import logo from "../../media/Logo.png"
import './Navbar.css'
import navitems from '../../data/navbar'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo"><img src={logo} alt="logo" /></div>
        <div className='nav'>
        {navitems.map((i)=>{
        return <a className='link'>{i.name}</a>
        })}
        </div>
        <button className='contactButton'>Contact Me</button>
    </div>
  )
}

export default Navbar