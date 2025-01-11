import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';  // Import i18n hook
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
    const { t } = useTranslation();  // useTranslation hook'ini chaqiramiz
    const [latestProducts, setLatestProducts] = useState([])
    const { products } = useContext(ShopContext)

    useEffect(() => {
        setLatestProducts(products.slice(0, 10))
    }, [products])

    return (
        <div className='my-12 '>
            <div className='py-8 text-3xl text-center'>
                <Title text1={t('LatestCollection.title1')} text2={t('')} />  {/* Dynamik tarjima */}
                <p className='w-3/4 m-auto text-sm text-gray-600 sm:text-sm md:text-base'>
                    {t('LatestCollection.title2')} {/* Dinamik matn */}
                </p>
            </div>

            {/* so'nggi mahsulotlar */}
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 gap-y-6'>
                {latestProducts.map((item, index) => (
                    <ProductItem
                        key={index}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default LatestCollection
