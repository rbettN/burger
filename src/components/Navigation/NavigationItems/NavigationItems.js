/**
 * This component set the properties of both the "BurgerBuilder" and the "Checkout"
 * menu option in the toolbar.
 * This component is imported in the Layout.
 **/

import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.isAuthenticated ? 
            <NavigationItem link="/orders">Orders</NavigationItem>
            : null}
        {!props.isAuthenticated 
            ? <NavigationItem link="/auth">Authenticate</NavigationItem>
            : <NavigationItem link="/logout">Log out</NavigationItem>}
    </ul>
);

export default navigationItems;