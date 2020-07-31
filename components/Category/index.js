import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import styles from './styles.module'
import PostsMasonry from '@/components/feed/PostsMasonry'


const QUERY = gql`
  query postsByCategory($slug: String){
    getPostsByCategory(slug: $slug) {
      id
      image
      title
      created_at
      category
      description
      author
      tags
      slug
    }
  }
`


const Category = ({ slug }) => {
  const { loading, error, data } = useQuery(QUERY, {
    variables: {
      slug
    }
  });

  if (error)
    return <h1>Error</h1>
  if (loading)
    return <h1>Loading...</h1>;

  const fetchedPosts = data.getPostsByCategory.map(post => (
    {
      title: post.title,
      datetime: post.created_at,
      category: post.category,
      tags: post.tags,
      image: post.image,
      slug: post.slug
    }
  ))

  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <section className={styles.featuredPostsContainer}>
          <PostsMasonry posts={fetchedPosts} columns={2} tagsOnTop={true} />
        </section>
      </div>
    </section>
  )
}

export default Category