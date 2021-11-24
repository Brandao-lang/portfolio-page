import React, {useEffect } from 'react'
import './App.css';
// import { Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Skills from './components/Skills';

function App() {

  useEffect(() => {
    document.title = 'Elijah Brandao'
  }, [])

  return (
    <div className="App">
      <Navigation />
      <div className='page-body'>
        <Main />
        <Skills />
        <Project />
      </div>
    </div>
  );
}

export default App;
