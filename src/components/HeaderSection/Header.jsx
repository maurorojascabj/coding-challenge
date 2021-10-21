import React, { useState, useEffect, useRef } from 'react'

import ItemAddPoint from './Routes/AddPoint/ItemAddPoint'
import ItemUser from './Routes/User/ItemUser'
import ImageHeader from '../../images/aerolab-logo.svg'

import {PersonCircle ,List, XLg} from 'react-bootstrap-icons';

import classes from '../HeaderSection/Header.module.css'

import {
    Link
} from 'react-router-dom'

const Header = ({user, pointUrl, baseToken, currentPoints, setCurrentPoints}) => {

    /* */
    function getWidthWindow() {
        const { innerWidth: width } = window;
        return width;
    }
    const [widthWindow, setWidthWindow] = useState(getWidthWindow());
    useEffect(() => {
        function handleResize() {
            setWidthWindow(getWidthWindow());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    /* */

    const wrapperRef = useRef(null);
    
    function openNav(ref) {
        ref.current.style.width = '40%';
    }
    function closeNav(ref) {
       ref.current.style.width = 0;
    }
    
    function handlerWindow(ref){
        if (widthWindow >= 769 && wrapperRef.current !== null){
            wrapperRef.current.style.width = '60%';
        }else{
            if (widthWindow < 769 && wrapperRef.current !== null){
                wrapperRef.current.style.width = 0;
            }
        }
        if(wrapperRef.current == null){
            return
        }
    }
    handlerWindow(wrapperRef)

    return (
        <div className={classes.containerHeader}>
            <Link to="/" className={classes.containerImageHeader}>
                <img src={ImageHeader} alt=""/>
            </Link>
            <div className={classes.header}>
                <ItemUser user={user} currentPoints={currentPoints}/>
                <button className={classes.btnMenuResponsive} onClick={()=>openNav(wrapperRef)}>
                    <List size={30} color="black"/>
                </button>
                <div className={classes.optionsHeader} ref={wrapperRef}>
                    <div className={classes.contentOptionsHeader}>
                        <button className={classes.closeBtn} onClick={()=>closeNav(wrapperRef)}>
                            <XLg size={20} color="black"/>
                        </button>
                        <div className={classes.detailUser}>
                            <PersonCircle size={30} color="black"/>
                            <span>{user.name}</span>
                        </div>
                        <ItemAddPoint 
                            currentPoints={currentPoints}
                            setCurrentPoints={setCurrentPoints}
                            pointUrl={pointUrl}
                            baseToken={baseToken}
                        />
                        <Link to="/shops" className={classes.link}>
                            <button>My shop list</button>
                        </Link>
                        <Link to="/redeem" className={classes.link}>
                            <button>My exchange</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
