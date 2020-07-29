import React from 'react'
import withApollo from '../lib/apollo'
import Head from 'next/head'
import Link from 'next/link'

import CategoryBody from '../components/body/CategoryBody'



const Index = ({categoryId}) => 
  <CategoryBody 
    category_id={1} />


export default withApollo({ ssr: true })(Index)