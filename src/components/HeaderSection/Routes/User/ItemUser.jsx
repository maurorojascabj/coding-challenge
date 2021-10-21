import React from 'react'

import classes from './ItemUser.module.css'

import iconImage from '../../../../images/icons/coin.svg'

const ItemUser = ({user, currentPoints}) => {
    return (
        <div className={classes.containerUser}>
            <span>My points:</span>
            <div className={classes.containerPoints}>
                <span>{currentPoints}</span>
                <img src={iconImage} alt=""/>
            </div>
        </div>
    )
}

export default ItemUser
