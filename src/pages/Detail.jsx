import React from 'react';
import styled from 'styled-components';
import Overview from '../components/Overview.jsx';
// import Player from '../components/Player';

const DetailWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 8px 25px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;

  @media screen and (max-width: 425px) {
    flex-wrap: wrap;
  }

  article {
    max-width: 100%;
    padding: 8px 12px;
    flex-direction: column;
    text-align: justify;

    @media screen and (max-width: 425px) {
      flex-direction: column;
    }
  }
`;

const Detail = () => (
  <DetailWrapper>
    <Overview />
    {/* <Player /> */}
  </DetailWrapper>
);

export default Detail;
