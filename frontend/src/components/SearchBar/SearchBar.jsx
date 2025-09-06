import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaMinus, FaPlus, FaSearch } from 'react-icons/fa';
import moment from 'moment';

const SearchBar = ({ onSearch }) => {
    const [destination, setDestination] = useState('');
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [guests, setGuests] = useState({
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0
    });

    const handleGuestChange = (type, value) => {
        setGuests(prevGuest => (
            {
                ...prevGuest,
                [type]: Math.max(0, prevGuest[type] + value)
            }
        ));
    };

    const handleSearch = () => {
        const formattedCheckInDate = checkInDate ? moment(checkInDate).format('YYYY-MM-DD') : null;
        const formattedCheckOutDate = checkOutDate ? moment(checkOutDate).format('YYYY-MM-DD') : null;

        onSearch({ destination, checkInDate: formattedCheckInDate, checkOutDate: formattedCheckOutDate, guests });
    };

    return (
        <div className='bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4 items-center w-full max-w-5xl mx-auto'>
            {/* Destination */}
            <div className='flex-1'>
                <input
                    type="text"
                    placeholder="Search Destination"
                    value={destination}
                    onChange={event => setDestination(event.target.value)}
                    className="input input-bordered w-full"
                />
            </div>

            {/* Check In Dates */}
            <div className='flex-1 relative z-20'>
                <DatePicker
                    selected={checkInDate}
                    onChange={date => setCheckInDate(date)}
                    placeholderText='Check In'
                    className="input input-bordered w-full"
                    popperClassName="z-50"
                ></DatePicker>
            </div>

            {/* Check Out Dates */}
            <div className='flex-1 relative z-20'>
                <DatePicker
                    selected={checkOutDate}
                    onChange={date => setCheckOutDate(date)}
                    placeholderText='Check Out'
                    className="input input-bordered w-full"
                    popperClassName="z-50"
                ></DatePicker>
            </div>

            {/* Add Guests */}
            <div className='relative z-20 dropdown'>
                <button className="input input-bordered w-full text-left">
                    Add Guests
                </button>
                <div className='absolute mt-2 bg-white shadow-lg p-4 rounded-lg z-10'>

                    {/* Categories of Guests */}
                    <div className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">

                        {/* Adult Guest */}
                        <div className='flex justify-between items-center space-x-10'>
                            <h3>
                                <span className='font-bold'>Adult</span>
                                <br />
                                Ages 13 or above
                            </h3>
                            {/*Increase and Decrease the number of Adults */}
                            <div className='flex items-center gap-2'>
                                <button onClick={() => handleGuestChange('adults', -1)}>
                                    <FaMinus></FaMinus>
                                </button>

                                <span>{guests.adults}</span>

                                <button onClick={() => handleGuestChange('adults', 1)}>
                                    <FaPlus></FaPlus>
                                </button>
                            </div>
                        </div>

                        {/* Children Guest */}
                        <div className='flex justify-between items-center mt-6 space-x-10'>
                            <h3>
                                <span className='font-bold'>Children</span>
                                <br />
                                Ages 2-12
                            </h3>
                            {/*Increase and Decrease the number of Children */}
                            <div className='flex items-center gap-2'>
                                <button onClick={() => handleGuestChange('children', -1)}>
                                    <FaMinus></FaMinus>
                                </button>

                                <span>{guests.children}</span>

                                <button onClick={() => handleGuestChange('children', 1)}>
                                    <FaPlus></FaPlus>
                                </button>
                            </div>
                        </div>

                        {/* Infants Guest */}
                        <div className='flex justify-between items-center mt-6 space-x-10'>
                            <h3>
                                <span className='font-bold'>Infants</span>
                                <br />
                                Under 2
                            </h3>
                            {/*Increase and Decrease the number of Infants */}
                            <div className='flex items-center gap-2'>
                                <button onClick={() => handleGuestChange('infants', -1)}>
                                    <FaMinus></FaMinus>
                                </button>

                                <span>{guests.infants}</span>

                                <button onClick={() => handleGuestChange('infants', 1)}>
                                    <FaPlus></FaPlus>
                                </button>
                            </div>
                        </div>

                        {/* Pets Guest */}
                        <div className='flex justify-between items-center mt-6 space-x-10'>
                            <h3>
                                <span className='font-bold'>Pets</span>
                                <br />
                                <a className="link">Bringing a service animal?</a>
                            </h3>
                            {/*Increase and Decrease the number of Pets */}
                            <div className='flex items-center gap-2'>
                                <button onClick={() => handleGuestChange('pets', -1)}>
                                    <FaMinus></FaMinus>
                                </button>

                                <span>{guests.pets}</span>

                                <button onClick={() => handleGuestChange('pets', 1)}>
                                    <FaPlus />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Search Button */}
            <button onClick={handleSearch} className='btn bg-rose-500 w-full md:w-auto flex items-center gap-2'>
                <FaSearch />
                <span>Search</span>
            </button>
        </div>
    );
};

export default SearchBar;