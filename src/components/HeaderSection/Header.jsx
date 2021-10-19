import React, { useState, useRef, useEffect } from 'react'

import ItemAddPoint from './Routes/AddPoint/ItemAddPoint'
import ImageHeader from '../../images/aerolab-logo.svg'

import classes from '../HeaderSection/Header.module.css'

import {
    Link
} from 'react-router-dom'

const Header = () => {
    return (
        <div className={classes.containerHeader}>
            <Link to="/" className={classes.containerImageHeader}>
                <img src={ImageHeader} alt=""/>
            </Link>
            <div className={classes.header}>
                <ItemAddPoint/>
                <Link to="/shops" className={classes.link}>
                    My shops
                </Link>
                <Link to="/remeew" className={classes.link}>
                    My remeew
                </Link>
            </div>
        </div>
    )
}

export default Header
