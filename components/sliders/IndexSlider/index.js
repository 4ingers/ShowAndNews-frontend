import Link from 'next/link'
import Slider from "react-slick";

import styles from './styles.module.scss'
import classnames from 'classnames'


const SlideCard = ({ post, ...rest }) => {
  const bgImage = { backgroundImage: `url(/images/${post.image})` }
  return (
    <div {...rest}>
      <Link href="/post/[slug]" as={`/post/${post.slug}`}>
        <a className={classnames(styles.card, styles.overlay)} style={bgImage}>
          <div className={styles.content}>
            <h2 className={styles.title}>{post.title}</h2>
          </div>
        </a>
      </Link>
    </div>
  )
}


const AutoPlaySlider = ({ posts, ...rest }) => {
  const settings = {
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    speed: 4000,
    // autoplay: true,
    autoplaySpeed: 8000,
    swipeToSlide: true,
    pauseOnHover: true,
  }
  return (
    <div className={styles.sliderWrapper}>
      <Slider {...settings}>
        {posts.map((post, i) => (
          <SlideCard key={i} post={post} />
        ))}
      </Slider>
    </div>
  )
}

const SampleNextArrow = ({ className, onClick }) =>
  <div className={classnames(className, styles.nextArrow)} onClick={onClick} />

const SamplePrevArrow = ({ className, onClick }) =>
  <div className={classnames(className, styles.prevArrow)} onClick={onClick} />


export default AutoPlaySlider