import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper CSS

const VideoSlider = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl text-white font-bold">Created Videos</h2>
        <div className="my-10">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop
            navigation
            className="my-10"
          >
            {/* Video slide 1 */}
            <SwiperSlide>
              <div className="w-full h-80 bg-gray-800 rounded-lg overflow-hidden">
                <video className="w-full h-full object-cover" controls>
                  <source src="video1.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            {/* Video slide 2 */}
            <SwiperSlide>
              <div className="w-full h-80 bg-gray-800 rounded-lg overflow-hidden">
                <video className="w-full h-full object-cover" controls>
                  <source src="video2.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            {/* Video slide 3 */}
            <SwiperSlide>
              <div className="w-full h-80 bg-gray-800 rounded-lg overflow-hidden">
                <video className="w-full h-full object-cover" controls>
                  <source src="video3.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            {/* Add more slides as needed */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;
