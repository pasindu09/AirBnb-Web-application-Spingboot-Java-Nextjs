import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useHotels = (category, searchParams) => {
    const axiosPublic = useAxiosPublic();

    const { data: hotels = [] } = useQuery({
        queryKey: ['hotels', category, searchParams],
        queryFn: async () => {
            const res = await axiosPublic.get(`/hotels/${category}`, {
                params: {
                    destination: searchParams.destination,
                    checkInDate: searchParams.checkInDate,
                    checkOutDate: searchParams.checkOutDate,
                    guests: searchParams.guests
                }
            });
            return res.data;
        }
    });

    return [hotels];
};

export default useHotels;