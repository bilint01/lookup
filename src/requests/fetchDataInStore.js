const URL_TOP_MOVIES =
  'https://api.themoviedb.org/3/discover/movie?api_key=5743243967c4f328223ba8c6fe5a7ceb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

const URL_TOP_TV_SERIES =
  'https://api.themoviedb.org/3/discover/tv?api_key=5743243967c4f328223ba8c6fe5a7ceb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

const URL_FAMILY =
  'https://api.themoviedb.org/3/discover/movie?api_key=5743243967c4f328223ba8c6fe5a7ceb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=10751&page=1';

const URL_DOCUMENTARY =
  'https://api.themoviedb.org/3/discover/movie?api_key=5743243967c4f328223ba8c6fe5a7ceb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=99&page=1';

const URLS = [URL_TOP_MOVIES, URL_TOP_TV_SERIES, URL_FAMILY, URL_DOCUMENTARY];

export const fetchDataInStore = update => {
  Promise.all(
    URLS.map(url =>
      fetch(url)
        .then(function(response) {
          if (response.status !== 200) {
            console.log('Error status code: ' + response.status);
          }
          // Examine the text in the response
          return response.json();
        })
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        })
    )
  ).then(result => update(current => (current = result)));
};
