import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Loading from './Loading';

const DetailPage = () => {
    const { id } = useParams(); // URLdan IDni olish
    const { products } = useContext(ShopContext);
    if (products || products.length === 0) {
        return <Loading />;
    }

    // Mahsulotni topish
    const product = products.find((item) => item.id === Number(id));

    return (
        <div className="container p-4 mx-auto">
            {product ? (
                <div className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
                    <img src={product.image} alt={product.name} className="object-cover w-full h-64" />
                    <div className="p-4">
                        <h1 className="text-2xl font-bold">{product.name}</h1>
                        <p className="text-lg text-green-600">${product.price}</p>
                        <p className="mt-4">{product.description}</p>
                        <p className="mt-2 text-sm italic">{product.category}</p>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default DetailPage;
