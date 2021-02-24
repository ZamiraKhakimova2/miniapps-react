import React from 'react';


function Button({  id, bought, setBought}) {
    return (
        <button className="btn" onClick={() => setBought(id)} disabled={bought}>
            {bought ? "Добавлено в корзину" : "Добавить в корзину"}
        </button>
    );
}




export default Button