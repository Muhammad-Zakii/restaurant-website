import React from 'react';
import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductCard,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  BackButton,
  // ProductPrice,
} from './SweetsElements';
import { SweetsItems } from '../../Products/data';
import { Link } from 'react-router-dom';

const Sweets = () => {
  return (
    <ProductsContainer>
      <ProductsHeading>Sweets Menu</ProductsHeading>
      <Link to='/'>
        <BackButton>Back to Main Page</BackButton>
      </Link>
      <ProductWrapper>
        {' '}
        {SweetsItems.map((product, index) => (
          <ProductCard key={index}>
            <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDesc>{product.desc}</ProductDesc>
              {/* <ProductPrice>{product.price}</ProductPrice> */}
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Sweets;
