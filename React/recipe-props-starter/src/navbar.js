import React, {Component} from 'react';
import './navbar.css';

class Navbar extends Component {
  render() {
    return(
    <div className='header'> 
      <h1 className='header-title'>Recipe App</h1>
      <ul>
        <li>New Recipe</li>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
    );
  }
}

export default Navbar;