import React from 'react'
import './Cartamt.css'
// import { Cart } from '../../store'
import { useSelector } from 'react-redux';
import { getItems } from '../../Feature/Cartlist/Cartlistslice'
function Cartamt() {
    let sum = 0;
    let selecteditem = useSelector(getItems)
    let discountprice = 0;
    let totaldiscount = 0;
    let platform_fee = 0;

    // let items = Cart.get()
    for (let i = 0; i < selecteditem.length; i++) {
        // sum += Number(selecteditem[i].totalPrice)
        const itemPrice = Number(selecteditem[i].dis_price);
        const itemDiscount = Number(selecteditem[i].discount);

        discountprice += itemPrice;
        const discountAmount = Math.ceil(itemPrice * itemDiscount / 100);
        totaldiscount += discountAmount;
        sum = discountprice - totaldiscount;

        const totalPrice = Number(selecteditem[i].totalPrice);
        platform_fee += totalPrice - (itemPrice - discountAmount);
    }

    platform_fee = Math.abs(platform_fee);

    const itemCount = selecteditem.length;
    let itmCount = '';
    if (itemCount <= 1) {
        itmCount = `${itemCount} item`;
    }
    else {
        itmCount = `${itemCount} items`;
    }

    return (
        <div className='cartamt'>
            <h3>Price Detail </h3>
            <div className='cartamt_detail'>
                <ul>
                    <li>
                        <p>Price Item ({itmCount})</p>
                        <p>{discountprice}</p>
                    </li>
                    {
                        // selecteditem.map((item) => {
                        //     // console.log('cart item', item.cart_item.price)
                        //     return (
                        //         <li key={`cart_item_${item.cart_item.id}`}>
                        //             <p>Price Item</p> <p>{item.totalPrice}</p>
                        //         </li>
                        //     )
                        // })

                        // Cart.get().map((item) => {
                        //     console.log('cart item', item)
                        //     return (
                        //         <li key={`cart_item_${item.id}`}>
                        //             <p>Price Item</p> <p>{item.price}</p>
                        //         </li>
                        //     )
                        // })
                    }
                    <li>
                        <p>Discount </p> <p className='free'>-{totaldiscount}</p>
                    </li>
                    <li>
                        <p>Platform fee</p><p>{platform_fee}</p>
                    </li>
                    <li>
                        <p>Delivery Charges</p> <p className='free'>Free</p>
                    </li>
                </ul>
                <div className='Totalamt just-space-between'>
                    <p><b>Total Amount</b></p>

                    {
                        <h4>{sum}</h4>
                    }

                </div>
            </div>
        </div >
    )
}

export default Cartamt