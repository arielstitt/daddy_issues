import React, { Component } from 'react';
import axios from 'axios'
import { link } from 'react-router-dom'
import styled from 'styled-components'

const CharcoalButton = styled.button`
background-color: black;
color:white;

`
const MauveButton = styled.button`
background-color: pink;
`
const ToggleButtonWrapper = styled.div`
height = 1vh;
background-color: pink;
display: flex:
justify-content: space-around;
`

class MauveListView extends Component {

    render() {
        return (
            <div>
                <div>
                    <MauveButton >Pink</MauveButton>
                    <CharcoalButton onClick={this.props.toggleCharcoalView}>
                        Charcoal
                        </CharcoalButton>
                </div>
                

            {this.props.mauve.map(shirt => {
                    return (
                        <div key={shirt.id}>
                            <img height="300px"
                                width="300px"
                                src={shirt.image}
                            />
                            <br />
                            <h1> {shirt.title}</h1>
                            <br />
                            {shirt.price}
                            <br />
                            {shirt.description}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default MauveListView;