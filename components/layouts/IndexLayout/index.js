import styles from './styles.module.scss'
import AutoPlaySlider from '@/components/IndexSlider'
import PostsGrid from '@/components/feed/PostsGrid'


const IndexLayout = ({ sliderPosts, categoriesPosts }) => {
  const filteredCategoriesPosts = categoriesPosts.filter(categoryPosts => categoryPosts.posts.length)

  return (
    <div className={styles.pageContainer}>
      <header>
        <AutoPlaySlider posts={sliderPosts} />
      </header>

      <div className={styles.main}>
        <div className={styles.categoriesPosts}>
          {filteredCategoriesPosts.map((categoryPosts, index) => (
            <section className={styles.categoryPosts} key={index}>
              <h1>{categoryPosts.name}</h1>
              <PostsGrid posts={categoryPosts.posts} />
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IndexLayout