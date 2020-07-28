import React from 'react'
import Link from 'next/link'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import {withApollo} from 'next-apollo'

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

function CategoryPage(props) {
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
    // <main className="home">
    //   <section className="container">
    //     <div className="row">
    //       <section className="featured-posts-container">
    //         <PostMasonry posts={fetchedPosts} columns={2} tagsOnTop={true} />
    //       </section>
    //     </div>
    //   </section>
    // </main>
    <div>
      {fetchedPosts.map(post => (
        <h2>{post.title}</h2>
      ))}
    </div>
  )
}

// export default withApollo({ ssr: true })(CategoryPage)
export default CategoryPage