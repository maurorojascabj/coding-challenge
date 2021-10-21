import React, {useState, useEffect, useRef} from 'react'

import classes from './ItemAddPoint.module.css'
import IconMoney from '../../../../images/icons/coin.svg'
import DataPoint from './DataPoint'

import {CaretDownFill} from 'react-bootstrap-icons';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ItemAddPoint = ({currentPoints, setCurrentPoints, pointUrl, baseToken}) => {

    const MySwal = withReactContent(Swal)

	function HideAddPoint(ref){
		useEffect(() => {
			function handleClickOutside(event) {
				if (ref.current && !ref.current.contains(event.target)) {
					setOpenAddPoints(false)
				}
			}
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [ref]);
	}

	const [openAddPoints, setOpenAddPoints] = useState(false)

	const wrapperRef = useRef(null);
	HideAddPoint(wrapperRef)

	const showAddPoints = (state) => {
			setOpenAddPoints(state)
	}

	/* Post method */
	const setPoint = async(additionalPoint) => {
		try {
			const response = await fetch(pointUrl, {
				method: 'POST',
				body: JSON.stringify({
					"amount": additionalPoint
				}),
				headers: new Headers({
					'Authorization': `Bearer ${baseToken}`,
					'Content-Type': 'application/json',
				})
			})
			const data = await response.json()
			setCurrentPoints(data['New Points'])
			MySwal.fire({
				position: 'center',
				icon: 'success',
				title: 'Points added',
				showConfirmButton: false,
				timer: 1500
			  })
		} catch (error) {
			console.log('Error: ', error)
		}
	}

	return (

		<div className={classes.containerDropdown}>
			<button className={classes.btnDropdown} onClick={()=>showAddPoints(!openAddPoints)}>Add points<CaretDownFill/></button>
			<div className={classes.contentDropdown}>
				{
					DataPoint.map( item => 
						<button key={item.id} onClick={()=>setPoint(item.amount)}>
							<img src={IconMoney} alt="Icon Money" />
							<span>{item.amount}</span>
						</button>
				)
				}
			</div>
		</div>

		// <div className={classes.containerItem}>
		// 	<div className={classes.containerDataPoint} ref={wrapperRef}>
		// 		<button id="titleAddPoints" onClick={()=>showAddPoints(!openAddPoints)}>Add points<CaretDownFill/></button>
		// 		{
		// 			openAddPoints && (
		// 				<ul>
		// 					{
		// 						DataPoint.map( item => 
		// 							<li key={item.id} onClick={()=>setPoint(item.amount, !openAddPoints)}>
		// 								<img src={IconMoney} alt="Icon Money" />
		// 								<span>{item.amount}</span>
		// 							</li>
		// 						)
		// 					}
		// 				</ul>
		// 			)
		// 		}
		// 	</div>
		// </div>
	)
}

export default ItemAddPoint
