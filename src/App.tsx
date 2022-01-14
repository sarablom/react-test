import './App.css';
import Calculator from './components/Calculator';
import Counter from './components/Counter';
import DropMenu from './components/DropMenu';
import Dinopedia from './components/dinosaur/Dinopedia';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar items={['Start', 'Info', 'About', 'Profile']} />
     <Calculator />
     <Counter />
     <DropMenu />
     <Dinopedia />
    </div>
  );
}

export default App;
