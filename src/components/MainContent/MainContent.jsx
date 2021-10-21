import React from 'react'

import classes from '../MainContent/MainContent.module.css'

import Card from '../Card/Card.jsx'


const MainContent = ({data, paginatorLeft, paginatorRight, currentPoints, setCurrentPoints, disposition, user, shopList, setShopList, redeemUrl, baseToken}) => {
    const newArray = data.slice(paginatorLeft,paginatorRight)
    return (
        <div className={classes.containerGrid}>
            {
                newArray.map( item =>
                    <Card 
                        key={item._id}
                        productId={item._id}
                        imageUrl={item.img}
                        cost={item.cost}
                        category={item.category}
                        name={item.name}
                        currentPoints={currentPoints}
                        setCurrentPoints={setCurrentPoints}
                        disposition={disposition}
                        redeemUrl={redeemUrl}
                        shopList={shopList}
                        setShopList={setShopList}
                        user={user}
                        baseToken={baseToken}
                    /> 
                )
            }
        </div>
    )
}

export default MainContent
