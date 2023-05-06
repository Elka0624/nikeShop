import React from 'react'
import './BrandSlider.css'
import '../UpdateLater/UpateLater.css';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai'
import vanslogo from '../../Assent/vanslogo.jpg';
import nikelogo from '../../Assent/nikelogo.jpg'
import adidaslogo from '../../Assent/adidaslogo.jpg'
import jordanlogo from '../../Assent/jordan logo.webp'
import newbalance from '../../Assent/newbalancelogo.jpg'
import asicslogo from '../../Assent/asicslogo.svg'

const BrandSlider = () => {
return (
    <div className='container'>
        <div className="brandInfo flex">
            <h1>Mashhur brendlar</h1>
            <Link to='#' className='infoLink'>
                        <p className='flex updateP'>Hammasini Ko`rish <AiOutlineRight className='icon'/> </p>
            </Link>
        </div>
        <div className="brandCards flex">
            <div className="brandCard">
                <img src={nikelogo} alt="" />
            </div>
            <div className="brandCard">
                <img src={adidaslogo} alt="" />
            </div>
            <div className="brandCard">
                <img src={jordanlogo} alt="" />
            </div>
            <div className="brandCard">
                <img src={newbalance} alt="" />
            </div>
            <div className="brandCard">
                <img src={asicslogo} alt="" />
            </div>
            <div className="brandCard">
                <img src={vanslogo} alt="" />
            </div>
        </div>
    </div>
)
}

export default BrandSlider
