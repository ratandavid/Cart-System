import React from 'react'
import MissingcartItems from '../Components/Errormsg/MissingcartItems'
import Viewproduct from './Viewproduct'
// import { Cart } from '../store'
import { useSelector } from 'react-redux'
import { doItemsExist } from '../Feature/Cartlist/Cartlistslice'

function Viewcart() {
    const itemExists = useSelector(doItemsExist)
    return (
        <>
            {
                itemExists ? <Viewproduct /> : <MissingcartItems />
                // Cart.doItemsExists() ? <Viewproduct /> : <MissingcartItems />
            }
        </>
    )
}

export default Viewcart