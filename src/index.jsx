
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelancers from './pages/Freelancers'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-sherif;
    }

    body {
      margin: 0;
    }
` 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/survey/:questionNumber' element={<Survey />} />
        <Route path='' element={<Error />} />
        <Route path='/results' element={<Results />} />
        <Route path='/freelancers' element={<Freelancers/>} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);