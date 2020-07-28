import moment from 'moment'

// import {gql} from 'apollo-boost'
// import {useQuery} from 'react-apollo'

// const GETFROM4 = gql`
//   query Todo {
//     getPostsByCategory(category_id: 4) {
//       id
//       image
//       title
//       updated_at
//       categories
//       description
//       author
//     }
//   }
// `

// export default function FeaturedPost() {
//   const { loading, error, data } = useQuery(GETFROM4);

//   if (loading) return 'Loading...';
//   if (error) return 'Error...';

//   return(
//     data.getPostsByCategory.map(post => {
//       return {
//         title: post.title,
//         date: post.created_at,
//         link: '',
//         categories: post.categories,
//         image: post.image
//       }
//     })
//   )
// }

export default [
  {
    title: 'Twitter says hackers ‘manipulated’ employees to access accounts',
    date: moment().toISOString(),
    categories: ['Cat1', 'Cat2'],
    link: '#',
    image: 'a1.jpg'
  },
  {
    title: 'A teenage prank was behind massive Twitter hack, report says',
    date: moment().toISOString(),
    categories: ['Cat1', 'Cat2'],
    link: '#',
    image: 'a2.jpg'
  },
  {
    title: 'These 4 Signs Suggest Bitcoin Is on the Verge of a Massive Move Higher',
    date: moment().toISOString(),
    categories: ['Cat1', 'Cat2'],
    link: '#',
    image: 'a3.jpg'
  },
  {
    title: 'Getting Out of Cash Is Key to Wealth and Inflation Protection, Pompliano Says',
    date: moment().toISOString(),
    categories: ['Cat1', 'Cat2'],
    link: '#',
    image: 'a4.jpg'
  },
//   {
//     title: 'Kanye West shared an image of his face carved into Mount Rushmore as he preps his 2020 candidacy',
//     date: moment().format('MMMM DD, YYYY'),
//     categories: ['Cat1', 'Cat2'],
//     link: '#',
//     image: 'a5.jpg'
//   },
//   {
//     title: 'Analyst: Bitcoin to See One Final Downtrend Before Bull Run Begins',
//     date: moment().format('MMMM DD, YYYY'),
//     categories: ['Cat1', 'Cat2'],
//     link: '#',
//     image: 'a6.jpg'
//   },
]