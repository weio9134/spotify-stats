"use client";
import React from 'react';
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import MailIcon from "../../../public/mail.png";
import Image from 'next/image';

const Footer = () => {
  return (
    <section className="text-white bg-[#1DB954]" id="contact">
        <div className="md:grid md:grid-cols-3 gap-5 items-center px-4 sm:py-10 justify-center place-items-center">
            <h2 className="text-4xl font-bold text-white mb-4"> Contacts </h2>
              
            <div className='col-start-2'>
              <div className="flex flex-row gap-2 pt-5 pb-10">
                <a target="_blank" href="https://github.com/weio9134?tab=overview&from=2024-02-01&to=2024-02-19">
                  <Image
                    src={GithubIcon}
                    alt="github icon"
                    height={50}
                  />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/wei-ouyang-540a31211/">
                  <Image
                    src={LinkedinIcon}
                    alt="linkedin icon"
                  />
                </a>
                <a target="_blank" href="mailto: weiouyang9134@gmail.com">
                  <Image
                    src={MailIcon}
                    alt="mail icon"
                    className='invert'
                  />
                </a>
              </div>
            </div>

            <div className='col-start3 text-base'>
              We are not related to Spotify AB or any of it's partners in any way.
              Personal data will only be processed by us to the extent necessary 
              and for the purpose of providing a functional and user-friendly website, 
              including its contents, and the services offered.
            </div>

        </div>
    </section>
  )
}

export default Footer
