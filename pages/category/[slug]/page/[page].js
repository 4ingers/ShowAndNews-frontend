import { useRouter } from 'next/router'

import { SECTION_POST_COUNT } from '@/constants'
import MainLayout from '@/components/layouts/MainLayout'
import PostsSectionLayout from '@/components/layouts/PostsSectionLayout'
import { getPosts, getAllCategoryPostsCount } from '@/lib/api/post'
import { getCategoryName } from '@/lib/api/category'


export default function CategoryPage({ posts, allCategoryPostsCount, categoryName }) {
  const router = useRouter()
  const { slug, page } = router.query

  const onPageChange = page => {
    if (page === 1)
      return router.push('/category/[slug]', `/category/${slug}`)
    else
      return router.push('/category/[slug]/page/[page]', `/category/${slug}/page/${page}`)
  }

  return (
    <MainLayout>
      {!router.isFallback && (
        <>
          <PostsSectionLayout
            allSectionPostsCount={allCategoryPostsCount}
            sectionTitle={categoryName}
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
  const categoryName = await getCategoryName({slug})
  const allCategoryPostsCount = await getAllCategoryPostsCount({ slug })

  let page = +params?.page
  page = (page >= 1 && page <= Math.ceil(allCategoryPostsCount / SECTION_POST_COUNT)) ? page : 1

  const posts = await getPosts({
    category: params?.slug,
    start: (page - 1) * SECTION_POST_COUNT,
    limit: SECTION_POST_COUNT,
  })

  return {
    props: {
      categoryName,
      allCategoryPostsCount,
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