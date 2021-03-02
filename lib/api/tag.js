import { fetchAPI } from './fetchAPI'

export async function getAllTags() {
  const data = await fetchAPI(`
  {
    tags {
      name
      slug
    }
  }
  `)
  return data?.tags
}

export async function getTagName({ slug }) {
  const data = await fetchAPI(`
    query TagName($where: JSON) {
      tags(where: $where) {
        name
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
  return data?.tags[0]?.name
}