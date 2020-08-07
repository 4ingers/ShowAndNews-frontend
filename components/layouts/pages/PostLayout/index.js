import classnames from 'classnames'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import styles from './styles.module.scss'


const GET_POST = gql`
  query getPostBySlug($postSlug: String) {
    getPostBySlug(postSlug: $postSlug) {
      title
      description
      content
      image
      created_at
      # cat_name
      # cat_slug
      # tags_names
    }
  }
`


const PostLayout = ({ slug }) => {  
  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      postSlug: slug
    }
  })
  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  console.log(data.getPostBySlug);

  const fetchedPost = data.getPostBySlug

  return (
    <pre className={classnames(styles.container)}>
      {JSON.stringify(fetchedPost, null, 2)}
    </pre>
  )
}

export default PostLayout