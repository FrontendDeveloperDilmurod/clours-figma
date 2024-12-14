import React from 'react'
import { assets } from './../assets/frontend_assets/assets';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
    return (
        <div className='flex flex-col border border-gray-400 md:flex-row'>
            {/* Left */}
            <div className='flex items-center justify-center w-full py-10 sm:w-1/2 sm:py-0'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='text-sm font-medium uppercase md:text-base'>{t('hero.title1')}</p>
                    </div>
                    <h1 className='text-3xl leading-relaxed prata-regular l sm:py-3 lg:text-5xl'>{t('hero.title2')}</h1>
                    <div className='flex items-center gap-2'>
                        <p className='text-sm font-medium uppercase md:text-base'>{t('hero.title3')}</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414140]'></p>
                    </div>
                </div>
            </div>
            {/* Right */}
            <img src={assets.hero_img} alt="hero img" className='w-full sm:w-1/2' />
        </div>
    )
}

export default Hero
