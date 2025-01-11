import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Collection = () => {
    const [productsItem, setProductsItem] = useState([]);
    const [showFilter, setShowFilter] = useState(true);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [price, setPrice] = useState([0, 1000]);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();

    const { products, search, showSearch } = useContext(ShopContext);

    // Function to handle category filter
    const toggleCategory = (e) => {
        const value = e.target.value;
        setCategory((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    // Function to handle subcategory filter
    const toggleSubCategory = (e) => {
        const value = e.target.value;
        setSubCategory((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    // Function to handle price filter
    const togglePrice = (e) => {
        const value = e.target.value;
        if (value === "priceLow") {
            setPrice([0, 1000]);
        } else if (value === "priceHigh") {
            setPrice([1000, 0]);
        }
    };

    // Function to apply filters
    const applyFilter = () => {
        let productsCopy = [...products];

        // Search filter
        if (showSearch && search.trim() !== "") {
            productsCopy = productsCopy.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Category filter
        if (category.length > 0) {
            productsCopy = productsCopy.filter((item) => category.includes(item.category));
        }

        // Subcategory filter
        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
        }

        // Price filter
        if (price[0] <= price[1]) {
            productsCopy.sort((a, b) => a.price - b.price);
        } else {
            productsCopy.sort((a, b) => b.price - a.price);
        }

        setFilterProducts(productsCopy);
    };

    // Applying filters and handling loading state on change
    useEffect(() => {
        setLoading(true);
        applyFilter();
        setLoading(false);
    }, [category, subCategory, price, products, search, showSearch]);

    // Setting the initial products item on change
    useEffect(() => {
        setProductsItem(products);
    }, [products]);

    return (
        <div className="flex flex-col pt-10 mt-16 border-t sm:flex-row sm:gap-8 lg:gap-12">
            {/* Filter Options */}
            <div className="sm:w-1/4">
                <p
                    className="flex items-center gap-1 text-xl font-semibold uppercase cursor-pointer"
                    onClick={() => setShowFilter(!showFilter)}
                >
                    <button>{t("Collection.title1")}</button>
                    {showFilter ? <FaChevronUp className="text-slate-500" /> : <FaChevronDown className="text-slate-500" />}
                </p>

                <div className={`transition-all duration-300 ${showFilter ? 'block' : 'hidden'}`}>
                    {/* Category Filter */}
                    <div className="p-4 mt-6 border border-gray-300 rounded-md">
                        <p className="text-lg font-medium uppercase">{t("Collection.title2")}</p>
                        <div className="flex flex-col gap-3 mt-4 text-sm font-light text-gray-700">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4" value="Men" onChange={toggleCategory} />
                                {t("Collection.title3")}
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4" value="Women" onChange={toggleCategory} />
                                {t("Collection.title4")}
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4" value="Kids" onChange={toggleCategory} />
                                {t("Collection.title5")}
                            </label>
                        </div>
                    </div>

                    {/* Subcategory Filter */}
                    <div className="p-4 mt-6 border border-gray-300 rounded-md">
                        <p className="text-lg font-medium uppercase">{t("Collection.title6")}</p>
                        <div className="flex flex-col gap-3 mt-4 text-sm font-light text-gray-700">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4" value="Topwear" onChange={toggleSubCategory} />
                                {t("Collection.title7")}
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4" value="Bottomwear" onChange={toggleSubCategory} />
                                {t("Collection.title8")}
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4" value="Winterwear" onChange={toggleSubCategory} />
                                {t("Collection.title9")}
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className="sm:w-3/4">
                <div className="flex flex-col items-start justify-between mb-6 space-y-4 sm:flex-row sm:items-center sm:space-y-0">
                    <h2 className="text-xl font-medium uppercase sm:text-2xl">
                        <Title text1={t("Collection.title10")} text2={t("Collection.title11")} />
                    </h2>
                    <div className="relative inline-block w-full sm:w-auto">
                        <select
                            onChange={togglePrice}
                            className="w-full px-2 py-2 pr-10 text-gray-700 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                        >
                            <option value="priceLow">{t("Collection.title12")}</option>
                            <option value="priceHigh">{t("Collection.title13")}</option>
                        </select>
                        <span className="absolute text-gray-500 transform -translate-y-1/2 pointer-events-none right-3 top-1/2">
                            <FaChevronDown />
                        </span>
                    </div>
                </div>

                {/* Loading Indicator */}
                {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-6 h-6 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                        <span className="text-xl">Loading...</span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {(filterProducts.length > 0 ? filterProducts : productsItem).map((item, index) => (
                            <Link
                                to={`/product/${item._id}`}
                                key={index}
                                className="flex flex-col overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="object-cover w-full h-60"
                                />
                                <div className="flex flex-col justify-between flex-1 p-4">
                                    <p className="text-lg font-light truncate text-slate-950">{item.name}</p>
                                    <p className="text-lg font-semibold text-green-600">${item.price}</p>
                                </div>
                            </Link >
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Collection;
