import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import {TCategory, TProduct, TSupermarket, categories, defaultProduct} from './data'

import './Shop.css'

import Product from './Product'

export default function Shop({onClose, shop}: {shop: TSupermarket, onClose: any}) {
  const [currentCategory, setCurrentCategory] = React.useState<TCategory>(() => categories[0])
  const selectedProducts = shop.products.filter(p => p.category === currentCategory)

  return (
    <div className='shop_container'>
      <div className='shop_info'>
        <div className='shop_header'>
          <button onClick={onClose}>X</button>
          <div style={{marginLeft: 10}}>
            <h2 style={{margin: 0}}>{shop.name}</h2>
            <i>{shop.address}</i>
          </div>
        </div>
        <Nav
            onSelect={(selectedKey: TCategory) => setCurrentCategory(selectedKey)}
            variant="underline"
        >
          {categories.map(category => (
            <Nav.Item key={category}>
              <Nav.Link
                className='categoriesNav_link'
                eventKey={category}
              >{category}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
      <div className='products_list'>
        {selectedProducts.length > 0
          ? selectedProducts.map(product => <Product product={product} key={`product-${product.name}`}/>)
          : <React.Fragment>
              <Product product={defaultProduct} key={"def-p-1"}/>
              <Product product={defaultProduct} key={"def-p-2"}/>
              <Product product={defaultProduct} key={"def-p-3"}/>
            </React.Fragment>
        }
      </div>
    </div>
  );
}