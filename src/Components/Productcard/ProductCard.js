import React, { Fragment, useState } from 'react'
import './Productcard.css'
import { useEffect } from 'react';
import { Cart } from '../../store';
import { Link } from 'react-router-dom';
import { addtoCart, removecart } from '../../Feature/Cartlist/Cartlistslice';
import { useDispatch, useSelector } from 'react-redux';
import { isItemExists } from '../../Feature/Cartlist/Cartlistslice';
function ProductCard(props) {
    const data = props.data;
    // const itemExists = useSelector(isItemExists)
    const itemExists = useSelector(state => isItemExists(state, data.id));
    const dispatch = useDispatch();
    const pathfill = {
        fill: "#2874f0"
    };

    const [Fill, setFill] = useState({ fill: '#000' });

    useEffect(() => {
        if (itemExists) {
            setFill(pathfill);
        }
    }, [itemExists]);

    const togglehandler = () => {
        if (!itemExists) {
            setFill(pathfill);
            // Cart.add(data);
            dispatch(addtoCart(data))
        }
        else {
            setFill();
            dispatch(removecart(data.id))
            // Cart.remove(data.id);
        }
    }

    return (
        <Fragment key={data.id}>
            <div className='card'>
                <div className='img'>
                    <img src={data.img} />
                </div>
                <div className='content'>
                    <p className='title'>{data.title}</p>
                    <p className='desc'>{data.desc}</p>
                    <div className="flex gap-3">
                        <h4 className='price'>₹ {data.price}</h4>
                        <p className='dis_price'>{data.dis_price}</p>
                        <p className='free'>{data.discount} % off</p>
                    </div>
                    <div className='comobo_offer'>{data.combo_offer}</div>
                </div>
                <Link to='viewcart'>
                    <div className='carticon' onClick={togglehandler}>
                        <svg width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path style={Fill} d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff">
                            </path>
                        </svg>
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}

export default ProductCard