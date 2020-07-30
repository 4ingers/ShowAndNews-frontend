import withApollo from '@/lib/apollo'
import { useRouter } from 'next/router'

import MainLayout from '@/components/layouts/MainLayout'
import Category from '@/components/body/Category'


const CategoryPage = () => {
  const router = useRouter()

  const meta = {
    title: 'a',
    keywords: [
      'a'
    ],
    description: 'a'
  }

  const categoryId = Number.parseInt(router.query.id)

  return (
    <MainLayout meta={meta}>
      {/* {isNaN(categoryId) ? : <CategoryBody category_id={id} />} */}
      {isNaN(categoryId) || <Category category_id={categoryId} />}
    </MainLayout >
  )
}

export default withApollo({ ssr: true })(CategoryPage)