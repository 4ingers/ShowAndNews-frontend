import { useState } from 'react'

import classnames from 'classnames'
import styles from './styles.module.scss'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'


const MainLayout = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false)
  const toggleMenu = () => setMenuActive(!menuActive)

  return <>
    <div className={classnames(styles.mainLayout)}>
      <div className={menuActive ? styles.overlayActive : styles.overlay} onClick={toggleMenu}/>

      <Navigation menuActive={menuActive} toggleMenu={toggleMenu} />

      <div className={styles.content}>
        {children}
      </div>

      <Footer />
    </div>
  </>
}

export default MainLayout