import classnames from 'classnames'
import Link from 'next/link'

import styles from './styles.module.scss'
import TagRow from '@/components/feed/TagRow'


const PostsGrid = ({ posts }) => {
  return (
    <section className={styles.gridPaginationContainer}>
      <section className={classnames(styles.postGrid, styles.container)}>
        {posts.map((post, index) => (
          <div className={styles.postContainer} key={index}>
            <figure>
              <Link href={`/post/${post.slug}`} >
                <a>
                  <img src={`/images/${post.image}`} alt={post.image} />
                </a>
              </Link>
            </figure>

            <TagRow tagsName={post.tagsName} tagsSlug={post.tagsSlug} />

            <h2>
              {post.title}
            </h2>

            <p className={styles.authorText}>
              <span>
                {post.createdAt}
              </span>
            </p>

            <p className={styles.descriptionText}>
              {post.description}
            </p>

            <Link href={`post/${post.slug}`}>
              <a>Подробнее</a>
            </Link>
          </div>
        ))}
      </section>
    </section>
  )
}

export default PostsGrid