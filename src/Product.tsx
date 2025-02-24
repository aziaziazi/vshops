import * as React from 'react';

import { TProduct } from './data'

import './Product.css'

const Product = ({product}: {product: TProduct}) => (
    <div className='product_card'>
      <img className='product_image' src={product.image}/>
      <div className='product_info'>
        <h4 className='product_title multiple-line-break-2'>{product.name}</h4>
        <div className='product_weight'>{product.weight}</div>
        <div className='product_detail multiple-line-break-3'>
          {product.details}
          </div>
      </div>
    </div>
)


export default Product