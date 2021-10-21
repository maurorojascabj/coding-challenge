import React, { useState, useEffect, useRef } from 'react'

import classes from './Category.module.css'

import DataFilter from './DataFilter'

const Category = ({getProducts, products, setProducts, nameCategoryFilter, setNameCategoryFilter}) => {

    const [titleFilter, setTitleFilter] = useState('Filter:')
    const [openDropdownFilter, setOpenDropdownFilter] = useState(false)

    const openList = (state) => {
        setOpenDropdownFilter(state)
    }

    function orderProducts(value){
        switch (value) {
          case 'Highest price':
            return setProducts(products.sort(((a,b) => b.cost - a.cost)))
          case 'Lowest price':
            return setProducts(products.sort(((a,b) => a.cost - b.cost)))
          default:
            getProducts()
            return setProducts(products)
        }
      }

    const selectItem = (title) => {
        orderProducts(title)
        setTitleFilter(title)
        setOpenDropdownFilter(false)
        setNameCategoryFilter(title)
    }

    function HideAddPoint(ref){
		useEffect(() => {
			function handleClickOutside(event) {
				if (ref.current && !ref.current.contains(event.target)) {
					setOpenDropdownFilter(false)
				}
			}
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [ref]);
	}
    const wrapperRef = useRef(null);
    HideAddPoint(wrapperRef)

    return (
        <div className={classes.containerFilter} ref={wrapperRef}>
            <div className={classes.dropdown}>
                <button className={classes.btnSelect} onClick={()=>openList(!openDropdownFilter)}>
                    {titleFilter}
                </button>
                {
                    openDropdownFilter && (
                        <ul className={classes.dropdownFilter}>
                            {
                                DataFilter.map( item => 
                                    <li 
                                        key={item.id}
                                        className={
                                            item.id === 1 ? classes.title : classes.active
                                        }
                                        onClick={()=>selectItem(item.title, item.id)}
                                    >
                                        {item.title}
                                    </li>
                                )
                            }
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

export default Category
