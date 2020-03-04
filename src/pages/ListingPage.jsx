import React from 'react';
import styled from 'styled-components';
import List from '../components/List.jsx';

const StyledTitle = styled.h3`
  display: flex;
  text-decoration: underline;
  padding: 8px 18px 0 30px;
  @media screen and (max-width: 425px) {
    font-size: 15px;
    justify-content: center;
  }
`;

const StyledFragment = styled.div`
  margin: 8px 25px;
  border-top: 1px solid #fff;
  &:last-child {
    border-bottom: 1px solid #fff;
  }
`;

const ListingPage = ({ ...props }) => {
  return props.types.map((genre, count) => (
    <StyledFragment key={count}>
      <StyledTitle>{props.types[count]}</StyledTitle>
      <List type={genre} />
    </StyledFragment>
  ));
};

export default ListingPage;
