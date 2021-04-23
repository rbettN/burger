/**
 * Component: Summary of the order (press Order Now)
 * This component is imported in the BurgerBuilder.
 */
import React, { Component } from 'react';
import Auxiliary from '../../../highordercomponents/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    render () {
        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(ingredientKey => {
            return (
                <li key={ingredientKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {this.props.ingredients[ingredientKey]}
                </li>);
        });
        return (
            <Auxiliary>
                <h3>Your Order</h3>
                <p>A burger with the ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)} CAD</strong></p>
                <p>Continue to Checkout?</p>
                <Button buttonType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button buttonType="Danger" clicked={this.props.purchaseContinued}>Continue</Button>
            </Auxiliary>
        );
    }
}

export default OrderSummary;