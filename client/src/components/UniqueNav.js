import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import LoginView from "./issues/LoginView"


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
    text-shadow: 2px 2px 3px #ce6a6a;
    &:hover {
        color:bisque;
}
    }
`

class UniqueNav extends Component {
    render() {
        return (

            <NavWrapper>

                <PinkHover
                    onMouseOver={() => this.props.changeBackground("green")}
                    onMouseLeave={() => this.props.changeBackground("#383434")}
                    to="/login"> <h1>Login </h1>
                </PinkHover>

                <PinkHover
                    onMouseOver={() => this.props.changeBackground("Red")}
                    onMouseLeave={() => this.props.changeBackground("#383434")}
                    to="/candles"> <h1>Smell Daddy Issues</h1>
                </PinkHover>

                <PinkHover
                    onMouseOver={() => this.props.changeBackground("blue")}
                    onMouseLeave={()=> this.props.changeBackground("#383434")}
                    to="/shirts"><h1>Wear Daddy Issues</h1>
                </PinkHover>

                <PinkHover
                    onMouseOver={() => this.props.changeBackground("yellow")}
                    onMouseLeave={()=> this.props.changeBackground("#383434")}
                    to="/about">
                    <h1>About Us </h1>
                </PinkHover>

            </NavWrapper>

        );
    }
}

export default UniqueNav;