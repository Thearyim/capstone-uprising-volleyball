import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderContainer.css';
import uprisingLogo from '_SiteImages/uprising_logo.png';
import searchButtonIcon from '_SiteImages/search_button_icon.png';
import shoppingCartIcon from '_SiteImages/shopping_cart_icon.png';

const HeaderContainer = () => {

  return(
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
          <img className="brand-logo" src={uprisingLogo} />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tournaments">Tournaments</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Leagues
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Adult Leagues</a>
                  <a className="dropdown-item" href="#">Junior Leagues</a>
                  <a className="dropdown-item" href="#">Volleyball Fantasy</a>
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
          <div className="header-search">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-dark my-1" type="submit">
                <img src={searchButtonIcon} />
              </button>
            </form>
          </div>
          <div className="header-shopping-cart">
            <img src={shoppingCartIcon} alt="Shopping Cart Icon"></img>
          </div>
        </nav>
      </div>
  );
}

export default HeaderContainer;
