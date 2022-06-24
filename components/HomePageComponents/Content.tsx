import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Content = ({ heading, text, image, imageText, reverse }: any) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return (
    <Container
      className='sectionMargin primary'
      style={{
        flexDirection: width < 768 ? 'column' : reverse ? 'row-reverse' : 'row',
      }}
    >
      {width < 768 ? (
        <>
          <h2>{heading}</h2>
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
            <h2>{heading}</h2>
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
    width: 80%;
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
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  h2 {
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 160%;
  }
  p {
    font-family: 'Avenir LT Std';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    padding-left: 1rem;
    letter-spacing: 0.01em;
  }
`;
export default Content;
