import Link from 'next/link'

import TagRow from './TagRow'

const MasonryPost = ({post, tagsOnTop}) => {

  // const windowWidth = window.innerWidth
  // const imageBackground = { backgroundImage: `url("${require(`../../../assets/images/${post.image}`)}")` };

  // const style = windowWidth > 900 ? {...imageBackground, ...post.style} : imageBackground
  const style = {...post.style}

  return (
    <Link href="/post/[slug]" as={`/post.${post.slug}`}>
      <a className="masonry-post overlay" style={style}>
        <div className="image-text" style={{justifyContent: tagsOnTop ? 'space-between' : 'flex-end'}}>
          <TagRow tags={post.tags} />
          <div> 
            <h2 className="image-title">{post.title}</h2>
            <span className="image-date">{new Date(post.datetime).toUTCString()}</span>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default MasonryPost