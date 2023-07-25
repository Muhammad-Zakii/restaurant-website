import React, { Suspense, lazy } from 'react';
import { GlobalStyle } from '../../globalStyles';
import { productData, productDataTwo } from '../../components/Products/data';

const Hero = lazy(() => import('../../components/Hero'));
const Products = lazy(() => import('../../components/Products'));
const Feature = lazy(() => import('../../components/Feature'));

const CenteredFallback = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', // Take the full height of the viewport
    }}
  >
    Loading...
  </div>
);

const Index = () => {
  return (
    <div>
      <GlobalStyle />

      <Suspense fallback={<CenteredFallback />}>
        <Hero />
        <Products heading='Choose your favorite' data={productData} />
        <Products heading='Sweet Treats for You' data={productDataTwo} />
        <Feature />
      </Suspense>
    </div>
  );
};

export default Index;
