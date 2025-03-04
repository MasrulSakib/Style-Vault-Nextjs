import Image from 'next/image'
import React from 'react'
import { GoWorkflow } from 'react-icons/go'
import { LuPin } from 'react-icons/lu'
import { MdAccessAlarm, MdOutlineTouchApp } from 'react-icons/md'
import feature from '../../../assets/Features/Features_prev_ui.png'

const Features = () => {
    return (
        <div className='py-16 bg-gray-100 overflow-hidden'>
            <div>
                <h1 className='text-center text-2xl text-blue-950 font-bold'>Key Features Of The Products</h1>
                <p className='mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]'>
                    Our product stands out with its high performance, delivering blazing-fast speeds and seamless multitasking
                </p>
            </div>
            <div className='xl:container xl:mx-auto mx-5 mt-16 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div data-aos="fade-right"
                        anchor-placement="top-center"
                        className='bg-white p-4 rounded-lg'>
                        <div className='flex items-center space-x-3'>
                            <div className='w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-200 bg-opacity-20'>
                                <MdOutlineTouchApp className='w-6 h-6 text-orange-400' />
                            </div>
                            <h1 className='text-lg font-bold text-gray-700'>
                                App Integration
                            </h1>
                        </div>
                        <p className='my-3 text-gray-700 leading-relaxed'>
                            Seamlessly connect your favorite apps with StyleVault for a smooth shopping experience.
                            Enjoy secure transactions, real-time updates, and effortless synchronization to enhance
                            your fashion journey with convenience and reliability.
                        </p>
                    </div>
                    <div
                        data-aos="fade-right"
                        anchor-placement="top-center"
                        data-aos-delay="100"
                        className='bg-white p-4 rounded-lg'>
                        <div className='flex items-center space-x-3'>
                            <div className='w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-200 bg-opacity-20'>
                                <GoWorkflow className='w-6 h-6 text-orange-400' />
                            </div>
                            <h1 className='text-lg font-bold text-gray-700'>
                                Workflow Builder
                            </h1>
                        </div>
                        <p className='my-3 text-gray-700 leading-relaxed'>
                            Customize tasks, streamline operations, and automate processes effortlessly
                            with our intuitive Workflow Builder. Enhance productivity, simplify workflows,
                            and integrate tools seamlessly to optimize efficiency and boost overall business
                            performance.
                        </p>
                    </div>
                    <div
                        data-aos="fade-right"
                        anchor-placement="top-center"
                        data-aos-delay="200"
                        className='bg-white p-4 rounded-lg'>
                        <div className='flex items-center space-x-3'>
                            <div className='w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-200 bg-opacity-20'>
                                <LuPin className='w-6 h-6 text-orange-400' />
                            </div>
                            <h1 className='text-lg font-bold text-gray-700'>
                                Problem Solution
                            </h1>
                        </div>
                        <p className='my-3 text-gray-700 leading-relaxed'>
                            At StyleVault, we understand the frustration of finding trendy,
                            high-quality fashion at affordable prices. Our solution? A
                            curated collection of stylish apparel, seamless shopping,
                            and fast delivery—making fashion effortless for you!
                        </p>
                    </div>
                    <div
                        data-aos="fade-right"
                        anchor-placement="top-center"
                        data-aos-delay="300"
                        className='bg-white p-4 rounded-lg'>
                        <div className='flex items-center space-x-3'>
                            <div className='w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-200 bg-opacity-20'>
                                <MdAccessAlarm className='w-6 h-6 text-orange-400' />
                            </div>
                            <h1 className='text-lg font-bold text-gray-700'>
                                Lifetime Access
                            </h1>
                        </div>
                        <p className='my-3 text-gray-700 leading-relaxed'>
                            Enjoy unlimited access to exclusive fashion collections, special discounts,
                            and seamless shopping experiences forever. With StyleVault, your fashion
                            journey remains exciting, rewarding, and always within reach, whenever
                            you need it.
                        </p>
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    anchor-placement="top-center"
                    data-aos-delay="400"
                    className='mx-auto'>
                    <Image
                        src={feature}
                        alt='feature'
                        width={700}
                        height={700}
                    ></Image>
                </div>
            </div>
        </div>
    )
}

export default Features