/**
 * This is the Burger icon component of the React burger application.
 * This component is imported in the SideDrawer and in the Toolbar
 **/

import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>

);

export default logo;