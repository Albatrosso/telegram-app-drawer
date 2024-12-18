import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import styles from './SliderComponent.module.scss';
import SliderComponentItem from './SliderComponentItem/SliderComponentItem';

interface SliderData {
  headerText: string;
  footerText: string;
  hasImage: boolean;
}

interface SliderComponentProps {
  slides: SliderData[];
  isSquare?: boolean;
}

const SliderComponent: React.FC<SliderComponentProps> = ({ slides, isSquare = false }) => {
  return (
    <div className={styles.SliderComponent}>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={!isSquare && { clickable: true }}
        navigation
        spaceBetween={30}
        slidesPerView={isSquare ? 'auto' : 1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={isSquare ? { width: '50%' } : undefined}
          >
            <SliderComponentItem
              headerText={slide.headerText}
              footerText={slide.footerText}
              hasImage={slide.hasImage}
              isSquare={isSquare}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComponent;