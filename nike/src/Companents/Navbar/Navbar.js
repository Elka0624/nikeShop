import React from 'react'
import logo from '../../Assent/logo.jpg'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './Navbar.css'
import {AiOutlineHeart} from 'react-icons/ai';
import {SlBasket} from 'react-icons/sl'
import {ImSearch} from 'react-icons/im'
import {RxDashboard} from 'react-icons/rx'
import {GiArmoredPants, GiRunningShoe, GiTShirt, GiFootTrip, GiClothes} from 'react-icons/gi'
import {FormControl, InputLabel, NativeSelect} from '@mui/material'

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
                        <input type="text" placeholder='NikeStore dan qidirish . . .' />
                        <button className='SearchBtn'>
                            <ImSearch className='icon'/>
                        </button>
                    </div>
                    <div className="searchRight flex">
                        <Link to='#' className='linkk'>
                            <AiOutlineHeart className='icon'/>
                        </Link>
                        <Link to='#' className='linkk' >
                            <SlBasket className='icon'/> Savat
                        </Link>
                    </div>
                </div>
            <div className="mainPanel flex">
                {/* <select name="main" id="">
                    <option value="Barcha kategoriyalar">
                        <Link to='#'>
                                Barcha kategoriyalar
                        </Link>
                    </option>
                    <option value="Ayollar kiyimlari">
                        <Link to='#'>
                            Ayollar kiyimlari
                        </Link>
                    </option>
                    <option value="Ayollar Oyoq kiyimlari">
                        <Link to='#'>
                            Ayollar Oyoq Kiyimi
                        </Link>
                    </option>
                    <option value="Erkaklar Kiyimi">
                        <Link to='#'>
                            Erkaklar Kiyimi
                        </Link>
                    </option>
                    <option value="Ko'ylaklar">
                        <Link to='#'>
                            Ko'ylaklar
                        </Link>
                    </option>
                    <option value="Krasofkalar">
                        <Link to='#'>
                            Krasofkalar
                        </Link>
                    </option>
                    <option value="Makaslar">
                        <Link to='#'>
                            Makaslar
                        </Link>
                    </option>
                    <option value="Fudbolkalar">
                        <Link to='#'>
                            Fudbolkalar
                        </Link>
                    </option>
                    <option value="Shimlar">
                        <Link to='#'>
                            Shimlar
                        </Link>
                    </option>
                    <option value="Tapichkalar">
                        <Link to='#'>
                            Tapichkalar
                        </Link>
                    </option>
                    <option value="Naskilar">
                        <Link to='#'>
                            Naskilar
                        </Link>
                    </option>
                    <option value="Sport Kiyimlar">
                        <Link to='#'>
                            Sport Kiyimlar
                        </Link>
                    </option>
                </select> */}
                <FormControl className='fromControl'>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Toifalar
                    </InputLabel>
                        <NativeSelect
                            defaultValue={10}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                        }}>
                        <option value={10}>
                            <Link to='Barcha kategoriyalar'>
                                Barcha kategoriyalar
                            </Link>
                        </option>
                        <option value={20}>
                            <Link to='Ayollar kiyimlari'>
                                Ayollar kiyimlari
                            </Link>
                        </option>
                        <option value={30}>
                            <Link to='Ayollar Oyoq kiyimlari'>
                                Ayollar Oyoq kiyimlari
                            </Link>
                        </option>
                        <option value={40}>
                            <Link to='Erkaklar Kiyimi'>
                                Erkaklar Kiyimi
                            </Link>
                        </option>
                        <option value={50}>
                            <Link to='Ko`ylaklar'>
                                Ko`ylaklar
                            </Link>
                        </option>
                        <option value={60}>
                            <Link to='Krasofkalar'>
                                Krasofkalar
                            </Link>
                        </option>
                        <option value={70}>
                            <Link to='Makaslar'>
                                Makaslar
                            </Link>
                        </option>
                        <option value={80}>
                            <Link to='Fudbolkalar'>
                                Fudbolkalar
                            </Link>
                        </option>
                        <option value={90}>
                            <Link to='Shimlar'>
                                Shimlar
                            </Link>
                        </option>
                        <option value={100}>
                            <Link to='Tapichkalar'>
                                Tapichkalar
                            </Link>
                        </option>
                        <option value={110}>
                            <Link to='../../Page/NaskiPage/NaskiPage.js'>
                                Naskilar
                            </Link>
                        </option>
                        <option value={120}>
                            <Link to='Sport Kiyimlar'>
                                Sport Kiyimlar <GiClothes className='linkIcon' />
                            </Link>
                        </option>
                    
                    </NativeSelect>
                </FormControl>
                <div className="divMain">
                    <Link to='#' className='dicLink flex'>
                        <GiRunningShoe className='linkIcon' /> Krasofkalar
                    </Link>
                </div>
                <div className="divMain">
                    <Link to='#' className='dicLink flex'>
                        <GiTShirt className='linkIcon' /> Fudbolkalar
                    </Link>
                </div>
                <div className="divMain">
                    <Link to='#' className='dicLink flex'>
                        <GiArmoredPants className='linkIcon' /> Shimlar
                    </Link>
                </div>
                <div className="divMain">
                    <Link to='#' className='dicLink flex'>
                        <GiFootTrip className='linkIcon' /> Ayollar Oyoq Kiyimi
                    </Link>
                </div>
                <div className="divMain">
                    <Link to='#' className='dicLink flex'>
                        <GiClothes className='linkIcon' /> Erkaklar Kiyimi
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </BrowserRouter>
)
}

export default Navbar
