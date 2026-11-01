'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Mousewheel, Navigation, Parallax } from 'swiper/modules';
import { Suspense } from 'react';
import type ArtImage from './Image';
import allImages from './ImageInfo';

function SlideImage({ image }: { image: ArtImage }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

      }}
      data-swiper-parallax='-23%'
    >
      <div className="bottom-0 left-0 absolute w-full h-full bg-gradient-to-t from-black to-transparent flex flex-col items-center justify-end">
        <div className="p-6 text-center">
          <h1 className="text-4xl font-bold text-white p-2" data-swiper-parallax="-300">
            {image.title}
          </h1>
          <h3 className="text-md font-light text-white" data-swiper-parallax="-100">
            {image.subtitle}
          </h3>
        </div>
      </div>
    </div>
  );
}

function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={50}
      modules={[Mousewheel, Navigation, Parallax]}
      mousewheel={{ forceToAxis: true }}
      speed={1200}
      navigation={true}
      loop={true}
      parallax={true}
      className="w-full h-screen"
    >
      {allImages().map((image, index) => (
        <SwiperSlide key={index}>
          <SlideImage image={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function Art() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-full">Loading...</div>}>
      <SwiperComponent />
    </Suspense>
  );
}