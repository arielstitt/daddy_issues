import React, { Component } from 'react';
import HeaderNav from './HeaderNav'
import axios from 'axios';
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import { Grid, Image, Segment } from 'semantic-ui-react'



const CharcoalButton = styled.button`
background-color: black;
color:white;

`
const MauveButton = styled.button`
background-color: pink;
`
const ToggleButtonWrapper = styled.div`
height: 5vh;
background-color: #846d6d;
display: flex;
justify-content: center;
align-items:center;
`
const MerchWrap = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:space-around;
`

const MerchSpace = styled.div`
padding:3%;
margin: 1%;
`

class CharcoalListView extends Component {
  
    
    render() {
        return (
            <div>
                <div>

                    <ToggleButtonWrapper>
                        <div>
                            <MauveButton size='mini'onClick={this.props.toggleCharcoalView} >
                                [p]
                        </MauveButton>
                            <CharcoalButton size='mini ' >
                                [b]
                        </CharcoalButton>

                        </div>
                    </ToggleButtonWrapper>
                </div>
                <div>
                    <MerchWrap>
                        {this.props.charcoal.map(shirt => {
                            return (
                                <div key={shirt.id}>
                                    <MerchSpace>
                                        <Grid.Column >
                                            <Segment>
                                                <h1> {shirt.title}</h1>
                                                <Image
                                                    height="300px"
                                                    width="300px"
                                                    src={shirt.image}
                                                />
                                                <h3> $ {shirt.price}</h3>
                                            </Segment>

                                        </Grid.Column>

                                    </MerchSpace>
                                </div>
                            )
                        })}

                    </MerchWrap>
                </div>

            </div>
        );
    }
}

export default CharcoalListView;