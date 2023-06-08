import { Navigation, Pagination, Scrollbar, A11y, EffectCube,Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"


export default function Category({ data, onClick }) {

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube,Autoplay]}
        spaceBetween={4}
        slidesPerView={7}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop={true}
      >
        {
          data.map((key, index) => (
            <SwiperSlide key={index} className='category'>
              <span>{key.strCategory}</span>
              <button key={index} className='buttons' onClick={() => onClick(key.strCategory)}>
                <img src={key.strCategoryThumb} alt={key.strCategoryThumb} width={70} height={70} />
              </button>

            </SwiperSlide>
          ))
        }
      </Swiper>

    </div>
  )

}