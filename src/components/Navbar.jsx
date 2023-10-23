import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsHandbag, BsPersonCircle } from 'react-icons/bs';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1 className="logo">Buytopia</h1>
    <div className="navlinks">
      <NavLink to="/">Home</NavLink>
      <a href="/shop">
        shop
        <FaShoppingCart />
      </a>
      <a href="/About">About</a>
      <a href="/contact">Contact</a>
    </div>
    <div className="icons">
      <AiOutlineSearch />
      <BsHandbag />
      <BsPersonCircle />
    </div>
  </nav>
);

export default Navbar;
