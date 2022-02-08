import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import React, { Component, useState } from 'react';
import { GlobalStyle } from './GlobalStyle'
import Header from './components/Header'
import Home from './components/Home'
import Movie from './components/Movie'
import NotFound from './components/NotFound'

function App () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/RMDB-ReactJS' element={<Home/>}/>
        <Route path='/:movieId' element={<Movie/>}/>
        <Route path='/RMDB-ReactJS/*' element={<NotFound/>} />
      </Routes>
      <GlobalStyle />
    </Router>
  )
}
export default App;
