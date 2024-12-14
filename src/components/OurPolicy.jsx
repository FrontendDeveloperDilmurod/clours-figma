import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { useTranslation } from 'react-i18next';

function OurPolicy() {
    const { t } = useTranslation();
    return (
        <div className='flex flex-col justify-around gap-12 py-20 text-xs text-center text-gray-700 md:flex-row sm:flex-row sm:gap-2 sm:text-sm md:text-base'>
            <div>
                <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5 ' />
                <p className='font-semibold'>{t("OurPolicy.title1")}</p>
                <p className='text-gray-400'>{t("OurPolicy.title2")}</p>
            </div>
            <div>
                <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5 ' />
                <p className='font-semibold'>{t("OurPolicy.title3")}</p>
                <p className='text-gray-400'>{t("OurPolicy.title4")} </p>
            </div>
            <div>
                <img src={assets.support_img} alt="" className='w-12 m-auto mb-5 ' />
                <p className='font-semibold'>{t("OurPolicy.title5")}</p>
                <p className='text-gray-400'>{t("OurPolicy.title6")}</p>
            </div>
        </div>
    )
}

export default OurPolicy