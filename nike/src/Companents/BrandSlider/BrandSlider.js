import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import { Item } from './yourItem';

const BrandSlider = () => {
return (
    <div>
        <Carousel>
            <Item />
            <Item />
            <Item />
            <Item />
        </Carousel>,
    </div>
)
}

export default BrandSlider
