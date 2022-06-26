import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import useWidth from '../../customHooks/useWidth';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const width = useWidth();
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (width < 768) {
        setShowDropdown(true);
        setShowNavbar(false);
      } else {
        setShowDropdown(false);
      }
    });
  }, [width]);
  return (
    <>
      <NavContainer>
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
        {showDropdown ? (
          <>
            <DropDown onClick={toggleNavbar}>
              {showNavbar ? (
                <>
                  <FaTimes
                    className='secondary'
                    style={{ transition: '0.5s' }}
                  />
                </>
              ) : (
                <AiOutlineMenu
                  className='primary'
                  style={{ transition: '0.5s' }}
                />
              )}
            </DropDown>
            {showNavbar && (
              <DropDownContainer className='secondaryBackground'>
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
              </DropDownContainer>
            )}
          </>
        ) : (
          <>
            <NavLinkContainer>
              <ul className='secondary'>
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
            </NavLinkContainer>
            <Button className='secondaryBackground'>
              <Link href='/contact'>CONTACT US</Link>
            </Button>
          </>
        )}
      </NavContainer>
    </>
  );
}

const NavContainer = styled.div`
  position: sticky;
  top: 0px;

  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  opacity: 0.9;
  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
    align-items: flex-start;
    padding: 1rem 0;
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
const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: 50px;
  padding: 1rem;
  border-radius: 20px;
  transition: 1s;
  transform: scale(1.2);

  ul > li {
    list-style: none;
    padding: 1rem 1.5rem 0.4rem 0;
    text-transform: capitalize;
    font-size: 1.2rem;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      transition: all 0.3s;
      color: #6d0a0c;
    }
  }
`;
export default Navbar;
