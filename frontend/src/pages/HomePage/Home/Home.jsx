import React, { useState } from 'react';
import SearchBar from '../../../components/SearchBar/SearchBar';
import TabComponent from '../../../components/TabsComponent/TabComponent';
import Hotels from '../../../components/Hotels/Hotels';

const Home = () => {
    const [searchParams, setSearchParams] = useState({
        destination: '',
        checkInDate: null,
        checkOutDate: null,
        guests: {
            adults: 0,
            children: 0,
            infants: 0,
            pets: 0
        }
    });

    const handleSearch = (params) => {
        setSearchParams(params);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch}></SearchBar>
            <TabComponent searchParams={searchParams}></TabComponent>
            <Hotels></Hotels>
        </div>
    );
};

export default Home;