import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import FilmList from './components/FilmList';
import PlanetList from './components/PlanetList';
import DatabaseInfo from './components/DatabaseInfo';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/films" element={<FilmList />} />
          <Route path="/planets" element={<PlanetList />} />
          <Route path="/database" element={<DatabaseInfo />} />
          <Route path="/" element={<h1>Welcome to Star Wars Data</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
