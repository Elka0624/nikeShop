import React from 'react'
import DemoCarousel from '../../Companents/Carousel/Carousel'
import Navbar from '../../Companents/Navbar/Navbar'
import NavInfo from '../../Companents/NavInfo/NavInfo'
import TopMain from '../../Companents/TopMain/TopMain'
import UpdateLater from '../../Companents/UpdateLater/UpdateLater'
import nikeD1 from '../../Assent/nikeDiscount1.jpg'
import nikeD2 from '../../Assent/nikeDiscount2.jpg'
import nikeD3 from '../../Assent/nikeDiscount3.jpg'
import nikeD4 from '../../Assent/nikeDiscount4.jpg'
import nikeD5 from '../../Assent/nikeDiscount5.jpg'
import nikeD6 from '../../Assent/nikeDiscount6.jpg'
import UpdateLaterDiscount from '../../Companents/UpdateLater/UpdateLaterDiscount'
import BrandSlider from '../../Companents/BrandSlider/BrandSlider'

const Home = () => {
return (
    <div>
        <NavInfo />
        <Navbar />
        <DemoCarousel imgOne={nikeD4} imgTwo={nikeD5} imgThere={nikeD6}/>
        <TopMain />
        <UpdateLater />
        <DemoCarousel imgOne={nikeD1} imgTwo={nikeD2} imgThere={nikeD3}/>
        <UpdateLaterDiscount />
        <BrandSlider />
    </div>
)
}

export default Home
