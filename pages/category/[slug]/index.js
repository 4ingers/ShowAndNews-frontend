import { useRouter } from 'next/router'

import { SECTION_POST_COUNT } from "@/constants"
import MainLayout from '@/components/layouts/MainLayout'
import PostsSectionLayout from '@/components/layouts/PostsSectionLayout'
import { getAllCategories, getCategoryName } from '@/lib/api/category'
import { getPosts, getAllCategoryPostsCount } from '@/lib/api/post'


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
      <PostsSectionLayout
        allSectionPostsCount={allCategoryPostsCount}
        sectionTitle={categoryName}
        posts={posts}
        showPagination
        page={page || 1}
        onPageChange={onPageChange}
        pageSize={SECTION_POST_COUNT}
      />
    </MainLayout >
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const categoryName = await getCategoryName({slug})
  const allCategoryPostsCount = await getAllCategoryPostsCount({ slug })
  const posts = await getPosts({
    category: slug,
    limit: SECTION_POST_COUNT,
  })

  return {
    props: {
      categoryName,
      allCategoryPostsCount,
      posts,
    },
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  const allCategories = await getAllCategories()
  return {
    fallback: false,
    paths: allCategories?.map(category => `/category/${category.slug}`) || [],
  }
}