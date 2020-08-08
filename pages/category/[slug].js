import { useRouter } from 'next/router'

import MainLayout from '@/components/layouts/MainLayout'
import CategoryLayout from '@/components/layouts/pages/CategoryLayout'


const CategoryPage = () => {
  const meta = {
    title: 'a',
    keywords: [
      'a'
    ],
    description: 'a'
  }

  const { query: { slug } } = useRouter()

  return (
    <MainLayout meta={meta}>
      <CategoryLayout slug={slug} key={slug} />
    </MainLayout >
  )
}

export default CategoryPage