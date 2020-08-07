import Link from 'next/link'
import classnames from 'classnames'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faFacebook, faInstagram, faVk } from "@fortawesome/free-brands-svg-icons"

import styles from './styles.module.scss'
import Logo from '@/components/Logo'


const Footer = ({ menuActive }) => {

  return (
    <footer className={classnames(styles.pageFooter, menuActive && styles.inactive)}>

      <div className={styles.row}>
        <div className={styles.item}>
          <p className={styles.contact}>+7 (906) 072-98-80</p>
          <p className={styles.contact}>showandnews.pr@gmail.com</p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.item}>
          <p className={styles.copyrightText}>&copy; 2020 <Logo/></p>
        </div>
        <div className={styles.item}>
          <Link href="/">
            <a className={styles.social}>
              <FontAwesomeIcon icon={faVk}/>
            </a>
          </Link>
          <Link href="/">
            <a className={styles.social}>
              <FontAwesomeIcon icon={faInstagram}/>
            </a>
          </Link>
          <Link href="/">
            <a className={styles.social}>
              <FontAwesomeIcon icon={faYoutube}/>
            </a>
          </Link>
          <Link href="/">
            <a className={styles.social}>
              <FontAwesomeIcon icon={faFacebook}/>
            </a>
          </Link>
        </div>
      </div>

    </footer>
  )
}

export default Footer