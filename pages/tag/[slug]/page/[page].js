import { useRouter } from 'next/router'

import { SECTION_POST_COUNT } from '@/constants'
import MainLayout from '@/components/layouts/MainLayout'
import PostsSectionLayout from '@/components/layouts/PostsSectionLayout'
import { getTagName } from '@/lib/api/tag'
import { getPosts, getAllTagPostsCount } from '@/lib/api/post'


export default function TagPage({ posts, allTagPostsCount, tagName }) {
  const router = useRouter()
  const { slug, page } = router.query

  const onPageChange = page => {
    if (page === 1)
      return router.push('/tag/[slug]', `/tag/${slug}`)
    else
      return router.push('/tag/[slug]/page/[page]', `/tag/${slug}/page/${page}`)
  }

  return (
    <MainLayout>
      {!router.isFallback && (
        <>
          <PostsSectionLayout
            allSectionPostsCount={allTagPostsCount}
            sectionTitle={tagName}
            posts={posts}
            showPagination
            page={page}
            onPageChange={onPageChange}
            pageSize={SECTION_POST_COUNT}
          />
        </>)}
    </MainLayout >
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const tagName = await getTagName({slug})
  const allTagPostsCount = await getAllTagPostsCount({ slug })

  let page = +params?.page
  page = (page >= 1 && page <= Math.ceil(allTagPostsCount / SECTION_POST_COUNT)) ? page : 1

  const posts = await getPosts({
    tag: params?.slug,
    start: (page - 1) * SECTION_POST_COUNT,
    limit: SECTION_POST_COUNT,
  })

  return {
    props: {
      tagName,
      allTagPostsCount,
      posts,
      page,
    },
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}