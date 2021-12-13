import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
} from './navElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink><NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/lifestyle" activeStyle>
                        Life Style
                    </NavLink>

                </NavMenu>

            </Nav>
        </>
    );
};

export default Navbar;