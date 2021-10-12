import React from 'react'

import ImageHeader from '../images/aerolab-logo.svg'

const Header = () => {

    const addPoint = () => {
        return
    }

    return (
        <div className="header">
            <img src={ImageHeader} alt=""/>
            <div className="buttonsHeader">
                <button className="btn">
                    <span>Listado</span>
                </button>
                <button onClick={addPoint} className="btn">
                    <span>Agregar puntos</span>
                    {/* <Icon.PlusCircle color={"royalblue"} size={30}/> */}
                </button>
                <button className="btn">
                    <span>User Name</span>
                </button>
            </div>

        </div>
    )
}

export default Header
