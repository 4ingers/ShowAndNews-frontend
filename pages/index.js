// import withApollo from '../lib/withApollo'
import Head from 'next/head'
import Link from 'next/link'

import MainLayout from '@/components/MainLayout'


const IndexPage = () => {
  const meta = {
    title: 'a',
    keywords: [
      'a'
    ],
    description: 'a'
  }

  return (
    <MainLayout meta={meta}>
      
    </MainLayout >
  )
}

// export default withApollo({ ssr: true })(IndexPage)
export default IndexPage