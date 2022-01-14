import { useState } from 'react';
import styled from "styled-components/macro";

interface Props {
    items: string[];
  }

function Navbar({ items }: Props) {
    const [isActive, setIsActive] = useState('Start');

    function addClassHandler(e: any) { 
        setIsActive(e.target.innerHTML);
    }

  return (
    <NavbarWrapper>
      <ListWrapper>
        {items.map((item) => (
          <ListElement 
            key={item} 
            onClick={(e) => addClassHandler(e)}
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
