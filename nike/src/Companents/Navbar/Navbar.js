import {React, useState, useEffect} from 'react'
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

    // // navbar windowda ishlashi
    // const [navbar, setNavbar] = useState(false);

    // const changeBackground = () => {
    //     if(window.scrollY >= 80){
    //         setNavbar(true)
    //     }else{
    //         setNavbar(false)
    //     }
    // }

    // window.addEventListener('scroll', changeBackground)
    // {navbar ? 'navbar activeNav' : 'navbar'}

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
                            defaultValue={Link.value}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                        }}>
                        <option value={'/BarchaKategoriyalar'}>
                            <Link to='/barchaKategoriyalar'>
                                Barcha kategoriyalar
                            </Link>
                        </option>
                        <option value={'/ayollar-kiyimi'}>
                            <Link to='/ayollar-kiyimi'>
                                Ayollar kiyimlari
                            </Link>
                        </option>
                        <option value={'/AyollarOyoqKiyimlari'}>
                            <Link to='/ayollar-oyoq-kiyimlari'>
                                Ayollar Oyoq kiyimlari
                            </Link>
                        </option>
                        <option value={'/ErkaklarKiyimi'}>
                            <Link to='/erkaklar-kiyimi'>
                                Erkaklar Kiyimi
                            </Link>
                        </option>
                        <option value={'/Ko`ylaklar'}>
                            <Link to='/ko`ylaklar'>
                                Ko`ylaklar
                            </Link>
                        </option>
                        <option value={'/krasofka'}>
                            <Link to='/krasofka'>
                                Krasofkalar
                            </Link>
                        </option>
                        <option value={'/Makaslar'}>
                            <Link to='/makaslar'>
                                Makaslar
                            </Link>
                        </option>
                        <option value={'/Fudbolkalar'}>
                            <Link to='/fudbolkalar'>
                                Fudbolkalar
                            </Link>
                        </option>
                        <option value={'/Shimlar'}>
                            <Link to='/shimlar'>
                                Shimlar
                            </Link>
                        </option>
                        <option value={'/Tapichkalar'}>
                            <Link to='/tapichkalar'>
                                Tapichkalar
                            </Link>
                        </option>
                        <option value={'/naski'}>
                            <Link to='/naski'>
                                Naskilar
                            </Link>
                        </option>
                        <option value={'/SportKiyimlar'}>
                            <Link to='/sport-kiyimlar'>
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
