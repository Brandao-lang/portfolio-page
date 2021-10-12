import './App.css';
// import { Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      
        <Navigation />
        <Main />
        <Skills />
        <Project />
    </div>
  );
}

export default App;
