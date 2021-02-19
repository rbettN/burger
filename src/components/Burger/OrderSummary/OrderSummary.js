/**
 * Component: Summary of the order (press Order Now)
 * This component is imported in the BurgerBuilder.
 */

import React from 'react';
import Auxiliary from '../../../highordercomponents/Auxiliary';
import Button from '../../UI/Button/Button';


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
            <p><strong>Total Price: ${props.price.toFixed(2)} CAD</strong></p>
            <p>Continue to Checkout?</p>
            <Button buttonType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button buttonType="Danger" clicked={props.purchaseContinued}>Continue</Button>
        </Auxiliary>
    );
};

export default orderSummary;