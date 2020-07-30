import { useState } from 'react'
import Link from 'next/link';

import styles from './style.module.scss'
import Logo from '@/components/Logo';
import getFilenameFromPath from '@/services/getFilenameFromPath'


const navigationMenuItems = [
  {
    title: 'Звёзды',
    path: 'stars'
  },
  {
    title: 'Кино',
    path: 'cinema'
  },
  {
    title: 'Мода',
    path: 'fashion'
  },
  {
    title: 'Блогеры',
    path: 'bloggers'
  }
]

const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);
  
  const mobileNavMenuIcon = '/icons/mobile-navigation-menu-icon.png'
  const altMobileNavMenuIcon = getFilenameFromPath(mobileNavMenuIcon, false)

  return (
    <nav className={styles.navigation}>
      <div className={styles.topStripe}>
        <span className={styles.topStripeDescription}>
          НОВОСТИ ШОУ-БИЗНЕСА
        </span>
      </div>

      <Logo />

      <div className={menuActive ? styles.menuContainer : styles.menuContainerActive}>
        <ul className={styles.menuList}>
          {navigationMenuItems.map((link, index) => (
            <li className={styles.menuItem} key={index}>
              <Link href={link.path}>
                <a className={styles.menuItemLink}>
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <img src={mobileNavMenuIcon} alt={altMobileNavMenuIcon} className={styles.navIcon} onClick={() => { setMenuActive(!menuActive) }} />
    </nav>
  )
}

export default Navigation