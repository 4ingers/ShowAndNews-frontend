import { useRouter } from 'next/router'

import MainLayout from '@/components/layouts/MainLayout'
import TagLayout from '@/components/layouts/TagLayout'


const TagPage = () => {
  const router = useRouter()
  const { query: { slug } } = router

  const meta = {
    title: 'a',
    keywords: [
      'a'
    ],
    description: 'a'
  }

  return (
    <MainLayout meta={meta}>
      <TagLayout slug={slug} />
    </MainLayout >
  )
}

export default TagPage