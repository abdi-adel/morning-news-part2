import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import ScreenHome from './ScreenHome';
import ScreenArticlesBySource from './ScreenArticlesBySource'
import ScreenMyArticles from './ScreenMyArticles'
import ScreenSource from './ScreenSource'

function App() {
  return (

    <Router>
      <Routes>
        <Route element={<ScreenHome />} path="/" exact />
        <Route element={<ScreenSource />} path="/screensource" exact />
        <Route element={<ScreenArticlesBySource />} path="/screenarticlesbysource/:id" exact />
        <Route element={<ScreenMyArticles />} path="/screenmyarticles" exact />
      </Routes>
    </Router>

  );
}

export default App;
