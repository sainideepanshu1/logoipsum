import React from 'react'
import logo from "../../media/Logo.png"
import './Navbar.css'
import navitems from '../../data/navbar'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo"><img src={logo} alt="logo" /></div>
        <div className='nav'>
        {navitems.map((i)=>{
        return <Link className='link' to={i.link}>{i.name}</Link>
        })}
        </div>
        <div className='buttons'>
          <Link className='contactButton' to='/login'>Login</Link>
          <Link className='contactButton' to='/contact'>Contact Me</Link>
        </div>
    </div>
  )
}

export default Navbar