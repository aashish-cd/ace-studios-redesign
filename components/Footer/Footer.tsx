import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container className='sectionMargin secondary'>
      <img
        src='https://d33wubrfki0l68.cloudfront.net/1cca4874acc02255ba4cbb6546eef47fb4e6d828/b89db/as.png'
        alt='ace studios'
      />
      <div>
        <p>
          <Link href='/'>Home</Link>
        </p>
        <p>
          <Link href='/service'>What we do</Link>
        </p>
        <p>
          <Link href='about'>About us</Link>
        </p>
      </div>
      <GoTop>
        <a href='#'>
          Go to Top
          <span>
            <AiOutlineArrowUp />
          </span>
        </a>
      </GoTop>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  background-color: #eaeaea;
  text-align: center;

  img {
    padding: 3rem 0;
    width: 120px;
    cursor: pointer;
  }
  div > p {
    display: inline-block;
    padding: 1.5rem;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    ul > li {
      display: flex;
      flex-direction: column;
      padding-right: 20px;
    }
  }
`;
const GoTop = styled.p`
  padding: 1rem 0;
  font-size: 1.4rem;
  span {
    border: solid 1px #ed2024;
    padding: 5px;
    margin-left: 5px;
    font-size: 16px;
  }
`;

export default Footer;
