import styled from 'styled-components';

export const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #f9f2ea;
  color: #000000;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  position: relative;
  margin: 0 2rem;
  line-height: 2;
  flex-basis: 25%;
  max-width: 300px;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #dd2803;
  }
`;

export const BackButton = styled.button`
  font-size: 1rem;
  padding: 1rem 2rem;
  border: none;
  background: #dd2803; /* Use the same color as the after pseudo-element in ProductCard */
  color: #fff;
  margin-bottom: 2rem;
  transition: 0.2s ease-out;

  @media (max-width: 767px) {
    font-size: 0.6rem;
    padding: 0.6rem 1rem;
  }

  &:hover {
    background: #e31837; /* Change color on hover */
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 360px;
  max-width: 100%;
  object-fit: cover;
  box-shadow: 8px 8px #fdc500;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: bold;
  font-size: 1.7rem;
  color: #000000;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;

  @media (max-width: 767px) {

    padding: 0rem;
    font-size: 0.6rem;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
