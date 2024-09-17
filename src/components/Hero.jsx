import React from 'react'
import { CARD_DATA } from '../utils/Helper'

const Hero = () => {
  return (
    <div className='bg-black'>
      <div className='container'>
        <div className='flex items-center flex-col text-center pt-[97px] mt-[-1px]'>
          <h1 className='font-raleway font-semibold text-[40px] leading-[48px] text-white text-center'>Why <span className='text-sunsetGold'>DatingStars?</span></h1>
          <p className='font-inter font-normal text-base text-cente text-white opacity-70 max-w-[759px] mt-[22px]'>DatingStars has been founded in 2023, but our management team has 10 years+ experience in the casual dating vertical and has developed the best products available in the market.</p>
        </div>
        <div className='flex flex-wrap flex-row mx-[-12px] mt-[48px]'>
          {CARD_DATA.map((i, index) => (
            <div key={index} className="lg:w-1/3 max-lg:w-1/2 max-md:w-full px-3 py-3">
              <div className="p-[20px_20px_0px_20px] min-h-[248px] border border-charcoalGray hover:border-sunsetGold duration-150 rounded-[22px]">
                <div><img className='rounded-[100px] p-4 bg-charcoalGray' src={i.icon} alt="svg/icon" /></div>
                <h2 className='font-raleway font-semibold text-2xl text-white pt-6'>{i.title}</h2>
                <p className='font-inter text-base leading-6 text-white opacity-70 pt-4'>{i.text}</p>
              </div>
            </div>
          )
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero