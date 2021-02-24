import React from 'react';
import Card from './Card';


function Content({database, setBought}){
    return(
        <div className='content'>
            {database.map(product => {
                return(
                   <Card
                       key={product.id}
                       product={product}
                       setBought={setBought}
                   />
                )
            })
            }
        </div>
    )
}








export default Content