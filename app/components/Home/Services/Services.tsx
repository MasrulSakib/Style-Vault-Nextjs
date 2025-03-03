import React from 'react'
import BoxText from '../../Helper/BoxText';
import { FaRocket, FaShoppingCart } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { TbCircuitGroundDigital } from 'react-icons/tb';
import { IoMdColorPalette } from 'react-icons/io';
import { FaChess } from 'react-icons/fa6';

const Services = () => {
    return (
        <div className='py-16'>
            <div className='xl:container xl:mx-auto mx-5'>
                <BoxText>Our Services</BoxText>
                {/* heading */}
                <h1 className='mt-4 text-2xl md:text-2xl font-bold text-gray-800'>
                    Our Services Made For You?
                </h1>
                {/* description */}
                <p className='mt-4 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] text-gray-600'>
                    Trendy fashion, seamless shopping, fast shipping,
                    secure payments, personalized recommendations,
                    exclusive discounts, easy returns, 24/7 support,
                    app integration, and a hassle-free customer experience—fashion
                    made effortless with StyleVault!
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center gap-y-12 mt-16'>
                    <div className='flex items-center space-x-5'>
                        <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-200 bg-opacity-20'>
                            <FaRocket className='w-6 h-6 text-orange-400' />
                        </div>
                        <div>
                            <p className='text-lg font-bold text-gray-700'>Start Up</p>
                            <p className='text-sm text-gray-600'>Innovate, grow, succeed, transform ideas into reality.</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-200 bg-opacity-20'>
                            <BsFillBriefcaseFill className='w-6 h-6 text-orange-400' />
                        </div>
                        <div>
                            <p className='text-lg font-bold text-gray-700'>Bussiness</p>
                            <p className='text-sm text-gray-600'>Build, grow, and achieve success with strategic solutions.</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-200 bg-opacity-20'>
                            <FaShoppingCart className='w-6 h-6 text-orange-400' />
                        </div>
                        <div>
                            <p className='text-lg font-bold text-gray-700'>E-commerce</p>
                            <p className='text-sm text-gray-600'>Seamless shopping, fast shipping, and endless possibilities.</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-200 bg-opacity-20'>
                            <TbCircuitGroundDigital className='w-6 h-6 text-orange-400' />
                        </div>
                        <div>
                            <p className='text-lg font-bold text-gray-700'>Digital Design</p>
                            <p className='text-sm text-gray-600'>Creative visuals, innovative, and seamless experiences.</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-200 bg-opacity-20'>
                            <IoMdColorPalette className='w-6 h-6 text-orange-400' />
                        </div>
                        <div>
                            <p className='text-lg font-bold text-gray-700'>Unlimited Colors</p>
                            <p className='text-sm text-gray-600'>Innovate, grow, succeed, transform ideas into reality.</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-200 bg-opacity-20'>
                            <FaChess className='w-6 h-6 text-orange-400' />
                        </div>
                        <div>
                            <p className='text-lg font-bold text-gray-700'>Strategy Solution</p>
                            <p className='text-sm text-gray-600'>Smart planning, optimized processes, and sustainable growth.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services;