import React from 'react'
import { Outlet } from 'react-router-dom'

function MainHeader() {
    return (
        <div>
            <Outlet /> {/*//the Outlet component is used to render child routes in a nested routing setup.*/}
        </div>
    )
}

export default MainHeader