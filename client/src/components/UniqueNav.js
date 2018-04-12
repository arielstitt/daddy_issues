import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import LoginView from "./LoginView"


const NavWrapper = styled.div`
width: 40vw;
height: 45vh;
padding: 1%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-end;
`
const PinkHover = styled(Link) `
    color:white;
    text-decoration: none;
    text-shadow: 2px 2px #ce6a6a;
    &:hover {
        color:bisque;
    }
`

class UniqueNav extends Component {
    render() {
        return (

            <NavWrapper>

                <PinkHover to="/login"> <h1>Login </h1></PinkHover>
                <PinkHover to="#"> <h1>Smell Daddy Issues</h1>  </PinkHover>
                <PinkHover to="#"><h1>Wear Daddy Issues</h1>  </PinkHover>
                <PinkHover to="/about">
                    <h1>About Us </h1>
                </PinkHover>

            </NavWrapper>

        );
    }
}

export default UniqueNav;