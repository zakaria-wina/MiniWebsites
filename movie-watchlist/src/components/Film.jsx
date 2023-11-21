import React from 'react';

function Film(p) {
    const { Poster, Title, Type, Year } = p.film;
    return (
        <div className="film">
            <img src={Poster} />
            <div className="film-info">
                <h2><span>Title : </span>{Title}</h2>
                <h2><span>Type : </span>{Type}</h2>
                <h2><span>Year : </span>{Year}</h2>
                <button
                    onClick={() => { p.btnFunc(p.film) }}
                >{(p.isSearchPage ? "Add to" : "Remove from") + " Watchlist"}</button>
            </div>
        </div>
    );
}

export default Film;
