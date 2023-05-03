import React from 'react'
import {AiOutlineHeart, AiFillEye} from 'react-icons/ai'
import {SlBasket} from 'react-icons/sl'
import {BiPurchaseTag} from 'react-icons/bi'
import flag1 from '../../src/Assent/flagUzbekistan.png'
import './ProducstCss.css'
import Products from '.././DataBase/Products'

const ProductNaski = () => {
return (
    <div className='container'>
        <div className="updateCards flex productsCss">
            {Products.map((products) => (
                <div className="updateCard productsCardCss">
                    <img src={products.image} alt={products.name} className='headerImg' />
                    <AiFillEye className='iconn'/>
                    <h5 className='updateCardName'>{products.name}</h5>
                    {/* <p className='updateCardInfo'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                    <p className='updateCardSize'>Rasmer : {products.size}</p>
                    <p className='updateCardQuality'>{products.quality}</p>
                    <span className='updateCardPrice'>{products.price} <sup>SO`M</sup></span>
                    <AiOutlineHeart className='icon'/> <p className='updateCardCounter'>{products.like}</p>
                    <img src={flag1} alt="" className='updateCardFlag'/>
                <div className="btnGroup flex">
                    <button className='flex btnBuy allBtn'>Harid Qilish <BiPurchaseTag className='icon'/> </button>
                    <button className='flex btnSell allBtn'>Savatga <SlBasket className='icon'/></button>
                </div>
            </div>
            ))}
        </div>
    </div>
)
}

export default ProductNaski
