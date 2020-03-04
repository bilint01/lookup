import React, { useContext } from 'react';
import { AppContext } from '../App.js';
import styled from 'styled-components';

const Description = styled.section`
  display: flex;
  flex-direction: row;
`;

const StyledImage = styled.img`
  margin-top: 20px;
  padding: 12px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 15px;
`;

const PlayButton = styled.div`
  display: flex;
  background: #444;
  border: 1px solid #4f4f4f;
  border-radius: 4px;
  cursor: pointer;
  padding: 3px 8px;
  margin: 3px 12px;
  max-height: 20px;
  max-width: 150px;
  &:focus,
  &:hover {
    background: #fff;
    color: #222;
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
    margin: 6px;
  }
`;

const Overview = () => {
  const data = useContext(AppContext);
  const { URL_POSTERS, currentMovie, currentGenre, setShow } = data;

  const origin_poster = URL_POSTERS.slice(0, URL_POSTERS.length - 1);

  return (
    data &&
    data[currentGenre - 1] &&
    data[currentGenre - 1].results.map(
      (item, counter) =>
        item.id === currentMovie && (
          <StyledWrapper key={counter}>
            <Description>
              <article key={counter}>
                <h2>{item.title}</h2>
                <p>{item.overview}</p>
              </article>
              <StyledImage
                alt={item.original_title}
                src={`${origin_poster}${item.poster_path}`}
              />
            </Description>
            <PlayButton onClick={() => alert('run something')}>
              Play trailer
            </PlayButton>
            <PlayButton onClick={() => setShow(null)}>
              &#8592; go back
            </PlayButton>
          </StyledWrapper>
        )
    )
  );
};

export default Overview;
