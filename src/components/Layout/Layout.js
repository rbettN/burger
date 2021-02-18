/**
 * This the Layout component of the React burger application
 */

import React from 'react';
import Aux from '../../highordercomponents/Auxiliary'
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <SideDrawer/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;