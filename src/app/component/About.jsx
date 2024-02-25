"use client"
import React from 'react'
import Image from 'next/image'
import Vectors from '../../../public/vectors.png' 
import Top from '../../../public/top_artists.jpeg'
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <section id="about">
      <div className="md:grid md:grid-rows-2 items-center px-4 sm:py-16 xl:px-16">

          <Fade direction='left'>
            <div className='md:grid md:grid-cols-2 p-10 gap-10 place-items-center'>
              <p className='w-full p-10 sm:m-auto'>
                Here, we're passionate about music and data.
                Our mission is to empower music lovers like you with insights
                into your listening habits. Whether you're a casual listener or a
                die-hard music enthusiast, we're here to help you understand
                and explore your musical preferences!
              </p>
              <Image
                src={Top}
                width={450}
                height={450}
                alt="top artists"
                className='sm:m-auto'
              />
            </div>
          </Fade>

          <Fade direction='right'>
            <div className='w-full h-full mt-0 pt-0 md:grid md:grid-cols-2 p-10 place-items-center'>
              <Image
                src={Vectors}
                width={600}
                height={600}
                alt="vector stats"
                className='sm:m-auto'
              />
              <p className='w-2/3 p-10 sm:m-auto'>
                Explore your top tracks, artists, and genres over different time periods.
                Dive into detailed statistics and compare your musical tastes with others.
                Discover new music recommendations tailored just for you.
              </p>
            </div>
          </Fade>
        </div>

    </section>
  )
}

export default About