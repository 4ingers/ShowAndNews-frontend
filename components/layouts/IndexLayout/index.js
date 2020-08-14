import classnames from 'classnames'

import styles from './styles.module.scss'
import AutoPlaySlider from '@/components/feed/IndexSlider'


const IndexLayout = () => {  
  return <>
    <AutoPlaySlider posts={fetchedPosts}/>
  </>
}

export default IndexLayout