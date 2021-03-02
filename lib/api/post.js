import { fetchAPI } from './fetchAPI'


export async function getPreviewPostBySlug({ slug }) {
  const data = await fetchAPI(`
    query PostBySlug($where: JSON) {
      posts(where: $where) {
        slug
      }
    }
    `,
    {
      variables: {
        where: {
          slug,
        },
      },
    }
  )
  return data?.posts[0]
}

export async function getAllCategoryPostsCount({ slug }) {
  const data = await fetchAPI(`
    query PostsCount($where: JSON) {
      postsConnection(where: $where) {
        aggregate {
          count
        }
      }
    }
  `,
    {
      variables: {
        where: {
          category: {
            slug
          }
        }
      }
    })
  return data?.postsConnection.aggregate.count
}

export async function getAllTagPostsCount({ slug }) {
  const data = await fetchAPI(`
    query PostsCount($where: JSON) {
      postsConnection(where: $where) {
        aggregate {
          count
        }
      }
    }
  `,
    {
      variables: {
        where: {
          tags: {
            slug
          }
        }
      }
    })
  return data?.postsConnection.aggregate.count
}

export async function getPosts({ start, limit, category, tag }) {
  const data = await fetchAPI(`
    query Posts($where: JSON, $start: Int, $limit: Int){
      posts(sort: "date:desc", where: $where, start: $start, limit: $limit) {
        title
        slug
        date
        coverImage {
          url
        }
        tags {
          name
          slug
        }
        category {
          name
          slug
        }
      }
    }
    `,
    {
      variables: {
        where: {
          category: {
            slug: category
          },
          tags: {
            slug: tag
          }
        },
        limit,
        start
      },
    }
  )
  return data?.posts
}

export async function getPostAndMorePosts({ slug, preview }) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON, $where_ne: JSON) {
    posts(where: $where) {
      title
      slug
      content
      date
      coverImage {
        url
        alternativeText
      }
      category {
        name
      }
      tags {
        name
        slug
      }
    }

    morePosts: posts(sort: "date:desc", limit: 2, where: $where_ne) {
      title
      slug
      date
      status
      coverImage {
        url
      }
    }
  }
  `,
    {
      preview,
      variables: {
        where: {
          slug,
          ...(preview ? {} : { status: 'published' }),
        },
        where_ne: {
          ...(preview ? {} : { status: 'published' }),
          slug_ne: slug,
        },
      },
    }
  )
  return data
}
