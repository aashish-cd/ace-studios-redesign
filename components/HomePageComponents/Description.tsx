import React from 'react';
import styled from 'styled-components';
const Description = () => {
  return (
    <Container className='primary sectionMargin'>
      <h2>
        With our solutions, you can deliver double impact: <br /> cost-saving
        and more leads.
      </h2>
      <p>
        We can help you to reduce the content creation and distribution costs
        and generate more leads by optimizing your marketing execution.
      </p>
      <button className='secondaryBackground'>Contact us for More.</button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  background-color: #ffb8ba;
  padding: 1rem;
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 160%;
    /* or 42px */

    text-align: center;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    /* or 29px */
    width: 50%;
    text-align: center;
    letter-spacing: 0.01em;
  }
  button {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    text-align: center;
    border: none;
    padding: 0.7rem 1.2rem;
    margin: 1rem auto;
  }
  @media screen and (max-width: 768px) {
    p {
      width: 90%;
    }
  }
`;

export default Description;
