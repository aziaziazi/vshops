import * as React from 'react';
import {useState, useMemo} from 'react';
import {createRoot} from 'react-dom/client';
import {Map,Marker} from '@vis.gl/react-maplibre';

import Shop from './Shop';
import { supermarkets, TSupermarket } from './data'

const Logo = ({logo}) => {
  switch (logo) {
    case "./logo-carrefour":
      return <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="-150 0 1884 1052" width="28" height="28">
                <g>
                  <path fillOpacity="0" strokeLinecap="round" strokeWidth="250" stroke="white" d="m476.1 32.6c4.1 0 6.9 3.6 6.8 8.1-0.1 2.6-1.2 5.5-3.8 8.1-101.6 126.3-175.6 274-175.6 478.9 0 204.8 74 349.6 175.6 475.9 2.6 2.5 3.7 5.5 3.8 8.1 0.1 4.4-2.7 8.1-6.8 8.1-2.3 0-5-1.1-7.8-4l-432.9-418.8c-21.6-18.5-35.4-40.1-35.4-70.8 0-30.9 13.8-52.4 35.4-70.8l432.9-418.9c2.8-2.9 5.5-4 7.8-3.9z"/>
                  <path fillOpacity="0" strokeLinecap="round" strokeWidth="250" stroke="white" d="m989.9 109.7c0 10.7-4.1 20.9-13.1 29.9-48.2 46.5-67.1 93.1-67.2 134.2-0.3 78.5 67.7 136.9 130.4 136.9 86.3 0 137.1-67.9 137.1-155.6 0-83.1-35.4-152.5-74-207.9-1.5-2.3-2.2-4.8-2.2-7 0.1-4.4 2.6-8 6.5-8 2.3 0 5 1.3 8 4.3l433 418.9c21.6 18.3 35.5 39.9 35.5 70.8 0 30.7-13.9 52.3-35.5 70.8l-433 418.8c-3 3-5.7 4.2-8 4.2-3.9 0-6.4-3.5-6.5-7.9 0-2.2 0.7-4.7 2.2-7 38.6-55.5 74-124.8 74-207.9 0-87.8-50.8-155.6-137.1-155.6-62.7 0-130.7 58.4-130.4 136.9 0.1 41.1 19 87.6 67.2 134.2 9 9 13.1 19.3 13.1 30-0.3 48.9-87 108.5-188.7 108.5-169.5 0-235.8-237-235.8-523.5 0-286.4 66.3-526.7 235.8-526.7 101.7 0 188.4 59.6 188.7 108.7z"/>
                  <path fill="#ed1c24" d="m476.1 32.6c4.1 0 6.9 3.6 6.8 8.1-0.1 2.6-1.2 5.5-3.8 8.1-101.6 126.3-175.6 274-175.6 478.9 0 204.8 74 349.6 175.6 475.9 2.6 2.5 3.7 5.5 3.8 8.1 0.1 4.4-2.7 8.1-6.8 8.1-2.3 0-5-1.1-7.8-4l-432.9-418.8c-21.6-18.5-35.4-40.1-35.4-70.8 0-30.9 13.8-52.4 35.4-70.8l432.9-418.9c2.8-2.9 5.5-4 7.8-3.9z"/>
                  <path fill="#005bab" d="m989.9 109.7c0 10.7-4.1 20.9-13.1 29.9-48.2 46.5-67.1 93.1-67.2 134.2-0.3 78.5 67.7 136.9 130.4 136.9 86.3 0 137.1-67.9 137.1-155.6 0-83.1-35.4-152.5-74-207.9-1.5-2.3-2.2-4.8-2.2-7 0.1-4.4 2.6-8 6.5-8 2.3 0 5 1.3 8 4.3l433 418.9c21.6 18.3 35.5 39.9 35.5 70.8 0 30.7-13.9 52.3-35.5 70.8l-433 418.8c-3 3-5.7 4.2-8 4.2-3.9 0-6.4-3.5-6.5-7.9 0-2.2 0.7-4.7 2.2-7 38.6-55.5 74-124.8 74-207.9 0-87.8-50.8-155.6-137.1-155.6-62.7 0-130.7 58.4-130.4 136.9 0.1 41.1 19 87.6 67.2 134.2 9 9 13.1 19.3 13.1 30-0.3 48.9-87 108.5-188.7 108.5-169.5 0-235.8-237-235.8-523.5 0-286.4 66.3-526.7 235.8-526.7 101.7 0 188.4 59.6 188.7 108.7z"/>
                </g>
              </svg>;
    case "./logo-franprix":
      return <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="-1 -2 26 28" width="20" height="20">
                <path fillOpacity="0" strokeLinecap="round" strokeWidth="4" stroke="white" d="M12 6.305c3.691 0 6.323-3.071 6.13-6.286-2.124-.17-5.069.791-6.13 3.79C10.939.81 7.993-.15 5.87.02 5.677 3.234 8.309 6.305 12 6.305m11.002 6.962c-.139-3.413-2.821-6.362-6.55-6.362-1.69 0-3.236.635-4.452 1.744-1.217-1.11-2.763-1.744-4.452-1.744-3.729 0-6.412 2.949-6.55 6.362C.758 19.19 5.913 24 12 24c6.087 0 11.242-4.81 11.002-10.733"/>
                <path fill="#fb4400" d="M12 6.305c3.691 0 6.323-3.071 6.13-6.286-2.124-.17-5.069.791-6.13 3.79C10.939.81 7.993-.15 5.87.02 5.677 3.234 8.309 6.305 12 6.305m11.002 6.962c-.139-3.413-2.821-6.362-6.55-6.362-1.69 0-3.236.635-4.452 1.744-1.217-1.11-2.763-1.744-4.452-1.744-3.729 0-6.412 2.949-6.55 6.362C.758 19.19 5.913 24 12 24c6.087 0 11.242-4.81 11.002-10.733"/>
            </svg>;
    case "./logo-intermarché":
      return <svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="60 -10 90 80" width="30" height="30">
                <path fillOpacity="0" strokeLinecap="round" strokeWidth="10" stroke="white"  d="m101.8 10.6c5.4 5 15.3 4.8 22.7 2.2v-0.7c-10.1 0-15.6-2.8-22.1-11.2-3.2 2.1-3.5 7.1-0.6 9.7zm-21.1 1.4v8.4c25.4 6.2 51.1 3 61.8-1.8v-0.9c-26.3 3.5-50.1 0.3-61.8-5.7zm32.6 16.3c-24.1 0-47 30.7-47 30.7h19.3c4.9-9.3 15.7-28 25.7-28 7.8 0 5.2 12 1.1 20.8h11.2c2.4-9 2.8-23.5-10.3-23.5z"/>
                <path fill="#ff2822" d="m101.8 10.6c5.4 5 15.3 4.8 22.7 2.2v-0.7c-10.1 0-15.6-2.8-22.1-11.2-3.2 2.1-3.5 7.1-0.6 9.7zm-21.1 1.4v8.4c25.4 6.2 51.1 3 61.8-1.8v-0.9c-26.3 3.5-50.1 0.3-61.8-5.7zm32.6 16.3c-24.1 0-47 30.7-47 30.7h19.3c4.9-9.3 15.7-28 25.7-28 7.8 0 5.2 12 1.1 20.8h11.2c2.4-9 2.8-23.5-10.3-23.5z"/>
              </svg>
    default:
      return null;
  
  }
}

export default function App() {
  const [selectedShop, setSelectedShop] = useState<TSupermarket>(null );

  const ShopMarkers = useMemo(
    () =>
      supermarkets.map((shop, index) => (
        <React.Fragment key={`shop-markets-${index}`}>
          <Marker
            // key={`marker-${index}`}
            longitude={shop.longitude}
            latitude={shop.latitude}
            anchor="bottom"
            onClick={e => {
              if (shop.products.length === 0) return
              e.originalEvent.stopPropagation();
              setSelectedShop(shop);
            }}
          >
            <Logo logo={shop.logo}/>
          </Marker>
          <Marker
            // key={`marker-number-${index}`}
            longitude={shop.longitude}
            latitude={shop.latitude}
            anchor="top">
              <div key={`marker-numberdiv-${index}`} style={{
                display: 'inline-block',
                padding: "0 5px",
                fontSize: "13px",
                fontWeight: 'bold',
                lineHeight: "18px",
                borderRadius: "10px",
                backgroundColor: "#fff",
              }}>
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
        mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
        // mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
        // mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      >
        {ShopMarkers}
      </Map>
    </>
  );
}

export function renderToDom(container) {
  createRoot(container).render(<App />);
}
