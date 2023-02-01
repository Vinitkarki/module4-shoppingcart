import React from 'react';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate =useNavigate();

  const homeClick=(e)=>{
    e.preventDefault();
    navigate("/")
  }

  const cartClick=(e)=>{
    e.preventDefault();
    navigate("/cart")
  }

  return (
    <div className="navbar">
      <a className='left' href="/home" onClick={homeClick}>Shopping Cart</a>
      <a className='right' href="/cart" onClick={cartClick}>Cart page</a>
      <a className='right' href="/home" onClick={homeClick}>Home page</a>
    </div>
  )
}

export default Navbar
