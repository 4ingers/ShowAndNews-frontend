import {useRouter} from 'next/router'

import MainLayout from '@/components/layouts/MainLayout'
import PostLayout from '@/components/layouts/pages/PostLayout'


const PostPage = () => {
  const router = useRouter()
  const { query: { slug } } = router

  const meta = {
    title: 'a',
    keywords: [
      'a'
    ],
    description: 'a'
  }

  return <>
    <MainLayout meta={meta}>
      <PostLayout slug={slug} />
    </MainLayout>
  </>
}

export default PostPage