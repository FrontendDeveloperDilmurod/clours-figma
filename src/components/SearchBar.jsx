import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';
import { use } from 'react';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visable, setVisible] = useState(false);
    const loaction = useLocation();

    useEffect(() => {
        if (loaction.pathname.includes("/collection")) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [loaction]);

    return showSearch ? (
        <div className="relative flex items-center w-full p-2 transition-all duration-300 ease-in-out bg-white border-2 border-gray-300 rounded-md shadow-md">
            <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-0 text-base text-gray-700 placeholder-gray-400 bg-transparent border-none rounded-md outline-none md:text-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <img
                src={assets.search_icon}
                alt="Search Icon"
                className="absolute w-5 h-5 text-gray-400 transition-all duration-200 ease-in-out cursor-pointer right-3 hover:text-blue-500"
            />
        </div>
    ) : (
        <div className="relative flex items-center w-full p-2 transition-all duration-300 ease-in-out bg-white border-2 border-gray-300 rounded-md shadow-md">
            <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-0 text-base text-gray-700 placeholder-gray-400 bg-transparent border-none rounded-md outline-none md:text-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <img
                src={assets.search_icon}
                alt="Search Icon"
                className="absolute w-5 h-5 text-gray-400 transition-all duration-200 ease-in-out cursor-pointer right-3 hover:text-blue-500"
                onClick={() => setShowSearch(true)}
            />
        </div>
    )
};

export default SearchBar;
