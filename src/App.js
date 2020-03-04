import React, { useState, useEffect, createContext } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import { fetchDataInStore } from './requests/fetchDataInStore';
import Detail from './pages/Detail.jsx';
import ListingPage from './pages/ListingPage.jsx';

export const AppContext = createContext(null);
const genres = ['Popular movies', 'Popular series', 'Family', 'Documentary'];

const Styledh1 = styled.h1`
  padding: 8px 18px 0 18px;
`;

function App() {
  let [data, updateData] = useState(null);
  let [currentMovie, setShow] = useState(null);
  let [currentGenre, setGenre] = useState(null);

  if (data) {
    data.setShow = setShow; // set current movie || show
    data.setGenre = setGenre; // set current genre
    data.URL_POSTERS = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';
    data.currentMovie = currentMovie; // current movie
    data.currentGenre = currentGenre; // current genre
  }

  // fetch data and add them into state
  useEffect(() => fetchDataInStore(updateData), [currentMovie]);
  return (
    <AppContext.Provider className="App" value={data}>
      <header className="App-header">
        <Styledh1>
          <img src={logo} className="App-logo" alt="logo" />
          LookUp
        </Styledh1>
        {!currentMovie && data && <ListingPage types={genres} />}
        {currentMovie && currentMovie && <Detail />}
      </header>
    </AppContext.Provider>
  );
}

export default App;
