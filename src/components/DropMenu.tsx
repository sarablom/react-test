import { useState } from "react";

function DropMenu() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <button onClick={() => setToggleMenu(!toggleMenu)}>Menu</button>

      {toggleMenu && (
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      )}
    </nav>
  );
}

export default DropMenu;
