import React from 'react';
import { Link } from 'react-router-dom';
import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductCard,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  BackButton,
  ProductPrice,
} from './BreakFastElements';
import { BreakFastItems } from '../../Products/data';

const Breakfast = () => {
  return (
    <ProductsContainer>
      <ProductsHeading>Breakfast Menu</ProductsHeading>
      {/* Add the back button */}
      <Link to='/'>
        <BackButton>Back to Main Page</BackButton>
      </Link>
      <ProductWrapper>
        {BreakFastItems.map((product, index) => (
          <ProductCard key={index}>
            <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDesc>{product.desc}</ProductDesc>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Breakfast;
