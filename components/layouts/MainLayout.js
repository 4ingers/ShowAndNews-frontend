import {Navigation} from '@/components/header/navigation/Navigation'
import Head from 'next/head'

export const MainLayout = (props) => {
  const {
    children, 
    meta: {
      title, 
      keywords, 
      description
    }
  } = props

  return (
    <>
      <Head>
        <title>Show&News{title && ` | ${title}`}</title>
        <meta name="keywords" content={keywords.join()} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
      </Head>

      <Navigation />

      <style jsx>{`

      `}</style>
    </>
  )
}