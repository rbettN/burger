/**
 * This base NavigationItem component serves for the "Burger Builder" and the "Checkout"
 * menu options in the toolbar.
 * This component is imported in the NavigationItems.
 **/

import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classes.ative}>{props.children}</NavLink>
    </li>
);

export default navigationItem;