import React from 'react'

import classes from './ItemShopList.module.css'

import iconMoney from '../../../../images/icons/coin.svg'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ItemShopList = ({shopList, currentPoints, setCurrentPoints, redeemUrl, baseToken,}) => {

    const MySwal = withReactContent(Swal)

    const addRedeem = async(product) => {
        try {
            const response = await fetch(redeemUrl, {
                method: 'POST',
                body: JSON.stringify({
                    "productId": product.productId
                }),
                headers: new Headers({
                    'Authorization': `Bearer ${baseToken}`,
                    'Content-Type': 'application/json',
                })
            })
            const data = await response.json()
            setCurrentPoints(currentPoints - product.cost)
            MySwal.fire({
                position: 'center',
                icon: 'success',
                title: 'Product exchanged',
                showConfirmButton: false,
                timer: 1500
            })
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    return (
        <div className={classes.containerShopList}>
            <h1>My Shop List</h1>
            {
                (shopList.length !== 0) ?
                    <div className={classes.contentShopList}>
                        <ul>
                            {
                                shopList.map( (item, index) => 
                                    <li key={index}>
                                        <div className={classes.detailProduct}>
                                            <div className={classes.containerImage}>
                                                <img src={item.image.url} alt="" />
                                            </div>
                                            <div className={classes.containerInfoProduct}>
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
                                            </div>
                                        </div>
                                        <button 
                                            className={classes.remeewButton}
                                            onClick={()=>addRedeem(item)}
                                        >
                                            Redeem
                                        </button>
                                    </li>  
                                )
                            }
                        </ul>
                    </div>
                : 
                    <div className={classes.containerMessage}>
                        <h3>Empty shopping list</h3>
                    </div>
            }
        </div>
    )
}

export default ItemShopList
