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
    dots: true,
    speed: 350,
    slideToShow: 1,
    slideToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    fade: true,
    pauseOnHover: false,
  }

  return (
    <section className='container pl-10 pr-10 pt-10'>
      <div> 
        <div className='hidden sm:block'>
          <Slider {...settings} className='brightness-50'>
            <Image src={Artist} />
            <Image src={Wrap} />
            <Image src={Web} />
          </Slider>
        </div>
        <div className='text-base md:text-3xl relative text-center m-auto sm:top-[-100px] md:top-[-200px]'>
          <p> 
            Welcome to our Spotify Stats website! 
          </p>
          Log in to get insights into your music listening habits! 
        </div>
      </div>
    </section>
  )
}

export default Header