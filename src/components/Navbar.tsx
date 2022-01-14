import { useState } from 'react';
import styled from "styled-components/macro";

interface Props {
    items: string[];
    setView: Function;
  }

function Navbar({ items, setView }: Props) {
    const [isActive, setIsActive] = useState<string>('Start');

    function addClassHandler(e: any, index: number) { 
        setIsActive(e.target.innerHTML);
        setView(index)
    }

  return (
    <NavbarWrapper>
      <ListWrapper>
        {items.map((item, index) => (
          <ListElement 
            key={item} 
            onClick={(e: object) => addClassHandler(e, index)}
            className={isActive === item ? 'selected' : ''}
            >
            {item}
          </ListElement>
        ))}
      </ListWrapper>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.nav`
  background: #454545;
  color: #eee;
  height: 100px;
`;

const ListWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  padding-top: 20px;
`;
const ListElement = styled.li`
  cursor: pointer;
`;

export default Navbar;
