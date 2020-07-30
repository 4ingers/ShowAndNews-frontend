import React from 'react'
import MasonryPost from './MasonryPost'

export default function PostsMasonry({posts, columns, tagsOnTop}) {
  return (
    // 1fr ?.....
    <section className="masonry" style={{gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))`}}>
      { posts.map((post, index) =>
        <MasonryPost {...{post, index, tagsOnTop, key: index}} />
      )}
    </section>
  )  
}