import React from 'react'

import classes from '../Card/Card.module.css'

import iconMoney from '../../images/icons/coin.svg'
import buyWhite from '../../images/icons/buy-white.svg'
import buyBlue from '../../images/icons/buy-blue.svg'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Card = ({productId, imageUrl, category, name, cost, currentPoints, setCurrentPoints, disposition, user,
    redeemUrl, baseToken, shopList, setShopList}) => {

    const MySwal = withReactContent(Swal)

    const addRedeem = async() => {
        try {
            const response = await fetch(redeemUrl, {
                method: 'POST',
                body: JSON.stringify({
                    "productId": productId
                }),
                headers: new Headers({
                    'Authorization': `Bearer ${baseToken}`,
                    'Content-Type': 'application/json',
                })
            })
            const data = await response.json()
            setCurrentPoints(currentPoints - cost)
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

    const addShopList = (productId, imageUrl, category, name, cost) => {
        const productSelected = {
            productId: productId, 
            image: imageUrl, 
            category: category,
            name: name,
            cost: cost
        }
        setShopList([
                ...shopList,
                productSelected
        ])
        console.log('Desde card: ', shopList)
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product added to the list',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div className={classes.containerCard}>
            <div className={classes.content}>
                <div className={
                    currentPoints < cost ? classes.containerInfo : classes.containerBag
                }>
                    {
                        currentPoints < cost &&
                            <div className={classes.info}>
                                <span className={classes.titleInfo}>Need you: {cost - currentPoints}</span>
                                <img className={classes.imgInfo} src={iconMoney} alt="" />
                            </div>
                    }
                    <img 
                        id={classes.iconBagBlue}
                        className={classes.bagShop}
                        src={buyBlue}
                        alt="image that represents the addition of the product to the list of possible exchanges"
                    />
                </div>
                <img src={imageUrl.url} alt="Product image"/>
            </div>
            <div className={classes.containerLayerOfShop}>
                <div className={classes.layerOfShop}>
                    <div
                        className={currentPoints < cost ? classes.hideButtons : classes.containerBag}
                        onClick={()=>addShopList(productId, imageUrl, category, name, cost)}
                    >
                        <img
                            id={classes.iconBagWhite}
                            className={classes.bagShop}
                            src={buyWhite}
                            alt="image that represents the addition of the product to the list of possible exchanges"
                        />
                    </div>
                    <div className={classes.containerShopOptions}>
                        <div className={classes.priceProduct}>
                            <img src={iconMoney} alt="" />
                            <span className={classes.costProduct}>{cost}</span>
                        </div>
                        <button 
                            className={
                                currentPoints < cost ? classes.hideButtons : classes.remeewButton
                            }
                            onClick={()=>addRedeem()}
                        >
                            Redeem now
                        </button>
                    </div>
                </div>
            </div>
            <div className={classes.horizontalLine}/>
            <div className={classes.detailProduct}>
                <span className={classes.titleCategoryProduct}>
                    {category}
                </span>
                <span className={classes.titleNameProduct}>
                    {name}
                </span>
            </div>
        </div>
    )
}

export default Card
