import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useWidth from '../../customHooks/useWidth';

const Content = ({ heading, text, image, imageText, reverse }: any) => {
  const width = useWidth();

  return (
    <Container
      className='sectionMargin primary'
      style={{
        flexDirection: width < 768 ? 'column' : reverse ? 'row-reverse' : 'row',
      }}
    >
      {width < 768 ? (
        <>
          <h2 className='secondary'>{heading}</h2>
          <ImageContainer>
            <img src={image} alt={imageText} />
          </ImageContainer>
          <TextContainer>
            <p>{text}</p>
          </TextContainer>
        </>
      ) : (
        <>
          <ImageContainer>
            <img src={image} alt={imageText} />
          </ImageContainer>
          <TextContainer>
            <h2 className='secondary'>{heading}</h2>
            <p>{text}</p>
          </TextContainer>
        </>
      )}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 90%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 450px;
    border-radius: 10px;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 90%;
    }
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin: 1rem 2rem;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 160%;
    text-transform: capitalize;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 160%;
    padding-left: 1rem;
    letter-spacing: 0.01em;
  }
`;
export default Content;
