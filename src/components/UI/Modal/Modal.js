/**
 * This component is userd by Order Summary after a user clicks on "Order Now"
 * This component is imported in the BurgerBuilder.
 */

import React from 'react';
import classes from './Modal.css';
import Auxiliary from '../../../highordercomponents/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Auxiliary>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Auxiliary>
);

export default modal;