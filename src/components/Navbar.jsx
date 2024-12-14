import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from './../assets/frontend_assets/assets';
import { IoCloseOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUzbek, setIsUzbek] = useState(false); // Tilni boshqarish uchun bitta holat ishlatilmoqda
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsUzbek(lng === 'uz');
    };

    return (
        <div>
            <div className="flex items-center justify-between px-4 py-6 font-medium">
                {/* Logo */}
                <Link to={'/'}>
                    <img src={assets.logo} alt="Logo" className="object-cover w-36" />
                </Link>

                {/* Nav Links for larger screens */}
                <ul className="hidden gap-8 text-sm text-gray-700 md:flex a_876 ">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "flex flex-col items-center gap-1 text-black relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-2/4 after:bg-black"
                                : "flex flex-col items-center gap-1"
                        }
                    >
                        <p className="uppercase">
                            {t('navbar.home')}
                        </p>
                    </NavLink>

                    <NavLink
                        to="/collection"
                        className={({ isActive }) =>
                            isActive
                                ? "flex flex-col items-center gap-1 text-black relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-2/4 after:bg-black"
                                : "flex flex-col items-center gap-1"
                        }
                    >
                        <p className="uppercase">{t('navbar.collection')}</p>
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "flex flex-col items-center gap-1 text-black relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-2/4 after:bg-black"
                                : "flex flex-col items-center gap-1"
                        }
                    >
                        <p className="uppercase">{t('navbar.about')}</p>
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "flex flex-col items-center gap-1 text-black relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-2/4 after:bg-black"
                                : "flex flex-col items-center gap-1"
                        }
                    >
                        <p className="uppercase">{t('navbar.contact')}</p>
                    </NavLink>
                </ul>

                {/* Right Section */}
                <div className="flex items-center gap-6">
                    {/* Language Toggle */}
                    <div onChange={(e) => i18n.changeLanguage(e.target.value)} className="relative flex items-center w-32 h-10 p-1 bg-gray-100 border-2 border-gray-300 rounded-full language_hidden ">
                        <div
                            className={`absolute top-1 bottom-1 left-1 w-14 rounded-full bg-blue-500 transition-all duration-300 ease-in-out ${isUzbek ? 'translate-x-0' : 'translate-x-16'
                                }`}
                        ></div>
                        <button
                            className={`z-10 flex-1 text-center font-medium transition-colors duration-300 ease-in-out ${isUzbek ? 'text-white' : 'text-gray-600'
                                }`}
                            onClick={() => changeLanguage('uz')}
                        >
                            Uz
                        </button>
                        <button
                            className={`z-10 flex-1 text-center font-medium transition-colors duration-300 ease-in-out ${!isUzbek ? 'text-white' : 'text-gray-600'
                                }`}
                            onClick={() => changeLanguage('en')}
                        >
                            En
                        </button>
                    </div>

                    {/* Search Icon */}
                    <img className="w-6 cursor-pointer" src={assets.search_icon} alt="Search" />

                    {/* Profile Dropdown */}
                    <div className="relative group">
                        <img className="w-6 cursor-pointer" src={assets.profile_icon} alt="Profile" />
                        <div className="absolute right-0 hidden pt-4 group-hover:block dropdown-menu">
                            <div className="flex flex-col gap-2 px-5 py-3 text-gray-500 rounded cursor-pointer w-36 bg-slate-100">
                                <p className="cursor-pointer hover:text-black">{t('navbar.myProfile')}</p>
                                <p className="cursor-pointer hover:text-black">{t('navbar.myOrders')}</p>
                                <p className="cursor-pointer hover:text-black">{t('navbar.logout')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Cart Icon */}
                    <Link to={'/cart'} className="relative">
                        <img src={assets.cart_icon} alt="Cart" className="w-6 cursor-pointer" />
                        <span className="absolute top-0 right-0 px-1 text-xs text-white bg-red-500 rounded-full">
                            10
                        </span>
                    </Link>

                    {/* Burger Menu Icon */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="block md:hidden"
                    >
                        {isMenuOpen ? (
                            <IoCloseOutline className="w-8 h-8 text-black" />
                        ) : (
                            <img
                                className="w-6 cursor-pointer"
                                src={assets.menu_icon}
                                alt="Menu"
                            />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="w-full bg-gray-100 md:hidden">
                    {/* Language Toggle */}
                    <div className="relative flex items-center w-24 h-8 p-1 mb-4 bg-gray-100 border-2 border-gray-300 rounded-full">
                        <div
                            className={`absolute top-1 bottom-1 left-1 w-10 rounded-full bg-blue-500 transition-all duration-300 ease-in-out ${isUzbek ? 'translate-x-0' : 'translate-x-12'}`}
                        ></div>
                        <button
                            className={`z-10 flex-1 text-center font-medium transition-colors duration-300 ease-in-out ${isUzbek ? 'text-white' : 'text-gray-600'}`}
                            onClick={() => changeLanguage('uz')}
                        >
                            Uz
                        </button>
                        <button
                            className={`z-10 flex-1 text-center font-medium transition-colors duration-300 ease-in-out ${!isUzbek ? 'text-white' : 'text-gray-600'}`}
                            onClick={() => changeLanguage('en')}
                        >
                            En
                        </button>
                    </div>

                    <ul className="flex flex-col justify-start gap-8 mb-8 text-sm text-gray-700 sm:flex-row sm:text-base">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-black font-bold hover:text-black"
                                    : "flex flex-col items-start gap-2 text-gray-600"
                            }
                        >
                            <p className="flex items-center gap-1 uppercase">
                                🏠 {t('navbar.home')}
                            </p>
                        </NavLink>

                        <NavLink
                            to="/collection"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-black font-bold hover:text-black"
                                    : "flex flex-col items-start gap-2 text-gray-600"
                            }
                        >
                            <p className="flex items-center gap-1 uppercase">
                                🖼️ {t('navbar.collection')}
                            </p>
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-black font-bold hover:text-black"
                                    : "flex flex-col items-start gap-2 text-gray-600"
                            }
                        >
                            <p className="flex items-center gap-1 uppercase">
                                ℹ️ {t('navbar.about')}
                            </p>
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-black font-bold hover:text-black"
                                    : "flex flex-col items-start gap-2 text-gray-600"
                            }
                        >
                            <p className="flex items-center gap-1 uppercase">
                                📞 {t('navbar.contact')}
                            </p>
                        </NavLink>
                    </ul>



                </div>
            )}
        </div>
    );
}
export default Navbar;
