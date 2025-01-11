import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'

function RootLayout() {
    return (
        <div>
            <Navbar />
            {/* <SearchBar /> */}
            <main className='px-4'>
                <Outlet />
            </main>
            {/* <footer>Footer</footer> */}
            <Footer />
        </div>
    )
}

export default RootLayout