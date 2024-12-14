import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeler from '../components/BestSeler'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
    return (
        <div>
            <Hero />
            <LatestCollection />
            <BestSeler />
            <OurPolicy />
            <NewsletterBox />
        </div>
    )
}

export default Home
