import React from 'react'
import logo from "../../media/Logo.png"
import './Navbar.css'
import navitems from '../../data/navbar'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Navbar = () => {
  const data = {
    "email": "asffttra@gmail.com",
    "password": "12345"
  }
  const registerUser = () => {
    // axios.post('http://localhost:8000/create_user',data={data})
    // .then(response => {
    //   console.log(response, "======")
    // })
    // .catch(error => {
    //   console.error(error, "Error");
    // });
    axios({

      // Endpoint to send files
      url: "http://localhost:8000/create_user",
      method: "POST",
      headers: {

        // Add any auth token here
        authorization: "your token comes here",
      },

      // Attaching the form data
      data: data,
    })

      // Handle the response from backend here
      .then((res) => { console.log("Response=>", res) })

      // Catch errors if any
      .catch((err) => { console.log("Error=>", err) });
  }
  return (
    <div className='navbar'>
      <div className="logo"><img src={logo} alt="logo" /></div>
      <div className='nav'>
        {navitems.map((i) => {
          return <Link className='link' to={i.link}>{i.name}</Link>
        })}
      </div>
      <div className='buttons'>
        <Link className='contactButton' onClick={registerUser}>Register</Link>
        <Link className='contactButton' to='/login'>Login</Link>
        <Link className='contactButton' to='/contact'>Contact Me</Link>
      </div>
    </div>
  )
}

export default Navbar