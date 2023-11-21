import React from 'react';
import { useState } from 'react';
import Film from './Film';

function Main(p) {
  let [filmList, setFilmList] = useState([]);
  let [watchList, setWatchList] = useState([]);

  console.log("Film Array =>", filmList);
  console.log("WatchList Array =>", watchList);

  async function searchFunc() {
    console.log("searchFunc()");
    const searchInput = document.querySelector('.search-input');
    if (searchInput.value) {
      const res = await fetch(`http://www.omdbapi.com/?apikey=b6db71cb&s=${searchInput.value}`);
      const data = await res.json();
      console.log(data.Search);
      if (!data.Error) setFilmList(data.Search);
      searchInput.value = "";
    } else {
      searchInput.style.borderColor = "red";
      setTimeout(() => { searchInput.style.borderColor = "#D1D5DB"; }, 1000);
    }
  }

  function addToWatchList(currentFilm) {
    setWatchList(prevWatchList => {
      let newWatchList = [...prevWatchList];
      if (!newWatchList.find(film => film.imdbID === currentFilm.imdbID)) newWatchList.push(currentFilm);
      return newWatchList;
    })
  }

  function removeFromWatchList(currentFilm) {
    setWatchList(prevWatchList => {
      let newWatchList = [];
      prevWatchList.forEach(film => {
        if (film.imdbID !== currentFilm.imdbID) newWatchList.push(film);
      })
      return newWatchList;
    })
  }

  const searchBar = (
    <section className="search-bar">
      <input type="text" className="search-input" placeholder="Search for a movie" />
      <button className="search-btn" onClick={searchFunc}>Search</button>
    </section>
  );
  return (
    <>
      {p.isSearchPage && searchBar}
      <main>
        <div className="films">
          {
            (p.isSearchPage) ?
            filmList.map((film, index) => <Film
                key={index}
                film={film}
                btnFunc={addToWatchList}
                isSearchPage={p.isSearchPage} />) :
            watchList.map((film, index) => <Film
                key={index}
                film={film}
                btnFunc={removeFromWatchList}
                isSearchPage={p.isSearchPage} />)
          }
        </div>
      </main>
    </>
  );
}

export default Main;
