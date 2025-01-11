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


// import React, { useState } from "react";

// const ProductPage = () => {
//     const [selectedSize, setSelectedSize] = useState("M");

//     const handleSizeSelect = (size) => {
//         setSelectedSize(size);
//     };

//     return (
//         <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-8">
//             {/* Left: Image gallery */}
//             <div className="w-full md:w-1/3">
//                 <div className="flex flex-col space-y-4">
//                     {Array(5)
//                         .fill("/path-to-image.jpg")
//                         .map((src, idx) => (
//                             <img
//                                 key={idx}
//                                 src={src}
//                                 alt={`Product ${idx + 1}`}
//                                 className="w-full h-auto rounded-md border"
//                             />
//                         ))}
//                 </div>
//             </div>

//             {/* Right: Product details */}
//             <div className="w-full md:w-2/3">
//                 <h1 className="text-2xl font-bold">Men Round Neck Pure Cotton T-shirt</h1>
//                 <div className="flex items-center mt-2">
//                     <div className="text-yellow-500 text-lg">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
//                     <span className="ml-2 text-gray-500">(122)</span>
//                 </div>
//                 <p className="text-2xl font-semibold mt-4">$149</p>
//                 <p className="text-gray-600 mt-2">
//                     A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
//                 </p>

//                 {/* Size selection */}
//                 <div className="mt-6">
//                     <h2 className="text-lg font-semibold mb-2">Select Size</h2>
//                     <div className="flex gap-4">
//                         {["S", "M", "L", "XL", "XXL"].map((size) => (
//                             <button
//                                 key={size}
//                                 onClick={() => handleSizeSelect(size)}
//                                 className={`px-4 py-2 border rounded-md ${selectedSize === size ? "border-black" : "border-gray-300"
//                                     }`}
//                             >
//                                 {size}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Add to Cart Button */}
//                 <button className="mt-6 bg-black text-white px-6 py-3 rounded-md">
//                     ADD TO CART
//                 </button>

//                 {/* Product info */}
//                 <div className="mt-6 text-gray-600">
//                     <p>100% Original product.</p>
//                     <p>Cash on delivery is available on this product.</p>
//                     <p>Easy return and exchange policy within 7 days.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductPage;

