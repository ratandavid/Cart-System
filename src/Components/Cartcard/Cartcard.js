import React, { useState, useEffect } from 'react'

import './Cartcard.css'
import { useDispatch, useSelector } from 'react-redux';
import { removecart, incrementQuantity, decrementQuantity } from '../../Feature/Cartlist/Cartlistslice';
function Cartcard(props) {
  const product = props.product;
  const dispatch = useDispatch();
  const item = useSelector(state => state.cart.items.find(item => item.id === product.cart_item.id));
  const handleIncrement = () => {
    dispatch(incrementQuantity(product.cart_item.id));
  }
  const handleDecrement = () => {
    dispatch(decrementQuantity(product.cart_item.id))
  }
  const delethandler = () => {
    dispatch(removecart(product.cart_item.id))
  }




  // const [totalPrice, setTotalPrice] = useState(product.cart_item.price);
  // const [count, setCount] = useState(1);



  // useEffect(() => {
  //   setTotalPrice(product.cart_item.price * count);
  // }, [count, product.cart_item.price]);

  // const increament = () => {
  //   if (count < 5) {
  //     setCount(count + 1);

  //   }
  //   else {
  //     setCount(5)
  //     alert('sorry for each items only 5')
  //   }
  // }
  // const decreament = () => {
  //   if (count === 1) {
  //     setCount(1);

  //   }
  //   else {
  //     setCount(count - 1);

  //   }
  // }




  return (
    <>
      <div className='cart_card'>
        <div className='card_img'>
          <img src={product.cart_item.img} />
        </div>
        <div className='cart_card_content'>
          <p className='title'>{product.cart_item.title}</p>
          <p className="desc">{product.cart_item.desc}</p>
          <div className='flex gap-3'>
            <p className='dis_price'>{item.dis_price}</p>
            <h4 className="price">₹ {item.totalPrice}</h4>
            <p className='free'>{item.discount} Off% offer applied</p>
          </div>

        </div>

      </div>
      <div className='cart_card_footer'>
        <div className='Counter'>
          <button type='button' onClick={handleDecrement}>-</button>
          <input type='number' value={item.quantity} readOnly />
          <button type='button' onClick={handleIncrement}>+</button>
        </div>
        <div className='deletebtn'>
          <button type='button' onClick={delethandler}>Delete</button>
        </div>
      </div>

    </>
  )
}

export default Cartcard