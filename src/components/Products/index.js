import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ProductsContainer,
  ProductsHeading,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from './ProductsElements';
import styled from 'styled-components';

// Custom styles for the slider buttons
const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background-color: transparent;
  border: none;
  color: #fdc500;
  font-size: 24px;
  cursor: pointer;
`;

const Products = ({ heading, data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevButton></PrevButton>, // Custom previous button
    nextArrow: <NextButton></NextButton>, // Custom next button
  };

  return (
    <div id='menu'>
      <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <Slider {...settings}>
          {data.map((product, index) => (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          ))}
        </Slider>
      </ProductsContainer>
    </div>
  );
};

export default Products;
