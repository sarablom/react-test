import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import Counter from './components/Counter';
import DropMenu from './components/DropMenu';

function App() {
  return (
    <div className="App">
     <Calculator />
     <Counter />
     <DropMenu />
    </div>
  );
}

export default App;
