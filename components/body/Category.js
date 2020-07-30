import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import PostsMasonry from './feed/PostsMasonry'


const QUERY = gql`
  query postsByCategory($category_id: Int){
    getPostsByCategory(category_id: $category_id) {
      id
      image
      title
      created_at
      category
      description
      author
      tags
      path
    }
  }
`


const Category = (props) => {
  const { loading, error, data } = useQuery(QUERY, {
    variables: {
      category_id: props.category_id
    }
  });
  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>;

  const fetchedPosts = data.getPostsByCategory.map(post => (
    {
      title: post.title,
      datetime: post.created_at,
      category: post.category,
      tags: post.tags,
      image: post.image,
      path: post.path
    }
  ))

  return (
    <main className="home">
      <section className="container">
        <div className="row">
          <section className="featured-posts-container">
            <PostsMasonry posts={fetchedPosts} columns={2} tagsOnTop={true} />
          </section>
        </div>
      </section>
    </main>
  )
}

export default Category