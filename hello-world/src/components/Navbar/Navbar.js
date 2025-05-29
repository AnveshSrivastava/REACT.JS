import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export default function Navbar(props) {
  return (
    <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
 <Link className='nav-link active ' to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className='nav-link' to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className='nav-link' to="/about">{props.aboutText}</Link>
      </li>
      <li className="nav-item">
        <Link className='nav-link' to="/contact">Contact</Link>
      </li>
      
    </ul>
    {props.searchBar?
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>:"No Search Bar"}
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

Navbar.defaultProps ={
  title: "Set title here",
  aboutText: "about content",
  searchBar : false
}