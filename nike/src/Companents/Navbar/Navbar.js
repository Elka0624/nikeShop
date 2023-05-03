import React from 'react'
import logo from '../../Assent/logo.jpg';
import {BrowserRouter, Route, Link, Outlet} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import {AiOutlineHeart} from 'react-icons/ai';
import {SlBasket} from 'react-icons/sl'
import {ImSearch} from 'react-icons/im'
import {GiArmoredPants, GiRunningShoe, GiTShirt, GiFootTrip, GiClothes} from 'react-icons/gi'
import {FormControl, InputLabel, NativeSelect} from '@mui/material'

const Navbar = () => {
    let navigate = useNavigate();

    function handleChangeSelect(value) {
        navigate(`${value}`);;
    }

return (
        <div className='navbar'>
            <div className="container">
                <div className="searchPanel flex">
                    <div className="searchLeft flex">
                        <Link to="/" className='searchLink'>
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
                <FormControl className='fromControl'>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Toifalar
                    </InputLabel>
                        <NativeSelect
                            onChange={event => handleChangeSelect(event.target.value)}
                            defaultValue={'Barcha kategoriyalar'}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                        }}>
                        <option value={'/BarchaKategoriyalar'}>
                            <Link to='/BarchaKategoriyalar'>
                                Barcha kategoriyalar
                            </Link>
                        </option>
                        <option value={'/AyollarKiyimlari'}>
                            <Link to='/AyollarKiyimlari'>
                                Ayollar kiyimlari
                            </Link>
                        </option>
                        <option value={'/AyollarOyoqKiyimlari'}>
                            <Link to='/AyollarOyoqKiyimlari'>
                                Ayollar Oyoq kiyimlari
                            </Link>
                        </option>
                        <option value={'/ErkaklarKiyimi'}>
                            <Link to='/ErkaklarKiyimi'>
                                Erkaklar Kiyimi
                            </Link>
                        </option>
                        <option value={'/Ko`ylaklar'}>
                            <Link to='/Ko`ylaklar'>
                                Ko`ylaklar
                            </Link>
                        </option>
                        <option value={'/krasofka'}>
                            <Link to='/krasofka'>
                                Krasofkalar
                            </Link>
                        </option>
                        <option value={'/Makaslar'}>
                            <Link to='/Makaslar'>
                                Makaslar
                            </Link>
                        </option>
                        <option value={'/Fudbolkalar'}>
                            <Link to='/Fudbolkalar'>
                                Fudbolkalar
                            </Link>
                        </option>
                        <option value={'/Shimlar'}>
                            <Link to='/Shimlar'>
                                Shimlar
                            </Link>
                        </option>
                        <option value={'/Tapichkalar'}>
                            <Link to='/Tapichkalar'>
                                Tapichkalar
                            </Link>
                        </option>
                        <option value={'/naski'}>
                            <Link to='/naski'>
                                Naskilar
                            </Link>
                        </option>
                        <option value={'/SportKiyimlar'}>
                            <Link to='/SportKiyimlar'>
                                Sport Kiyimlar <GiClothes className='linkIcon' />
                            </Link>
                        </option>
                    
                    </NativeSelect>
                </FormControl>
                <div className="divMain">
                    <Link to='/krasofka' className='dicLink flex'>
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
        <Outlet />
    </div>
)
}

export default Navbar
