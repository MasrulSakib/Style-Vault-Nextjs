import React from 'react'
import ClientsReviewCard from './ClientsReviewCard';
import image1 from '../../../assets/Clients/1.jpg'
import image2 from '../../../assets/Clients/2.jpeg'
import image3 from '../../../assets/Clients/3.jpg'
import image4 from '../../../assets/Clients/4.jpg'

const ClientsReview = () => {
    return (
        <div className='py-16 bg-gray-100'>
            {/* Heading */}
            <h1 className='text-center text-2xl text-blue-950 font-bold'>
                What Our Happy Client Says
            </h1>
            {/* Sub heading */}
            <p className='mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]'>
                Hear from our satisfied customers about their seamless shopping experience, high-quality fashion,
                fast shipping, and excellent support. Join thousands who trust StyleVault for trendy, reliable,
                and effortless style solutions.
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-16 xl:container mx-5 xl:mx-auto'>
                <div
                    data-aos="zoom-in"
                    anchor-placement="top-center"
                >
                    <ClientsReviewCard image={image1} ratings='4.7' name="Rasberry" />
                </div>
                <div
                    data-aos="zoom-in"
                    anchor-placement="top-center"
                    data-aos-delay="100"
                >
                    <ClientsReviewCard image={image2} ratings='4.5' name="Blackberry" />
                </div>
                <div
                    data-aos="zoom-in"
                    anchor-placement="top-center"
                    data-aos-delay="200"
                >
                    <ClientsReviewCard image={image3} ratings='4.3' name="Blueberry" />
                </div>
                <div
                    data-aos="zoom-in"
                    anchor-placement="top-center"
                    data-aos-delay="300"
                >
                    <ClientsReviewCard image={image4} ratings='4.9' name="Strawberry" />
                </div>
            </div>
        </div>
    )
}

export default ClientsReview;