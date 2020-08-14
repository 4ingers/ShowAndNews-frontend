import classnames from 'classnames'

import styles from './styles.module.scss'


const PostLayout = ({ post }) => {  
  return (
    <pre className={classnames(styles.container)}>
      {JSON.stringify(post, null, 2)}
    </pre>
  )
}

export default PostLayout