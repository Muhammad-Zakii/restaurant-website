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
  ProductPrice,
} from './DinnerAndLunchElements';
import { DinnerAndLunchItems } from '../../Products/data';
import { Link } from 'react-router-dom';

const DinnerAndLunch = () => {
  return (
    <>
      <ProductsContainer>
        <ProductsHeading>Dinner & Lunch Menu</ProductsHeading>
        <Link to='/'>
          <BackButton>Back to Main Page</BackButton>
        </Link>
        <ProductWrapper>
          {' '}
          {DinnerAndLunchItems.map((product, index) => (
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
    </>
  );
};

export default DinnerAndLunch;
