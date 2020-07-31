import styles from './styles.module.scss'
import MasonryPost from './MasonryPost'

export default function PostsMasonry({posts, columns, tagsOnTop}) {
  return (
    // 1fr ?.....
    <section className={styles.masonry}>
      { posts.map((post, index) =>
        <MasonryPost {...{post, index, tagsOnTop, key: index}} />
      )}

      <style jsx>{`
        section {
          grid-template-columns: repeat(${columns}, minmax(275px, 1fr));
        }
      `}</style>
    </section>
  )  
}