import { useState } from "react";
import "./App.css";
import Calculator from "./components/calculator/Calculator";
import Counter from "./components/counter/Counter";
import DropMenu from "./components/dropmenu/DropMenu";
import Dinopedia from "./components/dinosaur/Dinopedia";
import Navbar from "./components/navbar/Navbar";
import Chat from "./components/chat/Chat";
import Validation from "./components/validation/Validation";
import Contacts from "./components/contacts/ContactList";

function App() {
  const [view, setView] = useState<number>(0);

  return (
    <div className="App">
      <Navbar items={["Start", "Info", "About", "Profile"]} setView={setView} />
      <Contacts />
      <Validation />
      <Calculator />
      <Counter />
      <DropMenu />
      <Dinopedia />
      <Chat />
    </div>
  );
}

export default App;
