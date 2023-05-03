import React from 'react'
import './UpateLater.css'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {AiOutlineHeart, AiOutlineRight, AiFillEye} from 'react-icons/ai'
import {SlBasket} from 'react-icons/sl'
import {BiPurchaseTag} from 'react-icons/bi'
import test from '../../Assent/nike_krasofka_Pegaus.jpg';
import flag from '../../Assent/flagUzbekistan.png'
import mc1 from '../../Assent/Mc.png'

const UpdateLaterDiscount = () => {
return (
        <div className='container'>
            <div className="UpdateLaterDiv">
                <div className="updateInfo flex">
                    <h2> <del><span className='discountSpan'>30% </span></del> Chegirmadagi Mahsulotlarimiz ! </h2>
                    <Link to='#' className='infoLink'>
                        <p className='flex updateP'>Hammasini Ko`rish <AiOutlineRight className='icon'/> </p>
                    </Link>
                </div>
                <div className="updateCards flex">
                    <div className="updateCard">
                        <img src={mc1} alt="" className='headerImg' />
                        <AiFillEye className='iconn'/>
                        <h5 className='updateCardName'>Nike Pegaus</h5>
                        {/* <p className='updateCardInfo'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                        <p className='updateCardSize'>Rasmer : 36 - 45</p>
                        <p className='updateCardQuality'>Orginal</p>
                        <span className='updateCardPrice'>350.000 <sup>SO`M</sup></span>
                        <AiOutlineHeart className='icon'/> <p className='updateCardCounter'>326</p>
                        <img src={flag} alt="" className='updateCardFlag'/>
                        <div className="btnGroup flex">
                            <button className='flex btnBuy allBtn'>Harid Qilish <BiPurchaseTag className='icon'/> </button>
                            <button className='flex btnSell allBtn'>Savatga <SlBasket className='icon'/></button>
                        </div>
                    </div>
                    <div className="updateCard">
                        <img src={test} alt="" className='headerImg' />
                        <AiFillEye className='iconn'/>
                        <h5 className='updateCardName'>Nike Pegaus</h5>
                        {/* <p className='updateCardInfo'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                        <p className='updateCardSize'>Rasmer : 36 - 45</p>
                        <p className='updateCardQuality'>Orginal</p>
                        <span className='updateCardPrice'>350.000 <sup>SO`M</sup></span>
                        <AiOutlineHeart className='icon'/> <p className='updateCardCounter'>326</p>
                        <img src={flag} alt="" className='updateCardFlag'/>
                        <div className="btnGroup flex">
                            <button className='flex btnBuy allBtn'>Harid Qilish <BiPurchaseTag className='icon'/> </button>
                            <button className='flex btnSell allBtn'>Savatga <SlBasket className='icon'/></button>
                        </div>
                    </div>
                    <div className="updateCard">
                        <img src={test} alt="" className='headerImg' />
                        <AiFillEye className='iconn'/>
                        <h5 className='updateCardName'>Nike Pegaus</h5>
                        {/* <p className='updateCardInfo'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                        <p className='updateCardSize'>Rasmer : 36 - 45</p>
                        <p className='updateCardQuality'>Orginal</p>
                        <span className='updateCardPrice'>350.000 <sup>SO`M</sup></span>
                        <AiOutlineHeart className='icon'/> <p className='updateCardCounter'>326</p>
                        <img src={flag} alt="" className='updateCardFlag'/>
                        <div className="btnGroup flex">
                            <button className='flex btnBuy allBtn'>Harid Qilish <BiPurchaseTag className='icon'/> </button>
                            <button className='flex btnSell allBtn'>Savatga <SlBasket className='icon'/></button>
                        </div>
                    </div>
                    <div className="updateCard">
                        <img src={test} alt="" className='headerImg' />
                        <AiFillEye className='iconn'/>
                        <h5 className='updateCardName'>Nike Pegaus</h5>
                        {/* <p className='updateCardInfo'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                        <p className='updateCardSize'>Rasmer : 36 - 45</p>
                        <p className='updateCardQuality'>Orginal</p>
                        <span className='updateCardPrice'>350.000 <sup>SO`M</sup></span>
                        <AiOutlineHeart className='icon'/> <p className='updateCardCounter'>326</p>
                        <img src={flag} alt="" className='updateCardFlag'/>
                        <div className="btnGroup flex">
                            <button className='flex btnBuy allBtn'>Harid Qilish <BiPurchaseTag className='icon'/> </button>
                            <button className='flex btnSell allBtn'>Savatga <SlBasket className='icon'/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}

export default UpdateLaterDiscount
