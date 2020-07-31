import Link from 'next/link';

import styles from './styles.module.scss'


const Logo = () => {
  return (
    <Link href="/">
      <a className={styles.logoTitle}>
        SHOWANDNEWS.COM
      </a>
    </Link>
  )
}

export default Logo