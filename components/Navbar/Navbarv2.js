import Link from 'next/link';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbarv2 = () => {
  const navRef = useRef();
  const toggleNavbar = () => {
    navRef.current.classList.toggle('responsive');
  };
  return (
    <Container>
      <ImageContainer>
        <Link href='/'>
          <img
            src={
              'https://d33wubrfki0l68.cloudfront.net/1cca4874acc02255ba4cbb6546eef47fb4e6d828/b89db/as.png'
            }
            alt={'ace studios'}
          />
        </Link>
      </ImageContainer>
      <NavLinkContainer ref={navRef} onClick={toggleNavbar}>
        <p>
          <Link href='/'>Home</Link>
        </p>
        <p>
          <Link href='/service'>What we do</Link>
        </p>
        <p>
          <Link href='/about'>About us</Link>
        </p>
        <button
          className='nav-btn nav-close-btn primary'
          onClick={toggleNavbar}
        >
          <FaTimes />
        </button>
      </NavLinkContainer>
      <Button className='secondaryBackground'>
        <Link href='/contact'>CONTACT US</Link>
      </Button>
      <button className='nav-btn primary' onClick={toggleNavbar}>
        <FaBars />
      </button>
    </Container>
  );
};
const Container = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  opacity: 0.9;
  text-align: center;
  .responsive {
    transform: none;
  }
  button {
    padding-right: 1rem;
  }
  @media screen and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 1rem 0;
    width: 100%;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  padding-left: 1rem;
  img {
    width: 120px;
    cursor: pointer;
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  p {
    display: inline-block;
    padding: 1rem;
    text-transform: capitalize;
    font-size: 1.2rem;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: #ed2024;
    color: white;
    top: 0;
    left: 0;
    transition: 0.6s;
    transform: translateY(-100vh);
    p {
      font-size: 1.5rem;
    }
    button {
      padding-right: 1rem;
    }
  }
`;
const Button = styled.button`
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1rem;
  min-width: fit-content;
  /* margin-left: 5rem; */
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export default Navbarv2;
