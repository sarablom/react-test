import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import Counter from './components/Counter';
import DropMenu from './components/DropMenu';
import Dinopedia from './components/dinosaur/Dinopedia';

function App() {
  return (
    <div className="App">
     <Calculator />
     <Counter />
     <DropMenu />
     <Dinopedia />
    </div>
  );
}

export default App;
