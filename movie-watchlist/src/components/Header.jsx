import React from 'react';

function Header(p) {
  const h5Text = (p.isSearchPage) ? "My Watchlist" : "Search for movies";
  return (
    <header>
        <h1>Find your film</h1>
        <h5 onClick={p.switchPage}>{h5Text}</h5>
    </header>
  );
}

export default Header;
