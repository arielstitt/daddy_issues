import React, { Component } from 'react';
import HeaderNav from './HeaderNav'
import styled from 'styled-components'

const CharcoalButton = styled.button`
background-color: black;
color:white;

`
const MauveButton = styled.button`
background-color: pink;
`
class CharcoalListView extends Component {
    render() {
        return (
            <div>
                <div>
                    <CharcoalButton>Charcoal</CharcoalButton>
                    <MauveButton onClick={this.props.toggleCharcoalView}>
                        Pink
                        </MauveButton>
                </div>
                {this.props.charcoal.map(shirt => {
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

export default CharcoalListView;