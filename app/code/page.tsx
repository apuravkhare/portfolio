'use client';

import backgroundImage from '../../public/DSCF2172.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import { Suspense } from 'react';
import { ExternalLink } from 'react-feather';

import 'swiper/css';
import type CodeCard from './CodeCard';
import allCodeCardInfos from './CodeCardInfo';

function CodeCard({ card }: { card: CodeCard }) {
  return (
    <div className="rounded-3xl p-6 surface-card">
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
    </div>
  )
}

function CodeCardList({ cards }: { cards: CodeCard[] }) {
  return (
    <div className="flex flex-col gap-2">
      <Swiper
        modules={[Mousewheel]}
        effect='thumbs'
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        mousewheel={{ forceToAxis: true }}
        className="w-full max-w-5xl"
        direction="vertical"
        spaceBetween="15"
      >
        {cards.map((card, index) =>
          <SwiperSlide>
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
      className="w-full h-screen bg-cover bg-center flex items-center justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <CodeCardList cards={allCodeCardInfos()} />
      </Suspense>
    </div>
  );
}