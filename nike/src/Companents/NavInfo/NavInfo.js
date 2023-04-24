import React from 'react'
import './NavInfo.css';
import {AiOutlineEye} from 'react-icons/ai'
import {BrowserRouter, Route, Link} from 'react-router-dom'

const NavInfo = () => {
return (
    <BrowserRouter>
        <div className='NavInfo'>
            <div className="container">
                <div className="info flex">
                    <div className="link">
                        <ul className='flex'>
                            <li>
                                <Link to='#'>
                                    <AiOutlineEye /> hello
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="langUser"></div>
                </div>
            </div>
        </div>
    </BrowserRouter>
)
}

export default NavInfo
