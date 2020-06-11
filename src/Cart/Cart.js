import React from "react";
import Summary from '../Summary/Summary';
import Total from '../Total/Total'

function Cart(props) {
    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
    );  
    
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary selected={props.selected} USCurrencyFormat={props.USCurrencyFormat} />
            <Total total={total} USCurrencyFormat={props.USCurrencyFormat} />            
        </section>
    );  


  
      
}

export default Cart;