import { fetchAPI } from './fetchAPI'

export async function getAllCategories() {
  const data = await fetchAPI(`
  {
    categories {
      name
      slug
    }
  }
  `)
  return data?.categories
}

export async function getCategoryName({ slug }) {
  const data = await fetchAPI(`
    query CategoryName($where: JSON) {
      categories(where: $where) {
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
  return data?.categories[0]?.name
}