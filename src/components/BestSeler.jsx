import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import { useTranslation } from 'react-i18next'

function BestSeler() {
    const [latestProducts, setLatestProducts] = useState([])
    const { products } = useContext(ShopContext)
    const { t } = useTranslation();
    useEffect(() => {
        setLatestProducts(products.filter((_, index) => index % 2 === 0).slice(0, 5))

    }, [products])
    return (
        <div className='my-12'>
            <div className='py-8 text-3xl text-center'>
                <Title text1={t("BestSeler.title1")} text2='' />
                <p className='w-3/4 m-auto text-sm text-gray-600 sm:text-sm md:text-base'>
                    {t("BestSeler.title2")}
                </p>
            </div>

            {/* best seller */}
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

export default BestSeler