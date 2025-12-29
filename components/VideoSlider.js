import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper CSS

const VideoSlider = () => {
  // State to store the uploaded videos and video previews
  const [videos, setVideos] = useState([]);
  const [videoPreviews, setVideoPreviews] = useState([]);

  // Handle video upload
  const handleVideoUpload = (event) => {
    const files = event.target.files;
    const newVideos = [];
    const newPreviews = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.includes("video")) {
        // Create object URL for the video and add to the state
        newVideos.push(URL.createObjectURL(file));
        // Add video thumbnail preview (optional, for user feedback)
        newPreviews.push(URL.createObjectURL(file));
      }
    }
    
    setVideos((prev) => [...prev, ...newVideos]); // Add new videos to state
    setVideoPreviews((prev) => [...prev, ...newPreviews]); // Add video previews to state
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl text-white font-bold">Created Videos</h2>

        {/* File input for uploading videos */}
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          multiple
          className="my-4 px-4 py-2 bg-violet-500 text-white rounded-md cursor-pointer"
        />

        {/* Display uploaded video previews */}
        <div className="my-10">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop
            navigation
            className="my-10"
          >
            {/* Map through the uploaded videos and create a slide for each */}
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-80 bg-gray-800 rounded-lg overflow-hidden">
                  <video className="w-full h-full object-cover" controls>
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;
