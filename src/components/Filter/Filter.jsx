import React from 'react'

import classes from '../Filter/Filter.module.css'
import Category from './ItemFilter/Category/Category';
import Pagination from './ItemFilter/Pagination/Pagination';
import ButtonGrid from './ItemFilter/ButtonGrid/ButtonGrid';

const Filter = ({paginatorLeft, setPaginatorLeft, paginatorRight, setPaginatorRight, amountProducts, products, setProducts,
    getProducts, nameCategoryFilter, setNameCategoryFilter, disposition, setDisposition}) => {
    return (
        <div className={classes.containerFilter}>
            <ButtonGrid
                disposition={disposition}
                setDisposition={setDisposition}
            />
            <Category
                getProducts={getProducts}
                products={products}
                setProducts={setProducts}
                nameCategoryFilter={nameCategoryFilter}
                setNameCategoryFilter={setNameCategoryFilter}
            />
            <Pagination
                paginatorLeft={paginatorLeft}
                setPaginatorLeft={setPaginatorLeft}
                paginatorRight={paginatorRight}
                setPaginatorRight={setPaginatorRight}
                amountProducts={amountProducts}
            />
        </div>
    )
}

export default Filter
