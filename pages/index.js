import React from 'react'
import withApollo from '../lib/apollo'
import Head from 'next/head'
import Link from 'next/link'

import CategoryPage from '../components/body/CategoryPage'




// const Index = ({categoryId}) => <CategoryPage category_id={1} />


export default withApollo({ ssr: true })(Index)
// export default Index