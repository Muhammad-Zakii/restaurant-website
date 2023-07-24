import React from 'react';
import { GlobalStyle } from '../../globalStyles';
import Hero from '../../components/Hero';
import Products from '../../components/Products';
import { productData, productDataTwo } from '../../components/Products/data';
import Feature from '../../components/Feature';
const index = () => {
  return (
    <div>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Feature />
    </div>
  );
};

export default index;
