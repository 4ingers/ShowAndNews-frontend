import { useRouter } from 'next/router'

import { initializeApollo } from '@/lib/apolloClient'
import MainLayout from '@/components/layouts/MainLayout'
import CategoryLayout, { GET_CATEGORY_POSTS, getCategoryPostsVars } from '@/components/layouts/CategoryLayout'


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

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GET_CATEGORY_POSTS,
    variables: {
      slug,
      ...getCategoryPostsVars
    },
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  }
}

export default CategoryPage