import { markdownify } from "@/lib/utils/textConverter";
import { useRef, useState } from "react";
import { Star } from "react-feather";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const TestimonialSlider = ({ list }) => {
  SwiperCore.use([Pagination]);
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);

  return (
    <div className="reviews-carousel relative">
      <Swiper
        pagination={{
          type: "bullets",
          el: paginationRef.current,
          clickable: true,
          dynamicBullets: true,
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        // navigation={{
        //   nextEl: ".custom-next",
        //   prevEl: ".custom-prev",
        // }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000, // Change slide every 3 seconds
          disableOnInteraction: true// Keeps autoplay even after user interaction
        }}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
  {/* <button className="custom-prev absolute left-0 top-1/2 z-20 transform -translate-y-1/2 bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-900">
    ‹
  </button>
  <button className="custom-next absolute right-0 top-1/2 z-20 transform -translate-y-1/2 bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-900">
    ›
  </button> */}


        {list.map((item, i) => (
          <SwiperSlide key={"feature-" + i}>
            <div className="review">
              <div className="review-author-avatar bg-gradient">
                <img src={item.avatar} alt="" />
              </div>
              <h4 className="mb-2">{item.author}</h4>
              <p className="mb-4 text-[#666]">{item.organization}</p>
              <p dangerouslySetInnerHTML={{__html: markdownify(item.content)}}/>
              <div
                className={`review-rating mt-2 flex items-center justify-center space-x-2.5 ${item.rating}  `}
              >
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative flex justify-center">
        <div
          width="100%"
          className="swiper-pagination reviews-carousel-pagination !bottom-0"
          style={{ width: "100%" }}
          ref={paginationRef}
        ></div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
