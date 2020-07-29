import React, {useState, useMemo, useEffect} from 'react'
import {Link} from 'next'
// Get rid of it
import {Pagination} from 'antd'
import {TagRow} from '../post'

export default function PostGrid({posts}) {
  const [pageSize, setPageSize] = useState(9)
  const [current, setCurrent] = useState(1);

  const paginatedPosts = useMemo(() => {
    const lastIndex = current * pageSize
    const firstIndex = lastIndex - pageSize

    return posts.slice(firstIndex, lastIndex)
  }, [current, pageSize, posts])

  useEffect(() => {
    window.scroll({
      top: 500,
      left: 0,
      behavior: 'smooth'
    })
  }, [current, pageSize]);
   
  return (
    <section className="grid-pagination-container">
      <section className="post-grid container">
      {paginatedPosts.map((post, index) => (
        <div className="post-container" key={index}>
          <figure>
            {/* <Link href={post.link}> */}
              <img src={require(`../../../assets/images/${post.image}`)} alt={post.image} />
            {/* </Link> */}
          </figure>
          <TagRow tags={post.categories} />
          <h2>{post.title}</h2>
          <p className="author-text">
            <span>
              {/* By:<Link href={`/authors/${post.author}`}>{post.author}</Link> */}
            </span>
            <span>
               - {post.date}
            </span>
          </p>
          <p className="description-text">
            {post.description}
          </p>
          {/* <Link href={post.link}>Read more...</Link> */}
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