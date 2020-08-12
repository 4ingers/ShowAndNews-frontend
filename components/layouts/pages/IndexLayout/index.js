import classnames from 'classnames'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import styles from './styles.module.scss'
import AutoPlaySlider from '@/components/sliders/IndexSlider'

// const GET_RECENT_POSTS = gql`
//   query getPostsByType($type: String, $limit: Int) {
//     getPostsByType(type: $type, limit: $limit) {
//       image
//       title
//       description
//       category {
//         name
//         slug
//       }
//       slug
//     }
//   }
// `


const IndexLayout = () => {  
  const { loading, error, data } = useQuery(GET_RECENT_POSTS, {
    variables: {
      type: 'slider',
      limit: 3
    }
  })
  if (!data && loading) return <h1>Loading...</h1>
  if (error) return <h1>Error</h1>

  const fetchedPosts = data.getPostsByType

  return <>
    <AutoPlaySlider posts={fetchedPosts}/>
  </>
}

export default IndexLayout