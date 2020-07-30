import Head from 'next/head'

import styles from './style.module.scss'
import Navigation from '@/components/header/Navigation'


const MainLayout = ({ children, meta: { title, keywords, description } }) => {

  return (
    <div className={styles.mainLayout}>
      <Head>
        <title>Show&News{title && ` | ${title}`}</title>
        <meta name="keywords" content={keywords.join()} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
      </Head>

      <Navigation />

      <main className={styles.content}>
        {children}
      </main>
    </div>
  )
}

export default MainLayout