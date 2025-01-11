import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RelatedProduct = ({ products, category, subCategory, addToCart }) => {
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        if (!products || products.length === 0) return;

        // Filter products by category and subCategory
        let filteredProducts = products.filter((item) => {
            return (
                item.category === category &&
                item.subCategory === subCategory
            );
        });

        // Select the first 5 related products
        setRelatedProducts(filteredProducts.slice(0, 5));
    }, [products, category, subCategory]); // Re-run the effect if inputs change

    return (
        <div className="related-products">
            <h2 className="mb-4 text-xl font-semibold">Related Products</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
                {relatedProducts.map((product) => (
                    <div
                        key={product.id}
                        className="p-4 transition-shadow duration-300 border rounded hover:shadow-lg"
                    >
                        <Link to={`/product/${product._id}`} className="block mb-2">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="object-cover w-full h-40 mb-2 rounded"
                            />
                            <h3 className="text-lg font-medium">{product.name}</h3>
                            <p className="text-gray-500">{product.price}$</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedProduct;
