import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Navbar.css';

 
     const Navbar = props => {
    
        return (
            <nav className='navbar bg-primary'> 
            <h1>
                <i className={props.icon} />
                {props.title} 
                </h1>

                <div className='now'>   
                <ul >
                    <li >
                    <Link to='/'>Home </Link>
                    </li>
                    <li >
                    <Link to='/about'>About</Link>
                    </li>
                </ul>
                </div>             
            </nav>
        )
    
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  }
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
