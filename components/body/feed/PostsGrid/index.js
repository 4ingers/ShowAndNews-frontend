import {useState, useMemo} from 'react'
import {Link} from 'next/link'

// Get rid of it
import {Pagination} from 'antd'
import {TagRow} from '@/components/body/feed/PostsMasonry/MasonryPost/TagRow'


const PostGrid = ({posts}) => {
  const [pageSize, setPageSize] = useState(9)
  const [current, setCurrent] = useState(1);

  const paginatedPosts = useMemo(() => {
    const lastIndex = current * pageSize
    const firstIndex = lastIndex - pageSize

    return posts.slice(firstIndex, lastIndex)
  }, [current, pageSize, posts])

  // useEffect(() => {
  //   window.scroll({
  //     top: 500,
  //     left: 0,
  //     behavior: 'smooth'
  //   })
  // }, [current, pageSize]);
   
  return (
    <section className="grid-pagination-container">
      <section className="post-grid container">
      {paginatedPosts.map((post, index) => (
        <div className="post-container" key={index}>
          <figure>
            <Link href={post.link}>
              <a>
                <img src={url(`/images/${post.image}`)} alt={post.image} />
              </a>
            </Link>
          </figure>
          <TagRow tags={post.categories} />
          <h2>{post.title}</h2>
          <p className="author-text">
            <span>
              {post.date}
            </span>
          </p>
          <p className="description-text">
            {post.description}
          </p>
          <Link href={post.link}>
            <a>
              Read more...
            </a>
          </Link>
        </div>
      ))}
      </section>
      <Pagination 
        simple
        showSizeChanger 
        onShowSizeChange={setPageSize} 
        pageSize={pageSize} 
        total={posts.length}
        defaultCurrent={current}
        onChange={setCurrent}
      />
    </section>
  )
}

export default PostGrid