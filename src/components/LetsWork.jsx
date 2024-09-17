import React from 'react'
import mailbox from '../assets/images/svg/mailbox.svg'

const LetsWork = () => {
    return (
        <div className='bg-black'>
            <div className='container'>
                <div className='flex flex-row flex-wrap mx-[-12px] py-[150px]'> 
                    <div className='w-2/5 px-3'>
                        <div>
                            <h2 className='text-white font-raleway font-semibold text-[40px] leading-[48px]'>Let’s work together</h2>
                            <p className='text-white font-inter font-normal text-base opacity-70 max-w-[474px] mt-4'>Building long term relationships with advertisers and publisher, is at core of our business</p>
                        </div>
                        <div className='mt-[40px]'>
                            <h2 className='text-white font-raleway font-semibold text-2xl leading-9'>Get in touch</h2>
                            <p className='text-white font-inter font-normal text-base opacity-70 max-w-[474px] mt-3'>Feel free to send us an email or complete the form, we are always happy to answer your questions and meet you.</p>
                            <p className='text-white font-inter font-normal flex gap-3 items-center mt-6'><span><img src={mailbox} alt="svg/icon" /></span>support@datingstars.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LetsWork