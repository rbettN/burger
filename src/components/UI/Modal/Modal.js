/**
 * This component is userd by Order Summary after a user clicks on "Order Now"
 * This component is imported in the BurgerBuilder.
 */
import React, { Component } from 'react';
import classes from './Modal.css';
import Auxiliary from '../../../highordercomponents/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    /**
     * This component life cyle check improves performance.
     * This avoids the Order Summary component to update every time the
     * user uses the Build Controls to add/remove ingredients.
     */
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render () {
        return (
            <Auxiliary>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxiliary>
        );
    }
}
export default Modal;