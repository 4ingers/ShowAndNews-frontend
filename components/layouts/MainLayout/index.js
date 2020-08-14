import Head from 'next/head'
import { useState } from 'react'

import classnames from 'classnames'
import styles from './styles.module.scss'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'


const MainLayout = ({ children, meta: { title, keywords, description } }) => {
  const [menuActive, setMenuActive] = useState(false)
  const toggleMenu = () => setMenuActive(!menuActive)

  return <>
    <Head>
      <title>{title && `${title} | `}SHOW&NEWS</title>
      <meta name="keywords" content={keywords.join()} />
      <meta name="description" content={description} />
    </Head>

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