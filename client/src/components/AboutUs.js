import React, { Component } from 'react';
import styled from 'styled-components'
import HeaderNav from './merchandise/HeaderNav'
import { Header } from 'semantic-ui-react';


const ComingSoonWrapper = styled.div`
display:flex;
justify-content; space-around;
background-color: #c1929a;
height: 100vh;
`

class AboutUs extends Component {
    render() {
        return (
            <div>
                <HeaderNav />
                <ComingSoonWrapper>
                
                   <img src="http://boyyeahright.corgiorgy.com/" alt=""/>
                    
                </ComingSoonWrapper>


            </div>
        );
    }
}

export default AboutUs;