import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import {TCategory, TProduct, TSupermarket, categories, defaultProduct} from './data'

const Product = ({product}: {product: TProduct}) => (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '117px',
        display: "flex",
        flexDirection: "row",
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        margin: "0 0 60px 0",
        padding: "0 24px",
      }}>

      <img
        style={{
          flex: "none",
          width: "117px",
          objectFit: 'cover'
        }}
        src={product.image}
      />
      <div
        style={{
          flex: "0 1 auto",
          display: "flex",
          flexDirection: 'column',
          marginLeft: 20,
          height: "100%",
          overflow: 'hidden',
          textOverflow: 'ellipsis',
   
        }}>
        <h4 style={{
            overflow: 'hidden',
            display: "-webkit-box",
            WebkitLineClamp: 1,
            lineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}>
        <b>{product.name}</b></h4>
        <div>{product.weight}</div>
        <div
          style={{
            fontSize: '11px',
            overflow: 'hidden',
            display: "-webkit-box",
            WebkitLineClamp: 2,
            lineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.details}
          </div>
      </div>
    </div>
)

export default function Shop({onClose, shop}: {shop: TSupermarket, onClose: any}) {
  const [currentCategory, setCurrentCategory] = React.useState<TCategory>(() => categories[0])
  const selectedProducts = shop.products.filter(p => p.category === currentCategory)

  return (
    <div style={{
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "stretch",
      zIndex: "100",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "#fff",
      fontSize: "13px",
      outline: "none"
    }}>
      <div style={{
        flex: "0 0 auto",
        zIndex: 1,
        backgroundColor: 'white',
        padding: "12px 24px",
      }}>
        <div style={{
            display: "flex",
            alignItems: 'center',
            padding: '10px 0',
          }}>
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
          {categories.map(c => {
            return (
            <Nav.Item key={c}>
              <Nav.Link active={c === currentCategory} eventKey={c}>{c}</Nav.Link >
            </Nav.Item>
          )})}
        </Nav>
      </div>
      <div style={{
        flex: "1 0 100px",
        overflowY: 'scroll',
      }}>
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