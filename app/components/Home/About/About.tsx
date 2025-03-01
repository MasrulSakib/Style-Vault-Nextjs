import Image from 'next/image'
import React from 'react'
import model from '../../../assets/About/model-about.png'
import BoxText from '../../Helper/BoxText'
import user from '../../../assets/About/user.jpeg'

const About = () => {
    return (
        <div className='py-16 xl:container mx-5 xl:mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                {/* Image Container */}
                <div>
                    <Image src={model} alt='model' width={600} height={600} className='bg-transparent'></Image>
                </div>
                {/* text content */}
                <div>
                    <BoxText>About Us</BoxText>
                    <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-[2.5rem] sm:leading-[3rem]'>
                        Everything You Need To Grow Your Business
                    </h1>
                    <p className='mt-3 leading-relaxed text-sm sm:text-base text-gray-700'>
                        StyleVault brings you trendy, high-quality fashion for every occasion. Discover stylish apparel,
                        accessories, and footwear with seamless shopping, fast shipping, and secure payments. Your style,
                        your vault—unlock it today!
                    </p>
                    <button className='mt-5 text-[#f68967] pb-1 font-bold border-b-2 border-[#f68967]'>Learn More &#8594;</button>
                    <div className='mt-8 border-l-2 border-gray-200'>
                        <div className='ml-6'>
                            <p className='text-gray-700 font-medium'>
                                &quot;The many integrations that can be linked really help me see data from other tools I also use.&quot;
                            </p>
                            <div className='flex items-center space-x-6 mt-6'>
                                <Image src={user} alt='user' width={40} height={40} className='rounded-full'></Image>
                                <div>
                                    <p className='font-medium'>Roan Doe</p>
                                    <p className='text-gray-700 text-sm'>Web Developer @TechDev</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About