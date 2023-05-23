import React from 'react';
//images
import Image from '../assets/xisraeltech.gif';
//icons
import { FaGithub, Fayoutube, FaDribbble } from 'react-icons/fa';
//type amimation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className='container mx-auto'>
        <div>
          {/*text*/}
          <div>
            <h1>
              XISRAEL <span>BAS</span>
            </h1>
          </div>
          <div className='mb-6 text-[36px] lg:text-[50px] font-secondary
          font-semibold uppercase leading-[1]'>
            <span className='text-white mi-4'> I am a  </span>
            <TypeAnimation sequence={['Developer', 2000, 'Desing', 2000, 'Freelance', 2000,]}
              speed={50} className='text-accent' wrapper='span' repeat={Infinity} />
          </div>
          <p>Hello, this is my work portfolio, contact me to carry out a project, I start and I have training in Alura courses, greetings.dis dignissimos.</p>
          <div>
            <button className='btn btn-lg'>Contact me</button>
            <a href="#"className='text-gradiente btn-link'>
              My Potfolio</a>
          </div>
          {/*socials*/}
          <div className='flex text-[20px] gap-x-6 max-w-max mx-auto
          lg:mx-0'>                      
          </div>
        </div>
        {/*image*/}
        <div><img src={Image} alt="" />
        </div>
      </div>
    </section >
  );
};

export default Banner;
