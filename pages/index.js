import { getPosts } from '@/lib/api/post'
import { getAllCategories } from '@/lib/api/category'
import MainLayout from '@/components/layouts/MainLayout'
import IndexLayout from '@/components/layouts/IndexLayout'
import { INDEX_CATEGORY_POST_COUNT } from '@/constants'


export default function IndexPage({ sliderPosts, categoriesPosts }) {
  return (
    <MainLayout>
      <IndexLayout
        sliderPosts={sliderPosts}
        categoriesPosts={categoriesPosts}
      />
    </MainLayout >
  )
}

export async function getStaticProps() {
  const categories = (await getAllCategories()) || []

  let categoriesPosts = await Promise.all(
    categories.map(async category => (await {
      ...category,
      posts: await getPosts({
        category: category.slug,
        limit: INDEX_CATEGORY_POST_COUNT + 1,
      })
    }
    ))
  )

  let sliderPosts = []
  categoriesPosts.forEach(category => {
    if (category.posts.length)
      sliderPosts.push(category.posts.pop())
  });

  return {
    props: {
      sliderPosts,
      categoriesPosts
    },
    revalidate: 5,
  }
}