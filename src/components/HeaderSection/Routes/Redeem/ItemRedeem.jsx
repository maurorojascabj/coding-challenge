import React, { useEffect, useState } from 'react'

import classes from './ItemRedeem.module.css'

import iconMoney from '../../../../images/icons/coin.svg'

const ItemRemeew = ({historyUrl, baseToken}) => {

    const [history, setHistory] = useState([])

    useEffect(()=>{
        getHistory()
    }, [])


    const getHistory = async() => {
        try {
            const response = await fetch(historyUrl, {
                method: 'GET',
                headers: new Headers({
                    'Authorization': `Bearer ${baseToken}`, 
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            })
            const data = await response.json()
            setHistory(data)
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    return (
        <div className={classes.containerRedeem}>
            <h1>My Exchanges</h1>
            <div className={classes.contentRedeem}>
                <ul>
                    {
                        history.map( (item,index) => 
                            <li key={index}>
                                <div className={classes.containerImage}>
                                    <img src={item.img.url} alt="" />
                                </div>
                                <div className={classes.containerNameProduct}>
                                    <span>
                                        {item.name}
                                    </span>
                                </div>
                                <div className={classes.containerCostProduct}>
                                    <img src={iconMoney} alt="" />
                                    <span>
                                        {item.cost}
                                    </span>
                                </div>
                            </li>                     
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default ItemRemeew
