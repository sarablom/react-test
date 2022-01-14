import React from 'react'
import { Link } from '../models/Link'
import styled from 'styled-components/macro';

interface Props {
    items: string[];
}



function Navbar({ items }: Props) {
    return (
        <NavbarWrapper>
            <ListWrapper onClick={() => console.log(items)}>
                {items.map(item => (
                    <li key={item}>
                        {item}
                    </li>
                ))}
            </ListWrapper>
        </NavbarWrapper>
    )
}

const NavbarWrapper = styled.nav `
    background: #454545;
    color: #eee;
    height: 100px;
`

const ListWrapper = styled.ul `
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    padding-top: 20px;
`

export default Navbar
