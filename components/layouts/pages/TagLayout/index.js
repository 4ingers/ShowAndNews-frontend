import classnames from 'classnames'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import styles from './styles.module.scss'
// import PostsMasonry from '@/components/feed/PostsMasonry'


const GET_POSTS = gql`
  query getPostsByTag($tagSlug: String, $offset: Int, $limit: Int) {
    getPostsByTag(tagSlug: $tagSlug, offset: $offset, limit: $limit) {
      id
      image
      title
      content
      created_at
      category
      description
      author
      tags
      slug
    }
  }
`


const TagLayout = ({ slug, offset, limit }) => {

  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: {
      tagSlug: slug,
      offset, 
      limit
    }
  });
  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  const fetchedPosts = data.getPostsByTag.map(post => ({
    id: post.id,
    title: post.title,
    description: post.description,
    content: post.content,
    datetime: post.created_at,
    category: post.category,
    tags: post.tags,
    image: post.image,
    slug: post.slug
  }))

  return (
    <pre className={classnames(styles.content)}>
      {JSON.stringify(fetchedPosts, null, 2)}
    </pre>
  )
}

export default TagLayout