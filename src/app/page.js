"use client"
import { useState, useEffect } from 'react'

import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import { useLanguage } from './ui/LanguageContext'; 


export default function Home() {
  const imageWidth = 240;
  const imageHeight = 240;
  const [showRedSlide, setShowRedSlide] = useState(false);
  const [showBlueSlide, setShowBlueSlide] = useState(false);

  const handleClickRed = () => {
    setShowRedSlide(!showRedSlide);
    setShowBlueSlide(false); 
  };

  const handleClickBlue = () => {
    setShowBlueSlide(!showBlueSlide);
    setShowRedSlide(false); 
  };

  const { getText } = useLanguage();

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="w-full flex items-center justify-center">
        <div className='orbit-logo-skltn'></div>

        <div className="planet-logo-skltn" onClick={handleClickRed}>
          <Image 
          src="./skeleton-logo.svg" 
          alt="Logo Skeleton"
          width={28}
          height={28}
          />
        </div>
        
        <div className="planet-logo-skltn-blue" onClick={handleClickBlue}>
          <Image 
          src="./skeleton-logo.svg" 
          alt="Logo Skeleton"
          width={28}
          height={28}/>
        </div>

        {showRedSlide ? (
          <div className="planet-skltn-red">
            <h1 className="text-white">Skeleton</h1>
          </div>
        ) : showBlueSlide ? (
          <div className="planet-skltn-blue">
            <h1 className="text-white">Contacto</h1>
          </div>
        ) : (
          <Swiper
            className="w-full planet-skltn-swiper"
            modules={[EffectFade, Autoplay]} 
            effect="fade" 
            autoplay={{ delay: 3000 }} 
            loop={true}
          >
            <SwiperSlide>
              <div className="w-full flex items-center justify-center">
                <Image
                  src="/paul.jpg"
                  alt="Imagen Paul Pineda"
                  width={imageWidth}
                  height={imageHeight}
                  priority
                  className="rounded-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex items-center justify-center">
                <Image
                  src="/paul2.jpg"
                  alt="Imagen Paul Pineda"
                  width={imageWidth}
                  height={imageHeight}
                  priority
                  className="rounded-full"
                />          
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex items-center justify-center">
                <Image
                  src="/paul3.jpg"
                  alt="Imagen Paul Pineda"
                  width={imageWidth}
                  height={imageHeight}
                  priority
                  className="rounded-full "
                />          
              </div>
            </SwiperSlide>
          </Swiper>
        )}

      </div>
      <div className="absolute z-10 text-center pt-[460px]">
        <p className="text-xl font-bold  bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">{getText('welcome')}</p>
        {/*<p className="text-lg font-extrabold  bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.amber.400),theme(colors.amber.100),theme(colors.amber.400),theme(colors.amber.400),theme(colors.amber.400),theme(colors.amber.100),theme(colors.amber.400))] bg-[length:200%_auto] animate-gradient">{getText('welcome')}</p>
        <p className="text-lg font-extrabold  bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.400),theme(colors.blue.100),theme(colors.blue.400),theme(colors.blue.400),theme(colors.blue.400),theme(colors.blue.100),theme(colors.blue.400))] bg-[length:200%_auto] animate-gradient">{getText('welcome')}</p>*/}

        {/*<p className="text-sm text-gray-400 dark:text-gray-600 ">{getText('idea')}</p>*/}
        <p className="text-sm bg-clip-text text-transparent dark:bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.gray.600),theme(colors.gray.600),theme(colors.gray.400),theme(colors.gray.800),theme(colors.gray.400),theme(colors.gray.600),theme(colors.gray.800))] bg-[length:200%_auto] animate-gradient">{getText('idea')}</p>

      </div>
    </main>
  );
}