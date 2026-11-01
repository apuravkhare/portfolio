'use client';

import backgroundImage from '../../public/DSCF2172.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation, EffectCards } from 'swiper/modules';
import { Suspense } from 'react';
import { Surface } from "@heroui/react";
import { ExternalLink } from 'react-feather';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import type CodeCard from './CodeCard';
import allCodeCardInfos from './CodeCardInfo';

function CodeCard({ card }: { card: CodeCard }) {
  return (
    <Surface className="rounded-3xl p-6">
      <div className="w-full h-full flex flex-col items-center justify-end">
        <div className="p-6 text-center">
          <h1 className="text-4xl font-bold p-2" data-swiper-parallax="-300">
            {card.title}
          </h1>
          <h3 className="text-md font-light" data-swiper-parallax="-100">
            {card.description}
          </h3>
        </div>
        {card.projectUrl &&
          <div className="flex flex-row items-center gap-2">
            <a href={card.projectUrl} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-row items-center gap-2 ">
                Check out this project!
                <ExternalLink />
              </div>
            </a>
          </div>}
      </div>
    </Surface >
  )
}

function MusicCardList({ cards }: { cards: CodeCard[] }) {
  return (
    <div className="flex flex-col justify-center items-center mb-2">
      <Swiper
        modules={[Mousewheel, Navigation, EffectCards]}
        effect={'cards'}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        slidesPerView={'auto'}
        mousewheel={{ forceToAxis: true }}
        cardsEffect={{
          perSlideOffset: 8,
          perSlideRotate: 2,
          rotate: true
        }}
        className="w-full py-12 max-w-5xl"
      >
        {cards.map((card, index) =>
          <SwiperSlide
            style={{ "width": "60%" }}>
            <CodeCard key={index} card={card} />
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
}

export default function Code() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
      className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center">
      <div className="min-h-[10%]">
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <MusicCardList cards={allCodeCardInfos()} />
      </Suspense>
    </div>
  );
}