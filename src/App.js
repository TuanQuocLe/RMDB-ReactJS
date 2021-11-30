//routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import React, { Component, useState } from 'react';
//styles
import { GlobalStyle } from './GlobalStyle'
//components
import Header from './components/Header'
import Home from './components/Home'
import Movie from './components/Movie'
import NotFound from './components/NotFound'

function App () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:movieId' element={<Movie/>}/>
        <Route path='/*' element={<NotFound/>} />
      </Routes>
      <GlobalStyle />
    </Router>
  )
}
export default App;
