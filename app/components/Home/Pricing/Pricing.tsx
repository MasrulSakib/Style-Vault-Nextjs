import React from 'react'
import PriceCard from './PriceCard'

const Pricing = () => {
    return (
        <div className='overflow-hidden'>
            <div className='py-16 bg-gray-100'>
                <h1 className='text-center text-2xl text-blue-950 font-bold'>Choose The Plan That&apos;s Right For You</h1>
                <p className='mt-3 text-center font-medium text-gray-700 w-[90%] md:w-[80%] mx-auto'>
                    Choose from flexible, affordable pricing plans designed to fit your needs, budget, and style.
                </p>
                <div className='mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:container xl:mx-auto mx-5'>
                    <div
                        data-aos="fade-up"
                        anchor-placement="top-center"
                    >
                        <PriceCard time='1 Month Membership'
                            price='9.99'
                            description='Enjoy exclusive discounts, priority access, and seamless
                             shopping benefits for a month—perfect for short-term flexibility.'
                        />
                    </div>
                    <div
                        data-aos="fade-up"
                        anchor-placement="top-center"
                        data-aos-delay="100"
                    >
                        <PriceCard time='3 Months Membership'
                            price='19.99'
                            description='Unlock premium perks, early access, and savings for
                             three months—ideal for extended shopping convenience and ideas.'
                        />
                    </div>
                    <div
                        data-aos="fade-up"
                        anchor-placement="top-center"
                        data-aos-delay="200"
                    >
                        <PriceCard time='Life Time Membership'
                            price='199.99'
                            description='Get unlimited benefits, exclusive deals, and VIP access
                             forever—your ultimate fashion experience, hassle-free!'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing