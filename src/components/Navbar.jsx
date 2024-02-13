import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light shadow">
  <div class="container">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-black" aria-current="page" href="/home"><b>Home</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-black" href="/menu"><b>Menu</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-black" href="/aboutus"><b>About</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-black" href="/booking"><b>Booking</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-black" href="/contact"><b>Contact</b></a>
        </li>
       
      </ul>
      <a href='/home'>
      <img src='./img/logo.png' width="200"className='w-10' />
      </a>
      <NavLink to="/Login" className="btn btn-outline-primary ms-auto px-4 rounded-pill text-black">
        <i className="fa fa-sign-in me-2"></i>Login</NavLink>
      <NavLink to="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill text-black">
      <i className="fa fa-user-plus me-2"></i>Register</NavLink>
    </div>
  </div>
</nav>
        </div>
    );
}


export default Navbar;