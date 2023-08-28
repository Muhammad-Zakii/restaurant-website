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
} from './SnacksElements';
import { SnacksFastFood } from '../../Products/data';

const Snacks = () => {
  return (
    <ProductsContainer>
      <ProductsHeading>Chaat , FastFood & Snacks</ProductsHeading>
      {/* Add the back button */}
      <Link to='/'>
        <BackButton>Back to Main Page</BackButton>
      </Link>
      <ProductWrapper>
        {SnacksFastFood.map((product, index) => (
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

export default Snacks;
