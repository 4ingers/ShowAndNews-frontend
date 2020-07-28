import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import navicon from '../../assets/images/navicon.png';

// import { OutsideAlerter } from '../hooks/click-outside'


const navLinks = [
  { 
    title: 'ЗВЁЗДЫ',
    path: '/blog'
  },
  {
    title: 'КИНО',
    path: '/about'
  },
  {
    title: 'МОДА',
    path: '/contact-us'
  },
  {
    title: 'БЛОГЕРЫ',
    path: '/home'
  },
]

export default function MenuContainer() {
  const [menuActive, setMenuActive] = useState(false);

  const menuContainer = (
    <div className={`menu-container${menuActive ? ' active' : ''}`}>
        <ul className="menu-list">
          {navLinks.map((link, index) => (
              <li className="menu-item" key={index}>
                <Link className="menu-item-link" to={link.path}>{link.title}</Link>
              </li>
          ))}
        </ul>  
      </div>
  );

  return (
    <Fragment>
      {menuContainer}
      {/* {menuActive ? <OutsideAlerter callback={() => setMenuActive(!menuActive)}>{component}</OutsideAlerter> : component} */}
      <img src={navicon} alt="navicon" className="navicon" onClick={() => { setMenuActive(!menuActive) }} />
    </Fragment>
  );
}