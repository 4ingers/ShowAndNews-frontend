import { useState } from 'react'
import Link from 'next/link';

import styles from './styles.module.scss'
import Logo from '@/components/Logo';
import getFilenameFromPath from '@/services/getFilenameFromPath'


// === Hardcode ===
const navMenuCategories = [
  {
    title: 'Звёзды',
    slug: 'stars',
    id: 1
  },
  {
    title: 'Кино',
    slug: 'cinema',
    id: 2
  },
  {
    title: 'Мода',
    slug: 'fashion',
    id: 3
  },
  {
    title: 'Блогеры',
    slug: 'bloggers',
    id: 4
  }
]

const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);

  const mobileNavMenuIcon = '/icons/mobile-navigation-menu-icon.png'
  const altMobileNavMenuIcon = getFilenameFromPath(mobileNavMenuIcon, false)

  return (
    <nav className={styles.navigation}>
      <div className={styles.topStripe}>
        <span>НОВОСТИ ШОУ-БИЗНЕСА</span>
      </div>
      <Logo />
      <div className={menuActive ? styles.menuContainerActive : styles.menuContainer}>
        <ul className={styles.menuList}>
          {navMenuCategories.map((item, index) => (
            <li className={styles.menuItem} key={index}>
              <Link href="/category/[slug]" as={`/category/${item.slug}`}>
                <a className={styles.menuItemLink}>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <img className={styles.navIcon} src={mobileNavMenuIcon} alt={altMobileNavMenuIcon} onClick={() => setMenuActive(!menuActive)} />
    </nav>
  )
}

export default Navigation