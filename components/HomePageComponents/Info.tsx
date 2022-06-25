import React from 'react';
import styled from 'styled-components';
import { GiCheckMark } from 'react-icons/gi';
import useWindow from '../../customHooks/useWidth';

const Info = () => {
  const data = [
    'Smart marketers at successful Small & Medium Businesses (SMB) make data driven decisions to improve B2B (Business to Business) marketing efficiency.',
    'Smart marketers at successful Small & Medium Businesses (SMB) make data driven decisions to improve B2B (Business to Business) marketing efficiency.',
    'Smart marketers at successful Small & Medium Businesses (SMB) make data driven decisions to improve B2B (Business to Business) marketing efficiency.',
  ];
  const width = useWindow();
  return (
    <Container className='sectionMargin'>
      {data.map((item, index) => (
        <ItemContainer key={index}>
          <GiCheckMark
            style={{
              fontSize: '2.5rem',
              marginLeft: width < 768 ? 0 : `${index * 3}rem`,
              marginRight: '5px',
            }}
            className='secondary'
          />
          <p className='primary'>{item}</p>
        </ItemContainer>
      ))}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  align-items: center;
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 1rem;
`;
export default Info;
