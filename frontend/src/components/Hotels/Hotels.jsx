import React from 'react';
import HotelCard from '../HotelCard/HotelCard';
import useHotels from '../../hooks/useHotels';

const Hotels = () => {
    const [hotels] = useHotels();

    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4 w-full md:w-4/5 mx-auto my-8'>
            {
                hotels.map(hotel => <HotelCard
                    key={hotel._id}
                    hotel={hotel}
                ></HotelCard>)
            }
        </div>
    );
};

export default Hotels;