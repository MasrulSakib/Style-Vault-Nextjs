import Image from 'next/image'
import React from 'react'
import bannar from '../../../assets/Hero/bannar.jpg'
import { BsLinkedin } from 'react-icons/bs'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'


const Hero = () => {
    return (
        <div className='xl:container mx-5 xl:mx-auto'>
            <div className='flex flex-col lg:flex-row md:gap-5 xl:gap-10 justify-between items-center lg:h-[110vh] sm:h-screen mt-[50px]'>
                <div data-aos="fade-up" className='grid lg:grid-cols-1 justify-center items-center gap-10'>
                    <div>
                        <p className='text-sm sm:text-base md:text-xl font-bold text-blue-950'>Make The Smallest Investment</p>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-blue-950 leading-[2.5rem] md:leading-[3.5rem]'>
                            Kickstart, Scale, and Thrive Faster with
                            <span className='text-red-700'> StyleVault</span>
                        </h2>
                        <p className='text-xs sm:text-sm md:text-base font-medium text-gray-700'>Welcome to StyleVault, your ultimate fashion destination! Discover trendy apparel, accessories, and footwear curated for every style. Shop effortlessly, stay stylish, and express yourself with our exclusive collections. Elevate your fashion game today!</p>
                    </div>
                    {/* Social Icons */}
                    <div className='flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10'>
                        <div className='flex gap-5 items-center'>
                            <FcGoogle className='w-10 h-10 text-blue-700'></FcGoogle>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-start'>
                                    <h2 className='text-2xl text-gray-700 mr-3'>4.5</h2>
                                    <FaStar className='text-yellow-500 w-[15px] h-[15px]'></FaStar>
                                    <FaStar className='text-yellow-500 w-[15px] h-[15px]'></FaStar>
                                    <FaStar className='text-yellow-500 w-[15px] h-[15px]'></FaStar>
                                    <FaStar className='text-yellow-500 w-[15px] h-[15px]'></FaStar>
                                    <FaStarHalfAlt className='text-yellow-500 w-[15px] h-[15px]'></FaStarHalfAlt>
                                </div>
                                <p className='text-gray-700 text-sm sm:text-base'>Best Rated On Google</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <BsLinkedin className='w-10 h-10 text-blue-700'></BsLinkedin>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-start'>
                                    <h2 className='text-2xl text-gray-700 mr-3'>4.7</h2>
                                    <FaStar className='text-yellow-500 w-[15px] h-[15px]'></FaStar>
                                    <FaStar className='text-yellow-500 w-[15px] h-[15px]'></FaStar>
                                    <FaStar className='text-yellow-500 w-[15px] h-[15px]'></FaStar>
                                    <FaStar className='text-yellow-500 w-[15px] h-[15px]'></FaStar>
                                    <FaStarHalfAlt className='text-yellow-500 w-[15px] h-[15px]'></FaStarHalfAlt>
                                </div>
                                <p className='text-gray-700 text-sm sm:text-base'>Best Rated On LInkedin</p>
                            </div>
                        </div>
                    </div>
                    {/* Button Group */}
                    <div className='flex flex-col space-y-4 lg:space-y-0 lg:space-x-3 lg:flex-row items-start'>
                        <Link href="#" className="relative px-10 py-3 font-medium text-white transition duration-300 bg-red-400 rounded-md hover:bg-red-500 ease">
                            <span className="absolute bottom-0 left-0 h-full -ml-2">
                                <svg viewBox="0 0 487 487" className="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path></svg>
                            </span>
                            <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                                <svg viewBox="0 0 487 487" className="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path></svg>
                            </span>
                            <span className="relative">Get Free Trial</span>
                        </Link>

                        <Link href="#" className="relative mt-6 lg:mt-0 px-10 py-3 font-medium text-white transition duration-300 bg-green-400 rounded-md hover:bg-green-500 ease">
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
                <div data-aos="fade-down" data-aos-delay="150" className='hidden lg:block max-w-[50%]'>
                    <Image src={bannar}
                        alt='bannar'
                        className='w-full rounded-3xl'
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero