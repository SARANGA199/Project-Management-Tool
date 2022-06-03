import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './GlobalState.js';
import Header from './Components/Header/Header.js';
import Pages from './Components/Pages.js';

function App() {
  return (
    <DataProvider>
      <Router>
          <Header />
          <Pages/>
      </Router>
    </DataProvider>
  );
}

export default App;