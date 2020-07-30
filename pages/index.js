import withApollo from '../lib/apollo'
import Head from 'next/head'
import Link from 'next/link'

import MainLayout from '@/components/layouts/MainLayout'


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

export default withApollo({ ssr: true })(IndexPage)