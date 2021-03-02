import Link from 'next/link'
import Slider from "react-slick";

import styles from './styles.module.scss'
import classnames from 'classnames'


const SlideCard = ({ post, ...rest }) => {
  const { title, slug, coverImage  } = post
  const bgImage = { backgroundImage: `url(${coverImage.url})` }

  return (
    <div {...rest}>
      <Link href="/post/[slug]" as={`/post/${slug}`}>
        <a className={classnames(styles.card, styles.overlay)} style={bgImage}>
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
          </div>
        </a>
      </Link>
    </div>
  )
}


const AutoPlaySlider = ({ posts, ...rest }) => {
  const settings = {
    fade: true,
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
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