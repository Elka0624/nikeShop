import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb';
import {AiOutlinePercentage} from 'react-icons/ai'
import {MdOutlineDeliveryDining, MdOutlineContactPhone} from 'react-icons/md';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {GiRunningShoe, GiTShirt} from 'react-icons/gi';
import {FaFemale} from 'react-icons/fa';
import {RxDashboard} from 'react-icons/rx'
import './TopMain.css'


const TopMain = () => {
return (
    <div>
        <div className="container">
                <div className="topMain flex">
                    <div className="divgreen">
                        <Link to='#' className='topLink'>
                            <div className="icondiv">
                                <TbTruckDelivery className='icon'/>
                            </div>
                            <p className='linkParagraph'>Tezkor Yetkazish</p>
                        </Link>
                    </div>
                    <div className="divgreen">
                        <Link to='#' className='topLink'>
                            <div className="icondiv">
                                    <AiOutlinePercentage className='icon'/>
                            </div>
                            <p className='linkParagraph'>Aksiyalar 🔥</p>
                        </Link>
                    </div>
                    <div className="divblue">
                        <Link to='#' className='topLink'>
                            <div className="icondiv">
                                <MdOutlineDeliveryDining className='icon'/>
                            </div>
                            <p className='linkParagraph'>Bepul Yetkazish</p>
                        </Link>
                    </div>
                    <div className="divblue">
                        <Link to='#' className='topLink'>
                            <div className="icondiv">
                                <MdOutlineContactPhone className='icon'/>
                            </div>
                            <p className='linkParagraph'>Aloqa Uchun</p>
                        </Link>
                    </div>
                </div>
                {/* ikkinchi qator boshlandi */}
                <div className="topMain flex">
                    <div className="divblue">
                            <Link to='#' className='topLink'>
                                <div className="icondiv">
                                    <GiRunningShoe className='icon'/>
                                </div>
                                <p className='linkParagraph'>Krasofkalar</p>
                            </Link>
                    </div>
                    <div className="divblue">
                            <Link to='#' className='topLink'>
                                <div className="icondiv">
                                    <GiTShirt className='icon'/>
                                </div>
                                <p className='linkParagraph'>Fudbolkalar</p>
                            </Link>
                    </div>
                    <div className="divgreen">
                        <Link to='#' className='topLink'>
                            <div className="icondiv">
                                <FaFemale className='icon'/>
                            </div>
                            <p className='linkParagraph'>Ayollar Uchun</p>
                        </Link>
                    </div>
                    <div className="divgreen">
                        <Link to='#' className='topLink'>
                            <div className="icondiv">
                                <RxDashboard className='iconn'/>
                            </div>
                            <p className='linkParagraph'>Barchasi</p>
                        </Link>
                    </div>
                </div>
        </div>
    </div>
)
}

export default TopMain
