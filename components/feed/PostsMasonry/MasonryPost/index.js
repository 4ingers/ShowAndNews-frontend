import Link from 'next/link'
import { useState, useEffect } from 'react';

import styles from './styles.module.scss'
import TagRow from '../../TagRow'

const MasonryPost = ({ post, tagsOnTop }) => {

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  const imageBackground = { backgroundImage: `url(/images/${post.image})` };
  const style = windowWidth > 900 ? { ...imageBackground, ...post.style } : imageBackground

  return (
    <Link href="/post/[slug]" as={`/post/${post.slug}`}>
      <a className={styles.masonryPostOverlay} style={style}>
        <div className={styles.imageText} style={{ justifyContent: tagsOnTop ? 'space-between' : 'flex-end' }}>
          <TagRow tags={post.tags} />
          <div>
            <h2 className={styles.imageTitle}>{post.title}</h2>
            <span className={styles.imageDate}>
              {new Date(post.createdAt).toUTCString()}
            </span>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default MasonryPost