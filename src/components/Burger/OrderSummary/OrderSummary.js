import React from 'react';
import Auxiliary from '../../../highordercomponents/Auxiliary';


const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return (
                <li key={ingredientKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
                </li>);
        });
            
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A burger with the ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <button>Cancel</button>
            <button>Continue</button>
        </Auxiliary>
    );
};

export default orderSummary;