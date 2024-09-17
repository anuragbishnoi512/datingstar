import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import firstslide from '../assets/images/webp/firstslide.webp'
import secondslide from '../assets/images/webp/secondslide.webp'
import thirdslide from '../assets/images/webp/thirdslide.webp'
import calender from '../assets/images/svg/calender.svg'
import loaction from '../assets/images/svg/location.svg'
const MeetDating = () => {
    return (
        <div className='bg-black'>
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
                    // navigation={true}
                    spaceBetween={50}
                    slidesPerView={3}
                >
                    <SwiperSlide><div className='relative'><img src={firstslide} alt="slider/image" />
                        <div className='p-[10px_10px_16px_10px] absolute bottom-[21px] left-[18px] border-warmGray border rounded-lg w-[309px] min-h-[75px] backdrop-blur-[3px] bg-[#0000001A]'>
                            <h3 className='text-white text-base font-normal font-inter '>Affiliate World Europe</h3>
                            <div className='flex items-center justify-between mt-[6px]'>
                                <div className='flex items-center gap-2'>
                                    <img src={calender} alt="svg/icon" />
                                    <p className='text-white text-xs font-normal font-inter'>July 12th - 13th</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={loaction} alt="avg/icon" />
                                    <h3 className='text-white text-xs font-normal font-inter'>Barcelona </h3>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div><img src={secondslide} alt="slider/image" />
                        <div className='p-[10px_10px_16px_10px] absolute bottom-[21px] left-[18px] border-warmGray border rounded-lg w-[309px] min-h-[75px] backdrop-blur-[3px] bg-[#0000001A]'>
                            <h3 className='text-white text-base font-normal font-inter '>Affiliate World Europe</h3>
                            <div className='flex items-center justify-between mt-[6px]'>
                                <div className='flex items-center gap-2'>
                                    <img src={calender} alt="svg/icon" />
                                    <p className='text-white text-xs font-normal font-inter'>July 12th - 13th</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={loaction} alt="avg/icon" />
                                    <h3 className='text-white text-xs font-normal font-inter'>Barcelona </h3>
                                </div>
                            </div>
                        </div></div></SwiperSlide>
                    <SwiperSlide><div><img src={thirdslide} alt="slider/image" />
                        <div className='p-[10px_10px_16px_10px] absolute bottom-[21px] left-[18px] border-warmGray border rounded-lg w-[309px] min-h-[75px] backdrop-blur-[3px] bg-[#0000001A]'>
                            <h3 className='text-white text-base font-normal font-inter '>Affiliate World Europe</h3>
                            <div className='flex items-center justify-between mt-[6px]'>
                                <div className='flex items-center gap-2'>
                                    <img src={calender} alt="svg/icon" />
                                    <p className='text-white text-xs font-normal font-inter'>July 12th - 13th</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={loaction} alt="avg/icon" />
                                    <h3 className='text-white text-xs font-normal font-inter'>Barcelona </h3>
                                </div>
                            </div>
                        </div></div></SwiperSlide>
                    <SwiperSlide><div><img src={firstslide} alt="slider/image" /><div className='p-[10px_10px_16px_10px] absolute bottom-[21px] left-[18px] border-warmGray border rounded-lg w-[309px] min-h-[75px] backdrop-blur-[3px] bg-[#0000001A]'>
                        <h3 className='text-white text-base font-normal font-inter '>Affiliate World Europe</h3>
                        <div className='flex items-center justify-between mt-[6px]'>
                            <div className='flex items-center gap-2'>
                                <img src={calender} alt="svg/icon" />
                                <p className='text-white text-xs font-normal font-inter'>July 12th - 13th</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={loaction} alt="avg/icon" />
                                <h3 className='text-white text-xs font-normal font-inter'>Barcelona </h3>
                            </div>
                        </div>
                    </div></div></SwiperSlide>
                    <SwiperSlide><div><img src={secondslide} alt="slider/image" /><div className='p-[10px_10px_16px_10px] absolute bottom-[21px] left-[18px] border-warmGray border rounded-lg w-[309px] min-h-[75px] backdrop-blur-[3px] bg-[#0000001A]'>
                        <h3 className='text-white text-base font-normal font-inter '>Affiliate World Europe</h3>
                        <div className='flex items-center justify-between mt-[6px]'>
                            <div className='flex items-center gap-2'>
                                <img src={calender} alt="svg/icon" />
                                <p className='text-white text-xs font-normal font-inter'>July 12th - 13th</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={loaction} alt="avg/icon" />
                                <h3 className='text-white text-xs font-normal font-inter'>Barcelona </h3>
                            </div>
                        </div>
                    </div></div></SwiperSlide>
                    <SwiperSlide><div><img src={thirdslide} alt="slider/image" /><div className='p-[10px_10px_16px_10px] absolute bottom-[21px] left-[18px] border-warmGray border rounded-lg w-[309px] min-h-[75px] backdrop-blur-[3px] bg-[#0000001A]'>
                        <h3 className='text-white text-base font-normal font-inter '>Affiliate World Europe</h3>
                        <div className='flex items-center justify-between mt-[6px]'>
                            <div className='flex items-center gap-2'>
                                <img src={calender} alt="svg/icon" />
                                <p className='text-white text-xs font-normal font-inter'>July 12th - 13th</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={loaction} alt="avg/icon" />
                                <h3 className='text-white text-xs font-normal font-inter'>Barcelona </h3>
                            </div>
                        </div>
                    </div></div></SwiperSlide>
                </Swiper>
                <div className='flex justify-center'><button className='p-[12px_24px] bg-sunsetGold hover:bg-transparent font-raleway font-semibold text-base hover:text-sunsetGold border border-sunsetGold rounded-xl duration-300'>Book A Meeting With Our Team!</button></div>
            </div>
        </div>
    )
}

export default MeetDating