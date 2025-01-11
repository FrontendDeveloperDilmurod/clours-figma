import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Button, message } from "antd";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
    const { productId } = useParams();
    const { products, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [selectedSize, setSelectedSize] = useState("M");
    const [messageApi, contextHolder] = message.useMessage();

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };
    useEffect(() => {
        const fetchProductData = () => {
            const product = products.find((item) => item._id === productId);
            if (product) {
                setProductData(product);
            }
        };
        fetchProductData();
    }, [productId, products]);

    if (!productData) {
        return <div>Loading...</div>;
    }

    const success = () => {
        messageApi.open({
            type: "success",
            content: `Added to cart (${selectedSize} size)`,
        });
    };

    const handleAddToCart = () => {
        addToCart(productData._id, selectedSize);
        success();
    };

    return (
        <div className="p-6 mx-auto max-w-7xl">
            {contextHolder}
            <div className="flex flex-col gap-10 md:flex-row">
                <div className="w-full md:w-1/3">
                    <img
                        src={productData.image}
                        alt={productData.name}
                        className="w-full h-auto border rounded-lg shadow-md"
                    />
                </div>
                <div className="w-full md:w-2/3">
                    <h1 className="mb-4 text-3xl font-bold">{productData.name}</h1>
                    <p className="mb-2 text-xl font-semibold text-green-600">
                        ${productData.price}
                    </p>
                    <p className="mb-6 text-gray-600">{productData.description}</p>

                    <h2 className="mb-2 text-lg font-semibold">Select Size</h2>
                    <div className="flex gap-4">
                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                            <button
                                key={size}
                                onClick={() => handleSizeSelect(size)}
                                className={`px-4 py-2 border rounded-md ${selectedSize === size ? "border-black" : "border-gray-300"
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>

                    <Button className="mt-6" type="primary" onClick={handleAddToCart}>
                        Add to Cart
                    </Button>
                </div>
            </div>

            <RelatedProduct
                products={products}
                category={productData.category}
                subCategory={productData.subCategory}
            />
        </div>
    );
};

export default Product;
