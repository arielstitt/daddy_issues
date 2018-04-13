import React, { Component } from 'react';
import styled from "styled-components"
import UniqueNav from './UniqueNav';

const LandingWrapper = styled.div`
background-color: ${props => props.background};
color:white;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: row;
align-items: center;
`


class LandingPage extends Component {
    state = {
        background: '#383434'
    }

    changeBackground = (color) =>{
        this.setState({background: color})
    }


    render() {
        return (
            <LandingWrapper background={this.state.background}>
                <div>
                    <UniqueNav
                        changeBackground={this.changeBackground}
                    />
                </div>
            </LandingWrapper>
        );
    }
}

export default LandingPage;