import Slider from 'react-slick';
import 'animate.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './component.module.css';
import { useState } from 'react';

const sliderItems = [
  { image: '/images/pic1.jpg', text: 'Content for Slide 1' },
  { image: '/images/pic2.jpg', text: 'Content for Slide 2' },
  { image: '/images/pic3.jpg', text: 'Content for Slide 3' },
  { image: '/images/pic4.jpg', text: 'Content for Slide 4' },
  { image: '/images/pic5.jpg', text: 'Content for Slide 5' },
  { image: '/images/pic6.jpg', text: 'Content for Slide 6' },
  { image: '/images/pic7.jpg', text: 'Content for Slide 7' },
  { image: '/images/pic8.jpg', text: 'Content for Slide 8' },
  { image: '/images/pic12.jpg', text: 'Content for Slide 9' },
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide]= useState(0)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
      beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  return (
    <div className={styles.header}>
      <Slider {...settings}>
      {sliderItems.map((item, index) => (
      <div key={index} className={styles.slide}>
    <div className={styles.backgroundImage} style={{ backgroundImage: `url(${item.image})` }}></div>
    <div
  className={`${styles.textOverlay} ${
    currentSlide === index ? 'animate__animated animate__zoomIn animate__delay-2s' : ''
  }`}
>
      <p>{item.text}</p>
    </div>
  </div>
))}
      </Slider>
    </div>
  );
}
