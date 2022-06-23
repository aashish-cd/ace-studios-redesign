import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import image from '../../public/acestudios.png';

function Navbar() {
  return (
    <>
      <NavContainer>
        <ImageContainer>
          <img
            src={
              'https://d33wubrfki0l68.cloudfront.net/1cca4874acc02255ba4cbb6546eef47fb4e6d828/b89db/as.png'
            }
            alt={'ace studios'}
          />
        </ImageContainer>
        <NavLinkContainer>
          <ul>
            <li>Home</li>
            <li>What we do</li>
            <li>About us</li>
          </ul>
        </NavLinkContainer>
        <Button>CONTACT US</Button>
      </NavContainer>
    </>
  );
}

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ImageContainer = styled.div`
  display: flex;
  img {
    width: 120px;
    cursor: pointer;
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  ul > li {
    display: inline-block;
    padding: 1rem;
    text-transform: capitalize;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
const Button = styled.button`
  background-color: #f86b17;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 2rem;
  margin-left: 5rem;
`;
export default Navbar;
