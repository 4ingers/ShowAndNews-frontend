import classnames from 'classnames'
import Link from 'next/link';

import styles from './styles.module.scss'
import Logo from '@/components/Logo';
import getFilenameFromPath from '@/services/getFilenameFromPath'


const navMenuCategories = [
  {
    title: 'Звёзды',
    slug: 'stars',
  },
  {
    title: 'Кино',
    slug: 'cinema',
  },
  {
    title: 'Мода',
    slug: 'fashion',
  },
  {
    title: 'Блогеры',
    slug: 'bloggers',
  }
]


const Navigation = ({ menuActive, toggleMenu }) => {
  //? Require?
  const mobileNavMenuIcon = '/icons/mobile-navigation-menu-icon.png'
  const altMobileNavMenuIcon = getFilenameFromPath(mobileNavMenuIcon, false)

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={styles.pageNavigation}>

      <div className={styles.topStripe}>
        <span>НОВОСТИ ШОУ-БИЗНЕСА</span>
      </div>
      <div className={styles.logoWrapper}>
        <span className={styles.logo}><Logo/></span>
      </div>
      <div className={classnames(styles.menuContainer, menuActive && styles.active)}>
        <ul className={styles.menuList}>
          {navMenuCategories.map((item, index) => (
            <li className={styles.menuItem} key={index}>
              <Link href="/category/[slug]" as={`/category/${item.slug}`}>
                <a className={styles.menuItemLink}>
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <img className={styles.navIcon}
        src={mobileNavMenuIcon}
        alt={altMobileNavMenuIcon}
        onClick={() => toggleMenu()}
      />
    </nav>
  )
}

export default Navigation