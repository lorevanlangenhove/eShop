import React from 'react'
import "./Header.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="header">
      <Link to="/" style={{textDecoration:"none"}}>
        <div className="header_logo">
          <LocalLibraryIcon className="header_logoImage" fontSize="large" />
          <h2 className="header_logoTitle">Library</h2>
        </div>
      </Link>
      <div className="header_searchbar">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello guest</span>
          <span className="nav_itemLineTwo">Sign in</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{textDecoration:"none"}}>
          <div className="nav_itemBasket">
            <AddShoppingCartIcon />
            <span className="nav_itemLineTwo nav_basketCount">0</span>
          </div>
        </Link> 
      </div>
    </div>
  )
}

export default Header