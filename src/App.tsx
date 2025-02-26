import * as React from 'react';
import {useState, useMemo} from 'react';
import {createRoot} from 'react-dom/client';
import {Map,Marker} from '@vis.gl/react-maplibre';

import Shop from './Shop';
import { supermarkets, TSupermarket } from './data'

import './App.css'

const mapStyles =[
  "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
  "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
  "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
]

export default function App() {
  const [selectedShop, setSelectedShop] = useState<TSupermarket>();
  const [selectedStyle, setselectedStyle] = useState<0 | 1 | 2>(0)

  
  const ShopMarkers = useMemo(
    () =>
      supermarkets.map((shop, index) => (
        <React.Fragment key={`shop-markets-${index}`}>
          <Marker
            longitude={shop.longitude}
            latitude={shop.latitude}
            onClick={e => {
              if (shop.products.length === 0) return
              e.originalEvent.stopPropagation();
              setSelectedShop(shop);
            }}
            className={`marker_container${shop.products.length === 0 ? '' : ' marker_container--clickable'}`}
          >
            <img src={shop.markerLogo} />
            <div className='marker_chip'>
              {shop.fakeNumberOfProducts}
            </div>
          </Marker>
        </React.Fragment>
      )),
    []
  );

  return (
    <>
      {selectedShop ? <Shop onClose={e => {setSelectedShop(null); }} shop={selectedShop}/>:null}
      <Map initialViewState={{ latitude: 48.8666549264761, longitude: 2.3704176056870314, zoom: 14 }}
        mapStyle={mapStyles[selectedStyle]}
      >
        {/* invisible bottom left button to udpate map style */}
        <div
          style={{position: "absolute", top: 0, left: 0, width: 50, height: 50, backgroundColor: "#ffffff09"}}
          onClick={() => setselectedStyle(prevStyle => {
            if (prevStyle === 0) return 1
            if (prevStyle === 1) return 2
            return 0
          })}
        />
        {ShopMarkers}
      </Map>
    </>
  );
}

export function renderToDom(container) {
  createRoot(container).render(<App />);
}
