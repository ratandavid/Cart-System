import React from 'react'
import ProductCard from '../Components/Productcard/ProductCard'
import { product_list } from '../Data/Products'

function ProductGrid() {
    return (
        <div className='container mt-3'>
            <div className='row justify-content-center'>
                {
                    product_list.map((e) => {
                        return (
                            <ProductCard data={e} key={e.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ProductGrid