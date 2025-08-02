'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const ilustrasiList = [
  { src: '/desktop.png', alt: 'Ilustrasi Posyandu Digital' },
  { src: '/desktop2.png', alt: 'Ilustrasi Posyandu Digital' },
  { src: '/desktop3.png', alt: 'Ilustrasi Posyandu Digital' },
  { src: '/desktop4.png', alt: 'Ilustrasi Posyandu Digital' },
];

export default function SwiperHero() {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden h-full shadow-lg">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {ilustrasiList.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img.src}
              alt={img.alt}
              width={1200}
              height={800}
              className="w-full h-auto object-contain bg-white"
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
