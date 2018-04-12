import React, { Component } from 'react';
import styled from "styled-components"
import UniqueNav from './UniqueNav';

const LandingWrapper = styled.div`
background-color: #383434;
color:white;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: row;
align-items: center;
`
class LandingPage extends Component {
    render() {
        return (
            <LandingWrapper>
                <div>
                    <UniqueNav />
                </div>
            </LandingWrapper>
        );
    }
}

export default LandingPage;