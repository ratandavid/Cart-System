import React from 'react'
import Cartcard from '../Components/Cartcard/Cartcard'
import Cartamt from '../Components/Cartamount/Cartamt'
import { Cart } from '../store'
import { useSelector } from 'react-redux'
import { getItems, doItemsExist } from '../Feature/Cartlist/Cartlistslice'
function Viewproduct() {
    const items = useSelector(getItems);
    const itemexists = useSelector(doItemsExist);
    return (
        <div className='container mt-3'>
            <div className='row just-space-between'>
                <div className='col-lg-7 col-7'>
                    <div className='cartproduct bgwhite'>
                        {
                            itemexists && items.map((item) => {
                                return (
                                    <Cartcard key={item.id} product={item} />
                                )
                            })
                            // Cart.doItemsExists() && Cart.get().map((item) => {
                            //     return (
                            //         <Cartcard key={item.id} product={item} />
                            //     )
                            // })
                        }
                    </div>
                </div>
                <div className='col-lg-5 col-5'>
                    <div className='cartprice bgwhite'>
                        <Cartamt item={items} />
                        {/* <Cartamt items={Cart.get()} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewproduct