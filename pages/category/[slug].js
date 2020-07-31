// import withApollo from '@/lib/withApollo'
import { useRouter } from 'next/router'

import MainLayout from '@/components/MainLayout'
import Category from '@/components/Category'


const CategoryPage = () => {
  const router = useRouter()

  const meta = {
    title: 'a',
    keywords: [
      'a'
    ],
    description: 'a'
  }

  const { query: { slug } } = router

  return (
    <MainLayout meta={meta}>
      <Category slug={slug} />
    </MainLayout >
  )
}

// export default withApollo({ ssr: true })(CategoryPage)
export default CategoryPage