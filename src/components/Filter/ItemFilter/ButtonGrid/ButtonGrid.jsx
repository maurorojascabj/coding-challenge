import React from 'react'

import classes from './ButtonGrid.module.css'
import { List, Grid3x3GapFill} from 'react-bootstrap-icons';


const ButtonGrid = ({disposition, setDisposition}) => {

    return (
        <div className={classes.containerBtnFilter}>
            <button className={classes.btnFilter} onClick={()=>setDisposition('row')}>
                <List size={30} color="grey"/>
            </button>
            <button className={classes.btnFilter} onClick={()=>setDisposition('grid')}>
                <Grid3x3GapFill size={30} color="grey"/>
            </button>
        </div>
    )
}

export default ButtonGrid
