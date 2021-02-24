import React from 'react';
import Logo from './Logo/Logo';
import Menu from './Menu';
import Checkout from './Checkout/Checkout';


function Header({database}) {

    return(

        <div className='header'>
            <Logo />
            <Menu />
            <Checkout database={database}/>
            <a href='#' className='logout'>выход</a>
        </div>
    )




}


export default Header