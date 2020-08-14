import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import MainLayout from '@/components/layouts/MainLayout'
import PostLayout from '@/components/layouts/PostLayout'


export default function PostPage({ post, preview }) {
  const meta = {
    title: 'a',
    keywords: [
      'a'
    ],
    description: 'a'
  }

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return <>
    <MainLayout meta={meta}>
      {
        router.isFallback
          ? <h1>Loading...</h1>
          : <PostLayout post={post} />
      }
    </MainLayout>
  </>
}


export async function getStaticProps({ params, preview = null }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  const content = await markdownToHtml(data?.posts[0]?.content || '')

  return {
    props: {
      preview,
      post: {
        ...data?.posts[0],
        content,
      },
      morePosts: data?.morePosts,
    },
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map((post) => `/posts/${post.slug}`) || [],
    fallback: true,
  }
}
