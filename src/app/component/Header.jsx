"use client"
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Artist from "../../../public/artist.png";
import Wrap from "../../../public/wrap.png";
import Web from "../../../public/spotify_web.png";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Header = () => {
  const settings = {
    speed: 650,
    slideToShow: 1,
    slideToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    fade: true,
  }

  return (
    <section className='container pl-10 pr-10 pt-10'>
      <div>
        <Slider {...settings} className='brightness-50'>
          <Image src={Artist} />
          <Image src={Wrap} />
          <Image src={Web} />
        </Slider>
        <div className='text-base md:text-3xl relative text-center m-auto top-[-100px] md:top-[-200px]'>
          <p> Hello! Log in to see your Spotify stats! </p>
        </div>
      </div>
    </section>
  )
}

export default Header