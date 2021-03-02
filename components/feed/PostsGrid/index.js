import classnames from 'classnames'
import Link from 'next/link'
import Moment from 'react-moment';

import styles from './styles.module.scss'
import TagRow from '@/components/TagRow'


const PostsGrid = ({ posts }) => {
  return (
    <section className={styles.gridPaginationContainer}>
      <section className={classnames(styles.postGrid, styles.container)}>
        {posts.length && posts.map((post, i) => (
          <div className={styles.postContainer} key={i}>
            <figure>
              <Link href={`/post/${post.slug}`} >
                <a>
                  <img src={post.coverImage.url} alt={post.alternativeText} />
                </a>
              </Link>
            </figure>

            <div className={styles.tags}>
              <TagRow tags={post.tags} />
            </div>

            <h2 className={styles.title}>{post.title}</h2>

            <p className={styles.date}>
              <span>
                <Moment fromNow>
                  {new Date(post.date).toISOString()}
                </Moment>
              </span>
            </p>

          </div>
        ))}
      </section>
    </section>
  )
}

export default PostsGrid
