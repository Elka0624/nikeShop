import React from 'react'
import logo from '../../Assent/logo.jpg'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
return (
    <BrowserRouter>
        <div className='navbar'>
            <div className="container">
                <div className="searchPanel flex">
                    <div className="searchLeft flex">
                        <Link to="#" className='searchLink'>
                            <img src={logo} alt="" />
                        </Link>
                        <input type="text" placeholder='NikeStore dan qidirish' />
                    </div>
                    <div className="searchRight flex">
                        
                    </div>
                </div>
            <div className="mainPanel"></div>
        </div>
    </div>
    </BrowserRouter>
)
}

export default Navbar
