import React from 'react';
import { Link } from 'react-router-dom';

import uprisingLogo from '../assets/images/uprising_logo.png';

export default function Header() {

  var headerStyle={
    height: '50px'
  };

  var searchButtonStyle={
    height: '28px'
  }

  var shoppingCartStyle={
    height: '30px'
  }

  var cartStyle={
    float: 'right'
  }

  return(
    <div>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
          <img className="navbar-brand" src={uprisingLogo} style={headerStyle}></img>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Tournaments
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">2019 Tournamnet Schedule</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Adults
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Players</a>
                  <a className="dropdown-item" href="#">Volleyball Fantasy</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Juniors
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Players</a>
                  <a className="dropdown-item" href="#">Leagues</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Shop</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Account
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Sign In</a>
                  <a className="dropdown-item" href="#">Sign Up</a>
                </div>
              </li>
            </ul>
          </div>
          <div style={cartStyle}>
            <img style={searchButtonStyle} src="http://www.pngmart.com/files/8/Search-Button-PNG-HD-Photo.png" alt=""></img>
            <img style={shoppingCartStyle} src="http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png" alt=""></img>
          </div>
        </nav>
      </div>
    </div>
  );
}
