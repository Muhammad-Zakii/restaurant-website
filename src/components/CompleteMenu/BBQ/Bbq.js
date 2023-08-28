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
} from './BbqElements';
import { BbqData } from '../../Products/data';

const Bbq = () => {
  return (
    <ProductsContainer>
      <ProductsHeading>BBQ , Fried & Steam</ProductsHeading>
      {/* Add the back button */}
      <Link to='/'>
        <BackButton>Back to Main Page</BackButton>
      </Link>
      <ProductWrapper>
        {BbqData.map((product, index) => (
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

export default Bbq;
