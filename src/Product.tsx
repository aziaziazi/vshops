import * as React from 'react';

import { TProduct } from './data'

import './Product.css'

const Product = ({product}: {product: TProduct}) => (
    <div className='product_card'>
      <img className='product_image' src={product.image}/>
      <div className='product_info'>
        <h4 className='product_title'>{product.name}</h4>
        <div>{product.weight}</div>
        <div className='product_detail'>
          {product.details}
          </div>
      </div>
    </div>
)


export default Product