/**
 * This Button component is used for both the "Cancel" and the "Continue" buttons in the 
 * Order Summary after a user clicks on the "Order Now"
 * This component is imported in the Order Summary.
 **/

import React from 'react';
import classes from './Button.css';

const button = (props) => (
    <button
        className={[classes.Button, classes[props.buttonType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
    
);

export default button;
