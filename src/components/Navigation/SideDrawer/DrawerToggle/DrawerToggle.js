/**
 * This menu component provides both the "BurgerBuilder" and the "Checkout"
 * menu option in the SideDrawe when on monbile devices.
 * This component is imported in the Toolbar.
 **/

import React from 'react';
import classes from './DrawerToggle.css';


const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default drawerToggle;