'use client';

import backgroundImage from '../../public/DSCF2170.webp';
import allSongs from './MusicInfo';
import { BandcampEmbedItem } from './BandcampEmbedItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation, EffectCoverflow } from 'swiper/modules';
import { Suspense } from 'react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

function MusicCard({ song }: { song: BandcampEmbedItem }) {
  return (
    <div className="flex flex-col gap-2 rounded-3xl p-6 surface-card">
      <h3 className="text-base font-semibold text-foreground">{song.title}</h3>
      <p className="text-sm text-muted">
        {song.metadata.description}
      </p>
      <iframe
        style={{ "border": 0, "width": "100%", "height": "42px" }}
        src={song.iframeSrc} seamless>
      </iframe>
    </div>
  );
}

function MusicCardList({ songs }: { songs: BandcampEmbedItem[] }) {
  return (
    <div className="flex flex-col justify-center items-center mb-2">
      <Swiper
        modules={[Mousewheel, Navigation, EffectCoverflow]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        slidesPerView={'auto'}
        mousewheel={{ forceToAxis: true }}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 200,
          slideShadows: false
        }}
        className="w-full py-12 max-w-5xl"
      >
        {songs.map((song, index) =>
          <SwiperSlide
            style={{ "width": "60%" }}>
            <MusicCard key={index} song={song} />
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
}


export default function Music() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
      className="w-full h-screen bg-cover bg-center flex flex-col justify-between">
      <div className="min-h-[10%]">
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <MusicCardList songs={allSongs()} />
      </Suspense>
      <div className="bottom-0 bg-gradient-to-t from-black to-transparent p-15">
        <h1 className="text-2xl font-light text-white">
          I'd go so far as to say that music is my greatest passion in life.
        </h1>
        <h3 className="text-md font-light text-white">
          I started playing Tabla and Keyboard since as far back as I can remember (maybe when I was 5?).
          In my teens, I picked up the guitar; I'm mostly self-taught.
        </h3>
        <h3 className="text-md font-light text-white">
          It didn't take me long to pick up an interest in music production and recording, and have gradually been moving towrads writing and recording something that I feel happy about.
        </h3>
      </div>
    </div>
  )
}
