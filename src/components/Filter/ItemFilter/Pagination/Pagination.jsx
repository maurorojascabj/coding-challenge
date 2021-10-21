import React from 'react'

import classes from './Pagination.module.css'
import iconLeft from '../../../../images/icons/arrow-left.svg'
import iconRight from '../../../../images/icons/arrow-right.svg'


const Pagination = ({paginatorLeft, setPaginatorLeft, paginatorRight, setPaginatorRight, amountProducts}) => {

    const handlerPaginatorLeft = (left, right) => {
        if(left !== 0){
            let range = right - left
            left = left - range
            setPaginatorLeft(left)
            right = right - range
            setPaginatorRight(right)
        }
        return
    }
    const handlerPaginatorRight = (left, right) => {
        if(right <= amountProducts){
            let range = right - left
            left = left + range
            setPaginatorLeft(left)
            right = right + range
            setPaginatorRight(right)
        }
        return
    }

    return (
        <div className={classes.containerPagination}>
                <img
                    src={iconLeft}
                    alt=""
                    onClick={()=>handlerPaginatorLeft(paginatorLeft, paginatorRight, setPaginatorLeft, setPaginatorRight)} />
                <img
                    src={iconRight}
                    alt=""
                    onClick={()=>handlerPaginatorRight(paginatorLeft, paginatorRight, setPaginatorLeft, setPaginatorRight)}
                />
        </div>
    )
}

export default Pagination
