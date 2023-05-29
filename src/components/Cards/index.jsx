import im1 from '../../../public/img/cards/1.jpeg'
import im2 from '../../../public/img/cards/2.jpeg'
import im3 from '../../../public/img/cards/3.jpeg'
import im4 from '../../../public/img/cards/4.jpeg'
import im5 from '../../../public/img/cards/5.jpeg'
import im6 from '../../../public/img/cards/6.jpeg'
import im7 from '../../../public/img/cards/7.jpeg'
import im8 from '../../../public/img/cards/8.jpeg'
import im9 from '../../../public/img/cards/9.jpeg'
import im10 from '../../../public/img/cards/10.jpeg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styled from 'styled-components'

function Cards() {
  const slides = [im1, im2, im3, im4, im5, im6, im7, im8, im9, im10]
  return (
    <Container>
      <Swiper
        className="slide-container"
        modules={[Navigation, Pagination]}
        navigation
        pagination
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide} alt={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  .slide-container {
    max-width: 460px;
    width: 90%;
    max-height: 400px;
    user-select: none;

    img {
      width: 100%;
      height: 100%;
    }

    .swiper-button-prev,
    .swiper-button-next {
      --swiper-navigation-size: 30px;
    }
  }
`

export default Cards
