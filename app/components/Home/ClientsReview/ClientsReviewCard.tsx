import Image, { StaticImageData } from 'next/image';
import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

type Props = {
    image: string | StaticImageData;
    ratings: string;
    name: string;
}

const ClientsReviewCard = ({ image, ratings, name }: Props) => {
    return (
        <div className='bg-white  shadow-md p-8 sm:flex space-y-4 sm:space-y-0 space-x-6 rounded-lg'>
            <div className='min-w-[40%] xl:min-w-[20%]'>
                <Image
                    src={image}
                    alt={name}
                    width={350}
                    height={350}
                    className='rounded-lg object-cover w-full h-full'
                />
            </div>
            <div>
                <h1 className='text-lg font-bold text-blue-950'>{name}</h1>
                <div className='flex items-center space-x-3'>
                    <p className='text-2xl font-bold text-orange-500'>{ratings}</p>
                    <div className='flex items-center'>
                        <FaStar className='w-4 h-4 text-yellow-500' />
                        <FaStar className='w-4 h-4 text-yellow-500' />
                        <FaStar className='w-4 h-4 text-yellow-500' />
                        <FaStar className='w-4 h-4 text-yellow-500' />
                        <FaStarHalfAlt className='w-4 h-4 text-yellow-500' />
                    </div>
                </div>
                <p className='mt-2 text-base text-gray-700 font-medium'>
                    Great selection of trendy fashion at affordable prices. The customer service team was very helpful, and my order arrived on time. Will definitely shop again!
                </p>
            </div>
        </div>
    )
}

export default ClientsReviewCard