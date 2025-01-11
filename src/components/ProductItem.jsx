import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext); // Get currency from context

    return (
        <div>
            <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
                <div className='overflow-hidden'>
                    <img src={image[0]} alt={name} className='transition duration-300 hover:scale-110' />
                </div>
                <p className='pt-3 pb-1 text-sm'>{name}</p>
                <p className='text-sm font-medium'>{currency}{price}</p>
            </Link>
        </div>
    );
};

export default ProductItem;
