import React from 'react'
import BoxText from '../../Helper/BoxText'
import Link from 'next/link'
import Image from 'next/image'
import team1 from '../../../assets/Team/team1.jpg'
import team2 from '../../../assets/Team/team2.jpg'

const Team = () => {
    return (
        <div className='py-16'>
            <div className='xl:container xl:mx-auto mx-5'>
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-10 items-center'>
                    <div className='lg:col-span-2'>
                        <BoxText>Our Team</BoxText>
                        <h1 className='mt-4 text-xl md:text-2xl font-bold text-gray-800'>Our Team of Exceptional Talent, Innovation, and Vision</h1>
                        <p className='mt-4 text-gray-700'>At StyleVault, our passionate team of designers, developers, and customer support
                            experts work together to bring you the best shopping experience. Dedicated to
                            innovation, quality, and style, we strive to make fashion seamless, accessible,
                            and exciting for everyone.
                        </p>
                        <div className='mt-8'>
                            <Link href="#" className="relative inline-block text-base group">
                                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-orange-500 rounded-lg group-hover:text-white">
                                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-orange-50"></span>
                                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-500 group-hover:-rotate-180 ease"></span>
                                    <span className="relative">Join Our Team</span>
                                </span>
                                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-orange-500 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                            </Link>
                        </div>
                    </div>
                    <div className='sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:col-span-3'>
                        <div
                            data-aos="fade-right"
                            anchor-placement="top-center"
                            className='relative overflow-hidden'>
                            <Image
                                src={team2}
                                alt='team'
                                width={300}
                                height={300}
                                className='rounded-lg h-full w-full object-cover'
                            ></Image>
                            <div className='absolute w-full h-[5rem] bottom-0 p-4 bg-rose-500 rounded-lg'>
                                <p className='text-lg text-white font-bold'>Cranberry</p>
                                <p className='text-gray-200'>(Founder)</p>
                            </div>
                        </div>
                        <div
                            data-aos="fade-right"
                            anchor-placement="top-center"
                            data-aos-delay="100"
                            className='relative overflow-hidden'>
                            <Image
                                src={team1}
                                alt='team'
                                width={300}
                                height={300}
                                className='rounded-lg h-full w-full object-cover'
                            ></Image>
                            <div className='absolute w-full h-[5rem] bottom-0 p-4 bg-orange-500 rounded-lg'>
                                <p className='text-lg text-white font-bold'>Huckleberry</p>
                                <p className='text-gray-200'>(Co-Founder)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team