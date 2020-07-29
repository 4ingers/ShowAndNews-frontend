import React from 'react'

import {TagRow} from '../../common'

export default function MasonryPost ({post, tagsOnTop}) {

  // const windowWidth = window.innerWidth
  // const imageBackground = { backgroundImage: `url("${require(`../../../assets/images/${post.image}`)}")` };

  // const style = windowWidth > 900 ? {...imageBackground, ...post.style} : imageBackground
  const style = {...post.style}

  return (
    <a className="masonry-post overlay" style={style} href={post.path}>
      <div className="image-text" style={{justifyContent: tagsOnTop ? 'space-between' : 'flex-end'}}>
        <TagRow tags={post.tags} />
        <div> 
          <h2 className="image-title">{post.title}</h2>
          <span className="image-date">{new Date(post.datetime).toUTCString()}</span>
        </div>
      </div>
    </a>
  )
}