import { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Pagination } from 'antd'

import { useUpdateEffect } from '@/hooks'
import styles from './styles.module.scss'
import PostsGrid from '@/components/feed/PostsGrid'


const GET_POSTS = gql`
  query getPostsByCategory($catSlug: String, $offset: Int, $limit: Int) {
    getPostsByCategoryCount(catSlug: $catSlug)
    getPostsByCategory(catSlug: $catSlug, offset: $offset, limit: $limit) {
      id
      image
      title
      content
      createdAt
      category
      description
      author
      tagsName
      tagsSlug
      slug
    }
  }
`


const CategoryLayout = ({ slug: catSlug }) => {
  const initialPageSize = 9
  
  const [pageSize, setPageSize] = useState(initialPageSize)
  const [current, setCurrent] = useState(1)
  
  useUpdateEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [current, pageSize])
  
  const onShowSizeChange = (_, pageSize) => {
    setCurrent(1)
    setPageSize(pageSize)
  }
  
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: {
      catSlug,
      offset: (current - 1) * pageSize,
      limit: pageSize
    }
  })
  if (error) return <h1>Ошибка!</h1>
  if (loading) return <h1>Загрузка...</h1>
  
  const fetchedPosts = data.getPostsByCategory

  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <section className={styles.featuredPostsContainer}>
          <PostsGrid posts={fetchedPosts} />
          <Pagination
            showSizeChanger
            hideOnSinglePage
            onShowSizeChange={onShowSizeChange}
            pageSize={pageSize}
            total={data.getPostsByCategoryCount}
            defaultCurrent={current}
            onChange={setCurrent}
          />
        </section>
      </div>
    </section>
  )
}

export default CategoryLayout