/**
 * This Input.js component is used for the Contact Form in the checkout process.
 * It is imported in the ContactData.js.
 */
import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={classes.InputElement} 
                {...props.elementConfig}
                value={props.value}/>;
            break;
        default:
            inputElement = <input
                className={classes.InputElement} 
                {...props.elementConfig}
                value={props.value} />;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;