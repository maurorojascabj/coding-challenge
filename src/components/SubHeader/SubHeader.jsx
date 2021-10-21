import React from 'react'

import classes from '../SubHeader/SubHeader.module.css'

import Header_Image from '../../images/header-x2.png'


const SubHeader  = () => {
	return (
		<div className={classes.containerSubHeader}>
			<img alt="Imagen sub header" src={Header_Image} className={classes.imagenHeader}/>
			<h1>Electronics</h1>
		</div>
	)
}

export default SubHeader
