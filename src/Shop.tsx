import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import {TCategory, TProduct, TSupermarket, categories, defaultProduct} from './data'
import "bootstrap-icons/font/bootstrap-icons.css";

import './Shop.css'

import Product from './Product'

export default function Shop({onClose, shop}: {shop: TSupermarket, onClose: any}) {
  const defaultCat = categories[0]
  const [currentCategory, setCurrentCategory] = React.useState<TCategory>(defaultCat)
  const selectedProducts = shop.products.filter(p => p.category === currentCategory)

  return (
    <div className='shop_container'>
      <div className='shop_info'>
        <div className='shop_header'>
          <i onClick={onClose} className="shop_backButton bi bi-caret-left" />
          <div>
            <h3  className='shop_name'>{shop.name}</h3>
            <img className='shop_logo' src={shop.logo}/>
            <a
              className='shop_address'
              href={`https://www.google.com/maps/place/${shop.latitude},${shop.longitude}?q=${shop.name}+${shop.address.replace(' ', '+')}`}
              target='_blank'  
            >
              {shop.address}
            </a>
          </div>
        </div>
        <Nav
            defaultActiveKey={defaultCat}
            onSelect={(selectedKey: TCategory) => setCurrentCategory(selectedKey)}
            variant="underline"
            className='categoriesNav'
        >
          {categories.map(category => (
            <Nav.Item key={category} className='categoriesNav_item'>
              <Nav.Link
                className='categoriesNav_link'
                eventKey={category}
              >{category}</Nav.Link>
            </Nav.Item>
          ))}
          {/* fake search bar */}
          {/* <div className='categoriesNav_search'>
            <i className="bi bi-search"></i>
          </div> */}
        </Nav>
      </div>
      <div className='products_list'>
        {selectedProducts.length > 0
          ? selectedProducts.map(product => <Product onclose={onClose} product={product} key={`product-${product.name}`}/>)
          : <React.Fragment>
              <Product product={defaultProduct} key={"def-p-1"} onclose={onClose}/>
              <Product product={defaultProduct} key={"def-p-2"} onclose={onClose}/>
              <Product product={defaultProduct} key={"def-p-3"} onclose={onClose}/>
            </React.Fragment>
        }
      </div>
    </div>
  );
}