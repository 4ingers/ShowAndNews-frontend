import MainLayout from '@/components/layouts/MainLayout'
import AutoPlaySlider from '@/components/feed/IndexSlider'


const IndexPage = () => {
  const meta = {
    title: 'a',
    keywords: [
      'a'
    ],
    description: 'a'
  }

  return (
    <MainLayout meta={meta}>
      <AutoPlaySlider posts={fetchedPosts}/>
    </MainLayout >
  )
}

export default IndexPage