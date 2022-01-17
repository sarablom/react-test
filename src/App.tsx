import { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Counter from './components/Counter';
import DropMenu from './components/DropMenu';
import Dinopedia from './components/dinosaur/Dinopedia';
import Navbar from './components/Navbar';
import Chat from './components/Chat';

function App() {
  const [view, setView] = useState<number>(0);
  
  return (
    <div className="App">
      <Navbar items={['Start', 'Info', 'About', 'Profile']} setView={setView} />
     <Calculator />
     <Counter />
     <DropMenu />
     <Dinopedia />
     <Chat />
    </div>
  );
}

export default App;
