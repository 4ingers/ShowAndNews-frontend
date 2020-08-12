import classnames from 'classnames'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import styles from './styles.module.scss'


const GET_POSTS = gql`
  query getPostsByTag($tagSlug: String, $offset: Int, $limit: Int) {
    getPostsByTag(tagSlug: $tagSlug, offset: $offset, limit: $limit) {
      id
      image
      title
      description
      content
      category {
        name
        slug
      }
      tags {
        name
        slug
      }
      slug
      createdAt
    }
  }
`

const TagLayout = ({ slug: tagSlug }) => {
  const initialOffset = 0
  const initialLimit = 1000

  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: {
      tagSlug,
      offset: initialOffset,
      limit: initialLimit
    }
  });
  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  const fetchedPosts = data.getPostsByTag

  return (
    <pre className={classnames(styles.content)}>
      {JSON.stringify(fetchedPosts, null, 2)}
    </pre>
  )
}

export default TagLayout