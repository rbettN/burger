/**
 * This the Layout component of the React burger application
 */

import React from 'react';
import Aux from '../../highordercomponents/Auxiliary'
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;