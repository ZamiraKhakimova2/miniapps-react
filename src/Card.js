import React from 'react';
import Button from './Button'



function Card({product, setBought}) {
    const { name, id, image, rating, price, bought } = product;
    return(

        <div className='card'>
            <div className='card-image'>
                <img src={image} alt='image'/>
            </div>
            <div className='card-info'>
                <div className='card-name'>{name}</div>
                <div className='card-rating'>{rating}</div>
                <div className='card-price'>{price}</div>
                <Button   id={id} bought={bought} setBought={setBought}/>
            </div>
        </div>
    );

}
export default Card