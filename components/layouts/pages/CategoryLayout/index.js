import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { Pagination } from 'antd'

import { useUpdateEffect } from '@/hooks'
import styles from './styles.module.scss'
import PostsGrid from '@/components/feed/PostsGrid'


export const GET_CATEGORY_POSTS = gql`
  query getPostsBySectionSlug($section: PostsSectionEnum!, $slug: String!, $offset: Int, $limit: Int) {
    _getPostsBySectionSlugMeta(section: $section, slug: $slug) {
      count
    }
    getPostsBySectionSlug(section: $section, slug: $slug, offset: $offset, limit: $limit) {
      image
      title
      description
      tags {
        name
        slug
      }
      slug
      createdAt
    }
  }
`

export const getCategoryPostsVars = {
  offset: 0,
  limit: 9
}


const CategoryLayout = ({ slug }) => {  
  const [pageSize, setPageSize] = useState(getCategoryPostsVars.limit)
  const [current, setCurrent] = useState(1)
  
  // useUpdateEffect(() => {
  //   window.scroll({ top: 0, behavior: 'smooth' })
  // }, [current, pageSize])
  
  const onShowSizeChange = (_, pageSize) => {
    setCurrent(1)
    setPageSize(pageSize)
  }
  
  const { loading, error, data } = useQuery(GET_CATEGORY_POSTS, {
    variables: {
      slug,
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