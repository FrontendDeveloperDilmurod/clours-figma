import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();
    return (
        <footer>
            <div className="px-4 py-12">
                {/* Footer Content */}
                <div className="flex flex-col gap-8 md:flex-row md:justify-between">
                    {/* Left Section */}
                    <div className="md:w-1/2">
                        <aside className="flex flex-col items-center text-center md:items-start md:text-left">
                            <Link to="/">
                                <img src={assets.logo} alt="logo" className="mb-4 w-36" />
                            </Link>
                            <p className="text-base font-light leading-6 text-gray-600">
                                {t("Footer.title1")}
                            </p>
                        </aside>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col gap-32 md:flex-row md:w-2/2">
                        {/* Company Links */}
                        <ul className="flex flex-col gap-3">
                            <h2 className="mb-4 text-lg font-semibold text-gray-800">
                                {t("Footer.title2")}
                            </h2>
                            <li className="text-base font-light leading-6 text-gray-600 cursor-pointer hover:text-gray-800">
                                <Link to="/">
                                    {t("Footer.title3")}
                                </Link>
                            </li>
                            <li className="text-base font-light leading-6 text-gray-600 cursor-pointer hover:text-gray-800">
                                <Link to="/about-us">
                                    {t("Footer.title4")}

                                </Link>
                            </li>
                            <li className="text-base font-light leading-6 text-gray-600 cursor-pointer hover:text-gray-800">
                                <Link to="/delivery">
                                    {t("Footer.title5")}

                                </Link>
                            </li>
                            <li className="text-base font-light leading-6 text-gray-600 cursor-pointer hover:text-gray-800">
                                <Link to="/privacy-policy">
                                    {t("Footer.title6")}

                                </Link>
                            </li>
                        </ul>


                        {/* Get in Touch */}
                        <ul className="flex flex-col gap-3">
                            <h2 className="mb-4 text-lg font-semibold text-gray-800">
                                {t("Footer.title7")}

                            </h2>
                            <li className="text-base font-light leading-6 text-gray-600">
                                {t("Footer.title8")}

                            </li>
                            <li className="text-base font-light leading-6 text-gray-600">
                                {t("Footer.title9")}

                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <hr className="mt-10 mb-6 border-gray-300" />

                {/* Footer Bottom */}
                <div className="pt-4 text-sm font-light text-center text-gray-500">
                    {t("Footer.title10")}

                    <span className="font-medium text-gray-800">
                        {t("Footer.title11")}

                    </span>
                    {t("Footer.title12")}

                </div>
            </div>
        </footer>
    );
}

export default Footer;
