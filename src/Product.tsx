import * as React from 'react';

import { TProduct } from './data'

import './Product.css'

const Product = ({product, onclose}: {product: TProduct, onclose?: () => void}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const toogleOpenProduct = () => setIsOpen(prevState => !prevState)

  return (
    <div className={`product_card ${isOpen ? 'product_card_isOpen' : ''}`} onClick={toogleOpenProduct}>
      <img className='product_image' src={product.image}/>
      <div className='product_info'>
        <div className='product_titleContainer'>
          <h4 className={`product_title ${isOpen ? '' : 'multiple-line-break-2'}`}>{product.name}</h4>
          <i className="product_seeMore bi bi-caret-down-square-fill" />
        </div>
        <div className='product_weight'>{product.weight}</div>
        <div className={`product_detail ${isOpen ? '' : 'multiple-line-break-3'}`}>
          {product.details}
        </div>
        {isOpen &&
          <div className='product_location_map' >
            <div>Autres magasins</div>
            <img src='./product_location_map.png' onClick={() => {onclose()}}/>
          </div>
        }
      </div>
    </div>
)}


export default Product