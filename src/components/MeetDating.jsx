import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay , Navigation } from 'swiper/modules';
import firstslide from '../assets/images/webp/firstslide.webp'
import secondslide from '../assets/images/webp/secondslide.webp'
import thirdslide from '../assets/images/webp/thirdslide.webp'

const MeetDating = () => {
    return (
        <div>
            <div className='container'>
                <div className='flex items-center flex-col text-center pt-[150px]'>
                    <h1 className='font-raleway font-semibold text-[40px] leading-[48px] text-white text-center'>Meet <span className='text-sunsetGold'>DatingStars</span></h1>
                    <p className='font-inter font-normal text-base text-cente text-white opacity-70 max-w-[759px] mt-[22px]'>Lorem ipsum dolor sit amet consectetur. Interdum est donec lacus vitae elit dictum eros cras sagittis.</p>
                </div>
                <Swiper className='my-16'
                    modules={[Autoplay, Navigation]}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,    
                    }}
                    loop={true}
                    navigation={true}
                    spaceBetween={50}
                    slidesPerView={3}
                >
                    <SwiperSlide><div><img src={firstslide} alt="slider/image"/></div></SwiperSlide>
                    <SwiperSlide><div><img src={secondslide} alt="slider/image"/></div></SwiperSlide>
                    <SwiperSlide><div><img src={thirdslide} alt="slider/image"/></div></SwiperSlide>
                    <SwiperSlide><div><img src={firstslide} alt="slider/image"/></div></SwiperSlide>
                    <SwiperSlide><div><img src={secondslide} alt="slider/image"/></div></SwiperSlide>
                    <SwiperSlide><div><img src={thirdslide} alt="slider/image"/></div></SwiperSlide>
                </Swiper>
                <div className='flex justify-center'><button className='p-[12px_24px] bg-sunsetGold font-raleway font-semibold text-base rounded-xl'>Book A Meeting With Our Team!</button></div>
            </div>
        </div>
    )
}

export default MeetDating