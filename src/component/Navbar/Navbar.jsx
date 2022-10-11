import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { Model } from '../AddtoCartmodel/Model';
const Navbar = () => {
  return (
    <div className='nav'>
      {/* Dmart symbol */}
      <Link to='/'>
        <img
          src='https://findvectorlogo.com/wp-content/uploads/2018/12/dmart-vector-logo.png'
          alt=''
          className='symbol'
        />
      </Link>
      <Model />
    </div>
  );
};

export default Navbar;
