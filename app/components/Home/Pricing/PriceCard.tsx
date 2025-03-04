import Link from 'next/link';
import React from 'react'

type Props = {
    time: string;
    price: number | string;
    description: string;

}

const PriceCard = ({ time, price, description }: Props) => {
    return (
        <div className='bg-white rounded-lg p-8 relative border-t-4 border-rose-300 min-h-full'>
            <h1 className='text-blue-950 text-xl font-bold'>
                {time}
            </h1>
            <p className='mt-4 text-gray-600 font-medium'>
                {description}
            </p>
            <div className='mt-8'>
                <div className='text-gray-700 font-semibold text-lg'>
                    <span className='text-4xl font-bold text-black'>${price}</span> / Month
                </div>
            </div>
            <div className='mt-12 flex-grow'>
                <Link href="#" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-300 rounded hover:bg-gray-300 group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Upgrade Now</span>
                </Link>
            </div>
        </div>
    )
}

export default PriceCard