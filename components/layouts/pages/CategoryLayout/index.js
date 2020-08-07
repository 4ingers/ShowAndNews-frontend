import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Pagination } from 'antd'

import useUpdateEffect from './hooks'
import styles from './styles.module.scss'
import PostsGrid from '@/components/feed/PostsGrid'


const GET_POSTS = gql`
  query getPostsByCategory($catSlug: String, $offset: Int, $limit: Int) {
    getPostCount
    getPostsByCategory(catSlug: $catSlug, offset: $offset, limit: $limit) {
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


const CategoryLayout = ({ slug: catSlug }) => {
  const initialPageSize = 9
  
  const [pageSize, setPageSize] = useState(initialPageSize)
  const [currentPage, setCurrent] = useState(1)
  
  useUpdateEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [currentPage, pageSize])
  
  const onShowSizeChange = (_, pageSize) => {
    setCurrent(1)
    setPageSize(pageSize)
  }
  
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: {
      catSlug,
      offset: (currentPage - 1) * pageSize,
      limit: pageSize
    }
  })
  if (error) return <h1>Ошибка!</h1>
  if (loading) return <h1>Загрузка...</h1>
  
  const posts = data.getPostsByCategory.map((post) => ({
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
    <section className={styles.container}>
      <div className={styles.row}>
        <section className={styles.featuredPostsContainer}>
          <PostsGrid posts={posts} />
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            pageSize={pageSize}
            total={data.getPostCount}
            defaultCurrent={currentPage}
            onChange={setCurrent}
          />
        </section>
      </div>
    </section>
  )
}

export default CategoryLayout