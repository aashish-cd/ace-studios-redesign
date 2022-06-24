import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Container className='sectionMargin'>
      <h1 className='secondary'>
        Get a dedicated team to deliver a custom application tailored to your
        business needs
      </h1>
      <Image src='https://acestudios.tech/home.jpg' alt='ace studios' />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  h1 {
    padding: 0 2rem;
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 500;
    font-size: 33px;
    line-height: 160%;
  }
  img {
    max-width: 500px;
    border-radius: 10px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    h1 {
      font-size: 1.5rem;
    }
  }
`;
const Image = styled.img`
  width: 80%;
`;
export default Hero;
