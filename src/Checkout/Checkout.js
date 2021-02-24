import React from 'react';
import icon from './shopping-cart-solid.svg'

function Checkout({database}) {

        const bought = database.filter(product => {
            return product.bought;
        });

    return(
        <div className='checkout'>
            <img src={icon} alt='icon'/>
            <span className='counter'>
               {bought.length}
            </span>

        </div>
    );
}



    export default Checkout
