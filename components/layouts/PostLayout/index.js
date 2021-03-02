import Link from 'next/link'
import Moment from 'react-moment';

import styles from './styles.module.scss'
import TagRow from '@/components/TagRow'


const PostLayout = ({ post }) => {
  const {
    title,
    description,
    category,
    coverImage,
    content,
    date,
    tags
  } = post

  return (
    <article>
      <div className={styles.container}>
        <header>
          <div className={styles.header}>
            <figure>
              <img
                className={styles.coverImage}
                src={coverImage.url}
                alt={coverImage.alternativeText}
              />
            </figure>

            <h1 className={styles.title}>{title}</h1>


            <p className={styles.category}>{category.name}</p>

            <p className={styles.date}>
              <Moment fromNow>
                {new Date(date).toISOString()}
              </Moment>
            </p>
          </div>
        </header>
        

        <div
          className={styles.postBody}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <footer className={styles.footer}>
          <div className={styles.tags}>
            <TagRow tags={post.tags} />
          </div>
        </footer>
      </div>
    </article>
  )
}

export default PostLayout

