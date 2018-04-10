import React, { Component } from 'react';
import styled from 'styled-components'

const NavWrapper = styled.div `
background-color: black;
width: 40vw;
height: 45vh;
padding: 1%;
`

class UniqueNav extends Component {
    render() {
        return (
            
                <NavWrapper>
                    <h1>Login</h1>
                    <h1>Smell Daddy Issues</h1>
                    <h1>Wear Daddy Issues</h1>
                    <h1>About Us</h1>
                </NavWrapper>
           
        );
    }
}

export default UniqueNav;