/**
 * This base NavigationItem component serves for the "Burger Builder" and the "Checkout"
 * menu options in the toolbar.
 * This component is imported in the NavigationItems.
 **/

import React from 'react';
import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <a 
            href={props.link}
            className={props.active ? classes.active : null}>{props.children}</a>
    </li>
);

export default navigationItem;