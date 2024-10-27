import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'
import LoadingSpinner from '../components/LoadingSpinner'

const Main = () => {

    const [loading,setLoading] = useState(false)

    return (
        <div className="bg-white h-full">
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div className='max-w-[1400px] mx-auto'>
                    <Navbar />
                    <div className="pt-[80px] md:pt-0">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            )}
        </div>
    )
}

export default Main