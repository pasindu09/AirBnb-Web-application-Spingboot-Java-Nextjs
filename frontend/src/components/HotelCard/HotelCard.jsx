import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const HotelCard = ({ hotel }) => {
    const { hotelName, hotelDestination, shortDescription, pricePerGuest, checkOut, images } = hotel;
    return (
        <div className='flex justify-center items-center relative z-10'>
            <div className="card bg-base-100 w-full shadow-xl h-[500px] flex flex-col">
                <figure className='h-64 w-full relative overflow-hidden'>
                    {/* <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className='w-full h-full object-cover'
                    /> */}

                    {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper> */}
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper" style={{ height: '100%' }} >
                        {
                            images.map((image, index) => (
                                <SwiperSlide key={index} className='h-full'>
                                    <img
                                        src={image}
                                        alt={`Hotel Image ${index + 1}`}
                                        className='w-full h-full object-cover'
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </figure>
                <div className="card-body flex-1 flex flex-col justify-between">
                    <h2 className="card-title">
                        {hotelName} , {hotelDestination}
                    </h2>
                    <p>{shortDescription}</p>
                    {
                        checkOut === 'Sold Out' ? <p className='font-bold'>Sold Out</p>
                            :
                            <p>
                                <span className='font-bold mr-2'>${pricePerGuest}</span>
                                Per Guest
                            </p>
                    }
                </div>
            </div>
        </div >
    );
};

export default HotelCard;