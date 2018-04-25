import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavWrapper = styled.div`
display: flex;
justify-content: space-around;
height: 25vh;
align-items:center;
background-color: #383434;

`

const PinkHover = styled(Link) `
    color:white;
    text-decoration: none;
    text-shadow: 2px 2px 3px #ce6a6a;
    &:hover {
        color:bisque;
}
    }
`

class HeaderNav extends Component {
    render() {
        return (
            <div>

                <NavWrapper>

                    <div>
                        <PinkHover to='/'>
                            <h1>Home</h1>
                        </PinkHover>
                    </div>
                    <div>
                        <PinkHover to='/candles'>
                            <h1>Candles</h1>
                        </PinkHover>
                    </div>
                    <div>
                        <PinkHover to='/shirts'>
                            <h1>Shirts</h1>
                        </PinkHover>
                    </div>

                    <div>
                        <PinkHover to='/login'>
                            <h1>Login</h1>
                        </PinkHover>
                    </div>

                    <div>
                        <PinkHover to='/about'>
                            <h1>About</h1>
                        </PinkHover>
                    </div>

                </NavWrapper>

            </div>
        );
    }
}

export default HeaderNav;