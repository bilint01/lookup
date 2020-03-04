import React, { useState, useEffect, useContext, Fragment } from 'react';
import EmblaCarouselReact from 'embla-carousel-react';
import { AppContext } from '../App.js';
import styled from 'styled-components';

const StyledWrapper = styled(EmblaCarouselReact)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 95%;
  margin-left: 30px;
  @media screen and (max-width: 425px) {
    width: 100%;
    margin: 0;
  }

  .is-selected {
    background: #fff;
  }
`;

const PosterWrapper = styled.div`
  padding: 6px 12px 2px;
  background: #444;
  border-right: 1px solid #fff;
  cursor: pointer;
  @media screen and (max-width: 425px) {
    padding: 6px 12px;
  }

  &:last-child {
    border-right: 0;
  }
`;

const StyledButton = styled.button`
  width: 100px;
  background: #222;
  border: 1px outset #888;
  font-size: 14px;
  padding: 3px 8px;
  color: #fff;
  outline: none;
  border-radius: 3px;
  @media screen and (max-width: 425px) {
    padding: 6px 12px;
    margin: 0 12px;
  }

  &:hover {
    color: #111;
    background: #cfcfcf;
    border: 1px inset;
    cursor: pointer;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
  padding: 6px 12px;
  border-radius: 4px;
  margin: 10px auto;

  @media screen and (max-width: 425px) {
    padding: 6px 12px;
    margin: 10px 12px;
    width: 80%;
  }
`;

const List = ({ ...props }) => {
  const data = useContext(AppContext);
  const [embla, setEmbla] = useState(null);
  const { URL_POSTERS, setShow } = data; // selectShow method runs on click and opens description of active (item)
  const DEFAULT_POSTER =
    'https://www.valmorgan.com.au/wp-content/uploads/2016/06/default-movie-1-3.jpg';
  let results = [];
  let startIndex = 3;

  if (props.type === 'Popular movies' && data[0]) {
    results = data[0].results;
    props.type = 1;
  } else if (props.type === 'Popular series' && data[1]) {
    results = data[1].results;
    props.type = 2;
  } else if (props.type === 'Family' && data[2]) {
    results = data[2].results;
    props.type = 3;
  } else if (props.type === 'Documentary' && data[3]) {
    results = data[3].results;
    props.type = 4;
  }

  if (typeof window.orientation !== 'undefined') {
    startIndex = 0;
    setShow(startIndex);
  }

  useEffect(() => {
    if (embla) {
      embla.on('select', () => {
        console.log(`Current index is ${embla.selectedScrollSnap()}`);
      });
    }
  }, [embla]);

  return (
    <Fragment>
      <StyledWrapper
        emblaRef={setEmbla}
        options={{ loop: false, startIndex: startIndex }}
      >
        <div style={{ display: 'flex' }}>
          {results &&
            results.map((item, counter) => (
              <PosterWrapper
                key={counter}
                onClick={() => [
                  setShow(item.id),
                  data.setGenre(() => props.type)
                ]}
              >
                <img
                  alt={item.original_title}
                  src={
                    item.poster_path
                      ? `${URL_POSTERS}${item.poster_path}`
                      : DEFAULT_POSTER
                  }
                  width={150}
                  height={225}
                />
              </PosterWrapper>
            ))}
        </div>
      </StyledWrapper>
      <ButtonsWrapper>
        <StyledButton onClick={() => embla.scrollPrev()}>Prev</StyledButton>
        <StyledButton onClick={() => embla.scrollNext()}>Next</StyledButton>
      </ButtonsWrapper>
    </Fragment>
  );
};

export default List;
