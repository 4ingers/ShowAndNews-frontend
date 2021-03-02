import { Pagination } from 'antd'

import styles from './styles.module.scss'
import PostsGrid from '@/components/feed/PostsGrid'


export default function PostsSectionLayout({
  sectionTitle,
  allSectionPostsCount,
  posts,
  showPagination,
  page,
  onPageChange,
  pageSize
}) {
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <div className={styles.postsGrid}>
          {posts.length ? <>
            <h1 className={styles.sectionTitle}>{sectionTitle}</h1>
            <PostsGrid posts={posts} />
          </> : (
              <h2>Постов пока нет</h2>
            )
          }
        </div>
        {showPagination &&
          <div className={styles.pagination}>
            <Pagination
              hideOnSinglePage
              pageSize={pageSize}
              total={allSectionPostsCount}
              current={page}
              onChange={page => onPageChange(page)}
            />
          </div>
        }
      </div>
    </section>
  )
}