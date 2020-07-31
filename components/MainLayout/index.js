import Head from 'next/head'

import styles from './styles.module.scss'
import Navigation from '@/components/Navigation'


const MainLayout = ({ children, meta: { title, keywords, description } }) => {

  return (
    <div className={styles.mainLayout}>
      <Head>
        <title>{title && `${title} | `}SHOW&NEWS</title>
        <meta name="keywords" content={keywords.join()} />
        <meta name="description" content={description} />
      </Head>
      
      <Navigation />
      <main className={styles.content}>{children}</main>
    </div>
  )
}

export default MainLayout