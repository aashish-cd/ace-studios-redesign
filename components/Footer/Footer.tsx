import Link from 'next/link';
import React from 'react';
import { AiOutlineToTop } from 'react-icons/ai';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container className='sectionMargin secondary'>
      <img
        src='https://d33wubrfki0l68.cloudfront.net/1cca4874acc02255ba4cbb6546eef47fb4e6d828/b89db/as.png'
        alt='ace studios'
      />
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/service'>What we do</Link>
        </li>
        <li>
          <Link href='about'>About us</Link>
        </li>
      </ul>
      <p>
        <Link href='/'>Go to Top</Link>
        <AiOutlineToTop />
      </p>
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
  ul {
    li {
      display: inline-block;
      padding: 1.5rem;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;

    ul > li {
      display: block;
    }
  }
`;

export default Footer;
