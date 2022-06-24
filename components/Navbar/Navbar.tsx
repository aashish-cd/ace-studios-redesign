import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  useEffect(() => {
    window.addEventListener('resize', () => {
      let width = window.innerWidth;
      if (width < 768) {
        setShowDropdown(true);
        setShowNavbar(false);
      } else {
        setShowDropdown(false);
      }
    });
  }, []);
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
        {showDropdown ? (
          <DropDown onClick={toggleNavbar}>
            {showNavbar ? (
              <>
                <FaTimes />
                <ul>
                  <li>Home</li>
                  <li>What we do</li>
                  <li>About us</li>
                </ul>
              </>
            ) : (
              <AiOutlineMenu />
            )}
          </DropDown>
        ) : (
          <>
            <NavLinkContainer>
              <ul>
                <li>Home</li>
                <li>What we do</li>
                <li>About us</li>
              </ul>
            </NavLinkContainer>
            <Button>CONTACT US</Button>
          </>
        )}
      </NavContainer>
    </>
  );
}

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
  }
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
  cursor: pointer;
`;
const DropDown = styled.span`
  font-size: 2rem;
  cursor: pointer;
`;
export default Navbar;
