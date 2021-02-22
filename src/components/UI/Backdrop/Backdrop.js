/**
 * This Backdrop component is imported in both the SideDrawer and the Modal components.
 **/

import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null

);

export default backdrop;