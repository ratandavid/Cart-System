import React from 'react'
import "./MissingcartItems.css"
import { Link } from 'react-router-dom'
function MissingcartItems() {
    return (
        <div className='container mt-3'>

            <div className='carterror'>

                <img
                    className='carterror_img'
                    src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                    alt="errormsg cart img"
                />

                <div className='carterror_msg'>
                    <h5>Missing Cart items?</h5>
                    <button className="home_btn" type="button">
                        <Link to="/" >
                            Back To Products
                        </Link>

                    </button>
                </div>
            </div>
        </div>
    )
}

export default MissingcartItems