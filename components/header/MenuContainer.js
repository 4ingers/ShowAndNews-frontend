import { useState } from 'react';
import { Link } from 'next/link';


const navigationMenuItems = [
  { 
    title: 'Звёзды',
    path: '/blog'
  },
  {
    title: 'Кино',
    path: '/about'
  },
  {
    title: 'Мода',
    path: '/contact'
  },
  {
    title: 'Блогеры',
    path: '/home'
  },
]

export default function MenuContainer() {
  const [menuActive, setMenuActive] = useState(false);

  const menuContainer = (
    <div className={`menu-container${menuActive ? ' active' : ''}`}>
        <ul className="menu-list">
          {navigationMenuItems.map((link, index) => (
              <li className="menu-item" key={index}>
                <Link className="menu-item-link" href={link.path}><a>{link.title}</a></Link>
              </li>
          ))}
        </ul>  
      </div>
  );

  return (
    <>
      {menuContainer}
      {/* {menuActive ? <OutsideAlerter callback={() => setMenuActive(!menuActive)}>{component}</OutsideAlerter> : component} */}
      <img src="/images/mobile-navigation-menu-icon.png" alt="navicon" className="navicon" onClick={() => { setMenuActive(!menuActive) }} />
    </>
  );
}