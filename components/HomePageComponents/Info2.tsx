import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useWidth from '../../customHooks/useWidth';
import { GiCheckMark } from 'react-icons/gi';

const Info2 = ({ image, imageText }: any) => {
  const width = useWidth();
  const data = [
    'Smart marketers at successful Small & Medium Businesses (SMB) make data driven decisions to impr',
    'Smart marketers at successful Small & Medium Businesses (SMB) make data driven decisions to improve',
    'Smart marketers at successful Small & Medium Businesses (SMB) make data driven decisions to improve B2B.',
  ];

  return (
    <Container
      className='sectionMargin primary'
      style={{
        flexDirection: width < 768 ? 'column' : 'row',
      }}
    >
      {width < 768 ? (
        <>
          <h2>Deliver more without increasing the headcount of your team</h2>
          <ImageContainer>
            <img src={image} alt={imageText} />
          </ImageContainer>
          {data.map((item, index) => (
            <ItemContainer key={index}>
              <GiCheckMark
                style={{
                  fontSize: '2rem',
                  marginLeft: width < 768 ? 0 : `${index * 3}rem`,
                  marginRight: '5px',
                }}
                className='secondary'
              />
              <p className='primary'>{item}</p>
            </ItemContainer>
          ))}
        </>
      ) : (
        <>
          <ImageContainer>
            <img src={image} alt={imageText} />
          </ImageContainer>
          <TextContainer>
            <h2>Deliver more without increasing the headcount of your team</h2>
            {data.map((item, index) => (
              <ItemContainer key={index}>
                <GiCheckMark
                  style={{
                    fontSize: '2rem',
                    marginLeft: width < 768 ? 0 : `${index * 3}rem`,
                    marginRight: '5px',
                  }}
                  className='secondary'
                />
                <p className='primary'>{item}</p>
              </ItemContainer>
            ))}
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
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 140%;
  }
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  /* margin: 1rem; */
`;
export default Info2;
