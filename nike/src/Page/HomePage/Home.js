import React from 'react'
import DemoCarousel from '../../Companents/Carousel/Carousel'
import Navbar from '../../Companents/Navbar/Navbar'
import NavInfo from '../../Companents/NavInfo/NavInfo'
import TopMain from '../../Companents/TopMain/TopMain'
import UpdateLater from '../../Companents/UpdateLater/UpdateLater'

const Home = () => {
return (
    <div>
        <NavInfo />
        <Navbar />
        <DemoCarousel />
        <TopMain />
        <UpdateLater />
    </div>
)
}

export default Home
