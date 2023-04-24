import React from 'react'
import './NavInfo.css';
import {AiOutlineEye, AiOutlineStar, AiOutlineUser} from 'react-icons/ai'
import {BrowserRouter, Route, Link} from 'react-router-dom'

const NavInfo = () => {
return (
    <BrowserRouter>
        <div className='NavInfo'>
            <div className="container">
                <div className="info flex">
                    <div className="link">
                        <ul className='ul flex'>
                            <li>
                                <Link to='#' className='link flex'>
                                    <AiOutlineEye className='icon'/> Jozibador takliflar
                                </Link>
                            </li>
                            <li>
                                <Link to='#' className='link flex'>
                                    <AiOutlineStar className='icon'/> Mashhur toifalar
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="langUser flex">
                        <select name="Til" id="" className='select'>
                            <option value="Uz">UZ</option>
                            <option value="En">EN</option>
                            <option value="Ru">RU</option>
                        </select>
                        <div className="user">
                            <Link to='#' className='link flex'>
                                <AiOutlineUser className='icon'/> Kirish
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BrowserRouter>
)
}

export default NavInfo
