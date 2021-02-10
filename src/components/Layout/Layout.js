/**
 * This the Layout component of the React burger application
 */

import React from 'react';
import Aux from '../../highordercomponents/Auxiliary'

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;