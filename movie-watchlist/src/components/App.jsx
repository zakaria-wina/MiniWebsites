import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';

function App() {
  let [isSearchPage, setIsSearchPage] = useState(true);

  return (
    <div id="container" className="container">
      <Header
        isSearchPage={isSearchPage}
        switchPage={() => { setIsSearchPage(prevIsSearchPage => !prevIsSearchPage) }}
      />
      <Main
        isSearchPage={isSearchPage}
      />
    </div>
  );
}

export default App;
