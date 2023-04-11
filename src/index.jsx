import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelancers from './pages/Freelancers'
import Footer from './components/Footer'
import GlobalStyle from './utils/style/GlobalStyle'
import Profile from './pages/Profile'
import { ThemeProvider, SurveyProvider } from './utils/context'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/survey/:questionNumber' element={<Survey />} />
            <Route path='*' element={<Error />} />
            <Route path='/results' element={<Results />} />
            <Route path='/freelancers' element={<Freelancers/>} /> 
            <Route path='/profile/:id' element={<Profile />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);