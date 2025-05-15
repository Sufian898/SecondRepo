import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://officesnapshots.com/wp-content/uploads/2025/02/muse-group-offices-limassol-13-1200x900-compact.jpg',
    title: 'NETITsokTIon Software',
    description: 'Faisalabad Branch Main Jaranawala Road.',
  },
  {
    image: 'https://officesnapshots.com/wp-content/uploads/2025/02/confidential-global-tech-company-offices-cyberjaya-5-1200x638-compact.jpg',
    title: 'NETITsokTIon Software',
    description: 'Rawalpindi Branch Lethral Road Khannapul Dubai Tower 3rd Floor Office No# 220.',
  },
  {
    image: 'https://officesnapshots.com/wp-content/uploads/2025/01/confidential-client-offices-gurugram-8-1200x800-compact.jpg',
    title: 'NETITsokTIon Software',
    description: 'Islamabad Branch Blue Area Khabar Plaza 2nd Floor Office No# 129.',
  },
  {
    image: 'https://officesnapshots.com/wp-content/uploads/2025/02/fuscoe-engineering-offices-irvine-3-1200x800-compact.jpg',
    title: 'NETITsokTIon Software',
    description: 'Lahore Branch Service Road Raheem Plaza 1st Floor Office No# 02.',
  },
  {
    image: 'https://officesnapshots.com/wp-content/uploads/2025/02/fuscoe-engineering-offices-irvine-8-1200x800-compact.jpg',
    title: 'NETITsokTIon Software',
    description: 'Sargodha Branch University Road Rehman Plaza office No #102.',
  },
];

const GallerySlider = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-16">
          <h2 className="text-center text-gray-900 dark:text-white text-4xl font-bold">Sub Branches</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg">
          "Unlocking Innovation: How Our Software Solutions Transform Businesses"
          </p>
        </div>

        <div className="relative mx-auto">
          {/* Navigation Buttons */}
          <div className="swiper-button-prev absolute top-1/2 left-0 z-10 hidden xl:flex -translate-y-1/2 items-center justify-center w-11 h-11 border border-gray-300 dark:border-gray-600 rounded-lg group hover:bg-gray-900 dark:hover:bg-white transition">
            <svg className="text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-gray-900" width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              1280: { slidesPerView: 3 },
              1024: { slidesPerView: 2.5 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            className="!overflow-visible"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="group cursor-pointer">
                <div
                  className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105"
                  onClick={() => setLightbox(slide.image)}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">{slide.title}</h5>
                    <p className="text-base text-gray-600 dark:text-gray-400">{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-next absolute top-1/2 right-0 z-10 hidden xl:flex -translate-y-1/2 items-center justify-center w-11 h-11 border border-gray-300 dark:border-gray-600 rounded-lg group hover:bg-gray-900 dark:hover:bg-white transition">
            <svg className="text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-gray-900" width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="Zoomed" className="max-w-full max-h-[90vh] rounded-lg" />
        </div>
      )}
    </section>
  );
};

export default GallerySlider;
