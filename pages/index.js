import MainLayout from '@/components/layouts/MainLayout'
import IndexLayout from '@/components/layouts/pages/IndexLayout'


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
      <IndexLayout />
    </MainLayout >
  )
}

export default IndexPage