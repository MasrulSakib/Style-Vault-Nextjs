import Image from 'next/image'
import React from 'react'
import google from '../../../assets/Hero/google.png'
import linkedIn from '../../../assets/Hero/linkedIn.png'
import bannar from '../../../assets/Hero/bannar.jpg'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='relative w-full h-[110vh] sm:h-screen flex justify-center flex-col overflow-hidden'>
            <div className='xl:container xl:mx-auto mx-5 items-center grid grid-cols-1 xl:grid-cols-2 gap-10'>
                <div data-aos="fade-up">
                    <p className='text-sm sm:text-base md:text-xl font-bold text-blue-950'>
                        Make the Smartest Investment
                    </p>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl my-6 font-bold text-blue-950 leading-[2.5rem] md:leading-[3.5rem]'>
                        Kickstart, Scale, and Thrive Faster with <span className='text-rose-700'>StyleVault</span>
                    </h1>
                    <p className='text-xs sm:text-sm md:text-base font-medium text-gray-700'>
                        Welcome to StyleVault, your ultimate fashion destination! Discover trendy apparel, accessories,
                        and footwear curated for every style. Shop effortlessly, stay stylish, and express yourself with
                        our exclusive collections. Elevate your fashion game today!
                    </p>
                    <div className='flex sm:flex-row flex-col sm:items-center sm:space-x-10 mt-6'>
                        <div className='flex items-center space-x-4'>
                            <Image
                                src={google}
                                alt='image'
                                width={40}
                                height={40}
                            />
                            <div>
                                <div className='flex items-center space-x-2'>
                                    <h1 className='text-lg sm:text-xl md:text-2xl text-gray-700 font-bold'>
                                        4.5
                                    </h1>
                                    <div className='flex items-center'>
                                        <FaStar className='w-4 h-4 text-yellow-500' />
                                        <FaStar className='w-4 h-4 text-yellow-500' />
                                        <FaStar className='w-4 h-4 text-yellow-500' />
                                        <FaStar className='w-4 h-4 text-yellow-500' />
                                        <FaStarHalfAlt className='w-4 h-4 text-yellow-500' />
                                    </div>
                                </div>
                                <p className='text-sm sm:text-base text-gray-700'>
                                    Best Rated On Google
                                </p>
                            </div>
                        </div>
                        <div className='flex mt-6 sm:mt-0 items-center space-x-4'>
                            <Image
                                src={linkedIn}
                                alt='image'
                                width={40}
                                height={40}
                            />
                            <div>
                                <div className='flex items-center space-x-2'>
                                    <h1 className='text-lg sm:text-xl md:text-2xl text-gray-700 font-bold'>
                                        4.7
                                    </h1>
                                    <div className='flex items-center'>
                                        <FaStar className='w-4 h-4 text-yellow-500' />
                                        <FaStar className='w-4 h-4 text-yellow-500' />
                                        <FaStar className='w-4 h-4 text-yellow-500' />
                                        <FaStar className='w-4 h-4 text-yellow-500' />
                                        <FaStarHalfAlt className='w-4 h-4 text-yellow-500' />
                                    </div>
                                </div>
                                <p className='text-sm sm:text-base text-gray-700'>
                                    Best Rated On LinkedIn
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4'>
                        <Link href="#" className="relative px-10 py-3 font-medium text-white transition duration-300 bg-red-400 rounded-md hover:bg-red-500 ease">
                            <span className="absolute bottom-0 left-0 h-full -ml-2">
                                <svg viewBox="0 0 487 487" className="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path></svg>
                            </span>
                            <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                                <svg viewBox="0 0 487 487" className="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path></svg>
                            </span>
                            <span className="relative">Get Free Trial</span>
                        </Link>
                        <Link href="#" className="relative px-10 py-3 font-medium text-white transition duration-300 bg-green-400 rounded-md hover:bg-green-500 ease">
                            <span className="absolute bottom-0 left-0 h-full -ml-2">
                                <svg viewBox="0 0 487 487" className="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path></svg>
                            </span>
                            <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                                <svg viewBox="0 0 487 487" className="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path></svg>
                            </span>
                            <span className="relative">Create Account</span>
                        </Link>
                    </div>
                </div>
                <div
                    data-aos="fade-down"
                    data-aos-delay="150"
                    className='mx-auto hidden xl:block'>
                    <Image
                        src={bannar}
                        alt='bannar'
                        width={900}
                        height={900}
                        className='rounded-2xl'
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero